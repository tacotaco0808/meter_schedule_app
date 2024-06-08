import PropTypes from "prop-types";
import { ScheduleItem } from "./ScheduleItem";
import { ScheduleTime } from "./ScheduleTime";

export const ScheduleContainer = ({
  label,
  time,
  scheduleTitle,
  keyNumber,
  updateSchedule,
}) => {
  const debug = () => {
    console.log(scheduleTitle);
  };
  return (
    <div>
      <p>{keyNumber}</p>
      <ScheduleItem
        label={label}
        scheduleTitle={scheduleTitle}
        keyNumber={keyNumber}
        updateSchedule={updateSchedule}
      />
      <ScheduleTime
        time={time}
        keyNumber={keyNumber}
        updateSchedule={updateSchedule}
      />
      <button onClick={debug}>debug</button>
    </div>
  );
};

ScheduleContainer.propTypes = {
  label: PropTypes.string,
  scheduleTitle: PropTypes.string,
  time: PropTypes.string,
  keyNumber: PropTypes.number,
  updateSchedule: PropTypes.func,
};
