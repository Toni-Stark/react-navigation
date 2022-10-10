/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

// Import root app
import App from './containers/App';
import LanguageProvider from 'containers/LanguageProvider';

import configureStore from './configureStore';
import { translationMessages } from './i18n';
import SplashScreen from 'react-native-splash-screen';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

function AppRoot() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <App />
      </LanguageProvider>
    </Provider>
  );
}

export default AppRoot;
