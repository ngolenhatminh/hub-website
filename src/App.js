import React from "react";
import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import AddCommentIcon from "@material-ui/icons/AddComment";
import BorderClearIcon from "@material-ui/icons/BorderClear";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Button from "@material-ui/core/Button";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import EnhancedTable from "./components/EnhancedTable";

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
    label: "Contacts",
    component: <h1>Contacts</h1>,
    icon: <AddCommentIcon />,
  },
  {
    id: 2,
    label: "Conversations",
    component: <h1>Conversations</h1>,
    icon: <AddCommentIcon />,
  },
  {
    id: 3,
    label: "Marketing",
    component: <h1>Marketing</h1>,
    icon: <BorderClearIcon />,
  },
  {
    id: 4,
    label: "Sales",
    component: <h1>Sales</h1>,
    icon: <DateRangeIcon />,
  },
  {
    id: 5,
    label: "Services",
    component: <h1>Services</h1>,
    icon: <DateRangeIcon />,
  },
  {
    id: 6,
    label: "Automation",
    component: <h1>Automation</h1>,
    icon: <DateRangeIcon />,
  },
  {
    id: 7,
    label: "Reports",
    component: <h1>Reports</h1>,
    icon: <DateRangeIcon />,
  },
];

export default App;
