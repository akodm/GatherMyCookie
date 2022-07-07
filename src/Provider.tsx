import React from "react";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const Provider = () => {
  return <ErrorBoundary>
    <App />
  </ErrorBoundary>;
};

export default Provider;
