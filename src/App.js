import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {Screens} from './screens';
const App = () => {
  return (
    <Provider store={store}>
      <Screens />
    </Provider>
  );
};

export default App;
