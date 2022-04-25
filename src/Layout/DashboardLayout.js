import { NavBar } from "../Views/Components/NavBar";
import { Header } from "../Views/Components/Header";

export const DashboardLayout = (props) => {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="dashboard-body-wrapper">
        <Header {...props} />
        <div className="report-wrapper">{props.children}</div>
      </div>
    </div>
  );
};
