import { useRef, useState } from "react";

export const ScheduleTime = () => {
  const inputTimeRef = useRef();
  const [scheduleTime, setScheduleTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("enter");
      setScheduleTime(inputTimeRef.current.value);
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
        />
      ) : (
        scheduleTime
      )}
    </div>
  );
};
