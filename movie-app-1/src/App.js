import React from "react";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/Router";

function App() {

  return (

    <div className="App">
      <AuthContextProvider>
        <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
