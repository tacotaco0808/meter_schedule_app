import { useRef, useState } from "react";
import PropTypes from "prop-types";

export const ScheduleTime = ({ time }) => {
  const inputTimeRef = useRef();
  const [scheduleTime, setScheduleTime] = useState(time);
  const [isVisible, setIsVisible] = useState(false);
  const inputTimeChange = () => {
    setScheduleTime(inputTimeRef.current.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(scheduleTime);
      setIsVisible(!isVisible);
    }
  };
  const handleDivTimeOnClick = () => {
    setIsVisible(!isVisible);
  };
  const handleInputTimeOnClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div onClick={handleDivTimeOnClick}>
      {isVisible ? (
        <input
          type="time"
          ref={inputTimeRef}
          onKeyDown={handleKeyDown}
          onClick={handleInputTimeOnClick}
          onChange={inputTimeChange}
        />
      ) : (
        scheduleTime
      )}
    </div>
  );
};
ScheduleTime.propTypes = {
  time: PropTypes.string,
};
