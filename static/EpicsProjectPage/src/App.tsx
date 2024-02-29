import React from "react";
import { invoke } from "@forge/bridge";
import EpicsList from "./components/epicslist/EpicsList";

const App: React.FC<any> = (props: any) => {
  return (
    <>
      <EpicsList />
    </>
  );
};

export default App;
