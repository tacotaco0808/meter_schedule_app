import PropTypes from "prop-types";
import { ScheduleItem } from "./ScheduleItem";
import { ScheduleTime } from "./ScheduleTime";

export const ScheduleContainer = ({ label, time }) => {
  return (
    <div>
      <ScheduleItem label={label} />
      <ScheduleTime time={time} />
    </div>
  );
};

ScheduleContainer.propTypes = {
  label: PropTypes.string,
  time: PropTypes.string,
};
