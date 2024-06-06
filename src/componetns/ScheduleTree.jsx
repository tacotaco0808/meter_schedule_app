import { useEffect, useState } from "react";
import { ScheduleContainer } from "./ScheduleContainer";

export const ScheduleTree = () => {
  const [scheduleTree, setScheduleTree] = useState([]);
  useEffect(() => {
    // 初期データを設定する
    setScheduleTree((prevScheduleTree) => [
      ...prevScheduleTree,
      { title: "test", time: "12:00" },
    ]);
  }, []); // 空の依存配列を渡して、一度だけ実行されるようにする
  const showScheduleTree = scheduleTree.map((schedule, index) => (
    <li key={index}>
      <ScheduleContainer
        label="label"
        scheduleTitle={schedule.title}
        time={schedule.time}
      />
    </li>
  ));
  return <>{showScheduleTree}</>;
};
