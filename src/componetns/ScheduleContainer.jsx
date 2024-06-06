import PropTypes from "prop-types";
import { ScheduleItem } from "./ScheduleItem";
import { ScheduleTime } from "./ScheduleTime";

export const ScheduleContainer = ({ label, time, scheduleTitle }) => {
  return (
    <div>
      <ScheduleItem label={label} scheduleTitle={scheduleTitle} />
      <ScheduleTime time={time} />
    </div>
  );
};

ScheduleContainer.propTypes = {
  label: PropTypes.string,
  scheduleTitle: PropTypes.string,
  time: PropTypes.string,
};
