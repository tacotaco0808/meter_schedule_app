import { useState } from "react";
import { ScheduleContainer } from "./ScheduleContainer";

export const ScheduleTree = () => {
  const [scheduleTree, setScheduleTree] = useState([]);
  /*予定を追加 */
  const createSchedule = () => {
    setScheduleTree((prevScheduleTree) => [
      ...prevScheduleTree,
      { title: "追加した予定", time: "12:00" },
    ]);
  };
  /*予定情報を上書き keyNumberで指定した番号の配列の{title,time}を書き換える */
  const updateSchedule = (keyNumber, title, time) => {
    setScheduleTree((prevArray) => {
      const newArray = [...prevArray];
      //titleとtimeの両方同時入力とは限らない
      if (title === "NONE") {
        console.log("timeのみ変更");
        newArray[keyNumber] = { ...newArray[keyNumber], time: time };
      } else if (time === "NONE") {
        console.log("titleのみ変更");
        newArray[keyNumber] = { ...newArray[keyNumber], title: title };
      } else {
        newArray[keyNumber] = { title: title, time: time };
        console.log("titleとtimeを変更");
      }
      return newArray;
    });
  };
  /*予定をツリー形式で表示 */
  const showScheduleTree = scheduleTree.map((schedule, index) => {
    let label;
    if (index === 0) {
      label = "start";
    } else if (index === scheduleTree.length - 1) {
      label = "end";
    } else {
      label = "予定No." + index;
    }
    console.log(scheduleTree);
    return (
      <li key={index}>
        <ScheduleContainer
          label={label}
          scheduleTitle={schedule.title}
          time={schedule.time}
          keyNumber={index}
          updateSchedule={updateSchedule}
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
