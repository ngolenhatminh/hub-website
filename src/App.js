import React from "react";
import "./App.css";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import EnhancedTable from "./components/EnhancedTable";

import CompanyIcon from "@material-ui/icons/Business";
import AddIcon from "@material-ui/icons/Add";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar tabs={tabs} />
      <EnhancedTable />
    </div>
  );
}

const tabs = [
  {
    id: 1,
    label: "All Companies",
    component: <h1>All Companies</h1>,
    icon: <CompanyIcon />,
  },
  {
    id: 2,
    label: "My Companies",
    component: <h1>My Companies</h1>,
    icon: <CompanyIcon />,
  },
  {
    id: 3,
    label: "Add View",
    component: <h1>Add View</h1>,
    icon: <AddIcon />,
  },
];

export default App;
