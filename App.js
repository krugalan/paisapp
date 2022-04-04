import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { RootNavigation } from "./app/navigations/RootNavigation";

import { Loading } from "components_shared";

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <RootNavigation />        
      </PersistGate>
    </Provider>
  );
};
