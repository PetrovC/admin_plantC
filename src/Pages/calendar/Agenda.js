import { Typography } from "@mui/material";
import React from "react";
import moment from "moment";

const Agenda = () => {
  let weekdayshort = moment.weekdaysShort();
  let weekdayshortname = weekdayshort.map((day) => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });
  return (
    <main>
      <Typography component="h1" variant="h3">
        Agenda/calendar
        {weekdayshortname}
      </Typography>
    </main>
  );
};
export default Agenda;
