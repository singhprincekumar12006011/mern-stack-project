import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Attendance() {
  const [date, setDate] = useState(new Date());

  const time = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <div>
      <h1 className="text-3xl flex items-center justify-center font-bold text-indigo-800 mt-5 mb-6">
        Attendance Calendar
      </h1>
      <div className="flex sm:flex-row flex-col justify-center min-h-[500] gap-20 items-center ">
        <div className="  flex flex-col  items-center py-4 ">
          <div className="">
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-lg p-2 custom-react-calendar"
            />
          </div>

          <p className="mt-6 text-lg font-medium text-gray-700">
            Selected Date:{" "}
            <span className="text-indigo-600 font-bold">
              {date.toDateString()}
            </span>
          </p>
        </div>
        <div className="max-w-[600px] w-full bg-red-100 p-5 border-b border-t ">
          {time.map((time, index) => (
            <p
              key={index}
              className={`text-lg justify-center px-2  flex flex-col gap-2 border-b border-gray-400 pb-2 ${
                index === 3 ? "px-2 bg-indigo-100" : ""
              }`}
            >
              {time}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Attendance;
