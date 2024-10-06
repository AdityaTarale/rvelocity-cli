import {APIProvider} from '@/api/apiProvider';
import '@/i18n/i18next';
import React from 'react';
import {Navigator} from './navigation';
import '@/types/unistyles';

export const App = () => {
  return (
    <APIProvider>
      <Navigator />
    </APIProvider>
  );
};

export default App;
