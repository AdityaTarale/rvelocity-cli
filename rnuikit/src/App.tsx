import { APIProvider } from '@/api/apiProvider';
import '@/i18n/i18next';
import NetworkStatusBar from '@/ui/components/NetworkStatusBar';
import React from 'react';
import { Navigator } from './navigation';

export const App = () => {
  return (
    <APIProvider>
      <NetworkStatusBar />
      <Navigator/>
    </APIProvider>
  );
};

export default App;
