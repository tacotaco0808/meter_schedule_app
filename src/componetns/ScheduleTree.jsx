import { useState } from "react";
import { ScheduleContainer } from "./ScheduleContainer";

export const ScheduleTree = () => {
  const [scheduleTree, setScheduleTree] = useState([]);
  const createSchedule = () => {
    setScheduleTree((prevScheduleTree) => [
      ...prevScheduleTree,
      { title: "追加した予定", time: "12:00" },
    ]);
  };
  const showScheduleTree = scheduleTree.map((schedule, index) => (
    <li key={index}>
      <ScheduleContainer
        label="label"
        scheduleTitle={schedule.title}
        time={schedule.time}
      />
    </li>
  ));
  return (
    <>
      <ul>{showScheduleTree}</ul>
      <button onClick={createSchedule}>追加</button>
    </>
  );
};
