import { DashboardLayout } from "./Layout/DashboardLayout";
import Dashboard from "./Views/Dashboard/Dashboard";
import { columnMap } from "./Views/Components/data";
import { useState } from "react";
const App = () => {
  const [search, setSearch] = useState();
  const filterCandidate = (data) => {setSearch(data); };
  return (
    <DashboardLayout func={filterCandidate}>
      <Dashboard initial={columnMap} search={search} />
    </DashboardLayout>
  );
};
export default App;
