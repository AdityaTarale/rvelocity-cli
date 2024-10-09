import {APIProvider} from '@/api/apiProvider';
import '@/i18n/i18next';
import '@/types/unistyles';
import React from 'react';
import {Navigator} from './navigation';

function App() {
  return (
    <APIProvider>
      <Navigator />
    </APIProvider>
  );
}

let AppEntryPoint = App;

/* if (process.env.STORYBOOK_ENABLED) {
  } */
AppEntryPoint = require('../.storybook').default;

export default AppEntryPoint;
