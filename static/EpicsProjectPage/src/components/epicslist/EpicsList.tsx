import React, { useEffect, useState } from "react";
import "./EpicsList.scss";
import DynamicTable from "@atlaskit/dynamic-table";
import { createHead, rows } from "./EpicsListHelpers";

const EpicsList: React.FC<any> = (props: any) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <DynamicTable
        caption="List of Suggested Epics"
        head={createHead(false)}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        isRankable
        isLoading={loading}
        onRankStart={(params) => console.log("onRankStart", params)}
        onRankEnd={(params) => console.log("onRankEnd", params)}
        onSort={() => console.log("onSort")}
        onSetPage={() => console.log("onSetPage")}
      />

      {/* <DynamicTable
        caption="List of Created Epics"
        head={createHead(false)}
        rows={rows}
        rowsPerPage={10}
        defaultPage={1}
        isRankable
        isLoading={loading}
        onRankStart={(params) => console.log("onRankStart", params)}
        onRankEnd={(params) => console.log("onRankEnd", params)}
        onSort={() => console.log("onSort")}
        onSetPage={() => console.log("onSetPage")}
      /> */}
    </>
  );
};

export default EpicsList;
