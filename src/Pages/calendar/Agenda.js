import { Typography } from "@mui/material";
import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import PickDateOfBirth from "./components/calendar/PickDateOfBirth";
import BookDrivingSlot from "./components/calendar/BookDrivingSlot";
import RoomScheduler from "./components/scheduler/RoomScheduler";

const Agenda = () => {
  return (
    <main>
      {/* <Typography component="h1" variant="h3">
        Agenda/calendar
        {weekdayshortname}
      </Typography> */}
      {/* <PickDateOfBirth /> */}
      {/* <hr className="k-my-8" /> */}
      {/* <BookDrivingSlot /> */}
      {/* <hr className="k-my-8" /> */}
      <RoomScheduler />
    </main>
  );
};
export default Agenda;
