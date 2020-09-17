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
    label: "Home",
    component: <h1>Home</h1>,
    icon: <HomeIcon />,
  },
  {
    id: 2,
    label: "Modal",
    component: <h1>Modal</h1>,
    icon: <AddCommentIcon />,
  },
  {
    id: 3,
    label: "GridList",
    component: <h1>GridList</h1>,
    icon: <BorderClearIcon />,
  },
  {
    id: 4,
    label: "DatePickers",
    component: <h1>DatePickers</h1>,
    icon: <DateRangeIcon />,
  },
];

export default App;
