import {QueryCache, QueryClient, onlineManager, Query} from '@tanstack/react-query';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import React, {FC, PropsWithChildren, useEffect} from 'react';
import {addEventListener} from '@react-native-community/netinfo';
import {createSyncStoragePersister} from '@tanstack/query-sync-storage-persister';
import {Platform} from 'react-native';
import {Storage} from '@/types/reactQueryConfig';
import {zustandStorage} from './storageManager';

export const clientPersister = createSyncStoragePersister({
  storage: zustandStorage as Storage,
  throttleTime: 3000
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      staleTime: 5 * 60 * 1000,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      throwOnError: true
    }
  },
  queryCache: new QueryCache({
    onError: (/* error, query */) => {
      // TODO: Use this callback to handle all error at centralized point.
    }
  })
});

export const clearQueryCache = () => {
  queryClient.clear();
};

export const APIProvider: FC<PropsWithChildren> = ({children}) => {
  /*  Use of the onlineManager to correctly set the network state
  and according define default mutation which needs to be run when device comes online */
  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      const unsubscribe = addEventListener(async state => {
        const isOnline = !!(Platform.OS === 'android'
          ? state.isInternetReachable
          : state.isConnected);
        setOnline(isOnline);

        // Resuming the paused mutation
        if (isOnline) {
          /* Invalidating the queries to make sure data gets fetched again from the server when network comes back
          or the app gets launched again */

          await queryClient.invalidateQueries();
          await queryClient.resumePausedMutations();
        }
      });

      return () => {
        unsubscribe();
      };
    });

    return () => {
      onlineManager.setEventListener(() => () => {});
    };
  }, []);

  const persistFilter = (query: Query) => {
    const queryKey = query.queryKey[0];

    /*  Selectively persisting the queries of its success and
    has a 'persist' in its  query key as first argument */
    return queryKey === 'persist' && query.state.status === 'success';
  };

  return (
    <PersistQueryClientProvider
      persistOptions={{
        persister: clientPersister,
        dehydrateOptions: {shouldDehydrateQuery: persistFilter}
      }}
      client={queryClient}>
      {children}
    </PersistQueryClientProvider>
  );
};
