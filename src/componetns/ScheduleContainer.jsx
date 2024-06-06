import PropTypes from "prop-types";
import { ScheduleItem } from "./ScheduleItem";
import { ScheduleTime } from "./ScheduleTime";

export const ScheduleContainer = ({ label }) => {
  return (
    <div>
      <ScheduleItem label={label} />
      <ScheduleTime />
    </div>
  );
};

ScheduleContainer.propTypes = {
  label: PropTypes.string,
};
