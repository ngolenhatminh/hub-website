import React from "react";
import "./App.css";
import HomeIcon from "@material-ui/icons/Home";
import AddCommentIcon from "@material-ui/icons/AddComment";
import BorderClearIcon from "@material-ui/icons/BorderClear";
import DateRangeIcon from "@material-ui/icons/DateRange";

import NavBar from "./components/NavBar";
import CoursesList from "./components/CourseList";

function App() {
  return (
    <div className="App">
      <NavBar tabs={tabs} />
      <CoursesList />
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
