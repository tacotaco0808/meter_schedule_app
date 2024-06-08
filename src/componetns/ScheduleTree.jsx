import { useState } from "react";
import { ScheduleContainer } from "./ScheduleContainer";

export const ScheduleTree = () => {
  const [scheduleTree, setScheduleTree] = useState([]);
  const debug = () => {
    removeSchedule(3);
  };
  /*予定を追加 */
  const createSchedule = () => {
    setScheduleTree((prevScheduleTree) => [
      ...prevScheduleTree,
      { id: Date.now(), title: "追加した予定", time: "12:00" },
    ]);
  };
  /*予定の削除 keyNumberで指定した番号の配列の削除*/
  const removeSchedule = (delKeyNumber) => {
    console.log(`number:${delKeyNumber},`);
    const newScheduleTree = scheduleTree.filter(
      (schedule) => schedule.id !== delKeyNumber
    );
    setScheduleTree([...newScheduleTree]);
  };
  /*予定情報を上書き keyNumberで指定した番号の配列の{title,time}を書き換える */
  const updateSchedule = (keyNumber, title, time) => {
    setScheduleTree((prevArray) => {
      const newArray = prevArray.map((schedule) =>
        schedule.id === keyNumber
          ? {
              ...schedule,
              title: title !== "NONE" ? title : schedule.title,
              time: time !== "NONE" ? time : schedule.time,
            }
          : schedule
      );
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
      <li key={schedule.id}>
        <ScheduleContainer
          label={label}
          scheduleTitle={schedule.title}
          time={schedule.time}
          keyNumber={schedule.id}
          updateSchedule={updateSchedule}
          removeSchedule={removeSchedule}
        />
      </li>
    );
  });
  return (
    <>
      <ul>{showScheduleTree}</ul>
      <button onClick={createSchedule}>追加</button>
      <button onClick={debug}>debug</button>
    </>
  );
};
