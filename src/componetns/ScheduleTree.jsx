import { ScheduleContainer } from "./ScheduleContainer";

export const ScheduleTree = () => {
  return (
    <>
      <ScheduleContainer label="test" time="12:24" />
      <ScheduleContainer label="test1" time="12:00" />
      <ScheduleContainer label="test2" time="12:40" />
    </>
  );
};
