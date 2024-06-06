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
  const showScheduleTree = scheduleTree.map((schedule, index) => {
    let label;
    if (index === 0) {
      label = "start";
    } else if (index === scheduleTree.length - 1) {
      label = "end";
    } else {
      label = "予定No." + index;
    }
    return (
      <li key={index}>
        <ScheduleContainer
          label={label}
          scheduleTitle={schedule.title}
          time={schedule.time}
        />
      </li>
    );
  });
  return (
    <>
      <ul>{showScheduleTree}</ul>
      <button onClick={createSchedule}>追加</button>
    </>
  );
};
