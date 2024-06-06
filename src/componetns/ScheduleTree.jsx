import { ScheduleItem } from "./ScheduleItem";
import { ScheduleTime } from "./ScheduleTime";

export const ScheduleTree = () => {
  return (
    <>
      <ScheduleItem label="test" />
      <br />
      <ScheduleItem label="test2" />
      <p>end:</p>
      <ScheduleTime />
    </>
  );
};
