import {useEffect} from 'react';
import {AppState, AppStateStatus} from 'react-native';

type AppStateCallback = () => void;

const useAppState = (
  callback: AppStateCallback,
  targetAppStates: AppStateStatus[] = ['background', 'inactive']
) => {
  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (targetAppStates.includes(nextAppState)) {
        callback();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [callback, targetAppStates]);
};

export default useAppState;
