import PropTypes from "prop-types";
import { useRef, useState } from "react";
/*時刻と予定の名前情報を入力するためのコンポーネント */
export const ScheduleItem = ({ label, scheduleTitle }) => {
  //変数
  const [isVisible, setIsVisible] = useState(false);
  const [scheduleText, setScheduleText] = useState(scheduleTitle);
  const inputRef = useRef();
  //関数
  const handleInputOnChange = () => {
    setScheduleText(inputRef.current.value);
  };
  const handleInputOnClick = (e) => {
    //テキストボックスをクリックしても表示切替無効
    e.stopPropagation();
  };
  const handleKeyDown = (event) => {
    //エンターキーを押した際の処理
    if (event.key === "Enter") {
      console.log("press Enter");
      setScheduleText(inputRef.current.value);
      setIsVisible(!isVisible);
    }
  };
  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div onClick={toggleVisible}>
      <span>{label}</span>:
      {
        //表示を切り替え
        isVisible ? (
          <input
            ref={inputRef}
            type="text"
            placeholder="文字を入力してエンター"
            onKeyDown={handleKeyDown}
            onChange={handleInputOnChange}
            onClick={handleInputOnClick}
          />
        ) : (
          scheduleText
        )
      }
    </div>
  );
};
ScheduleItem.propTypes = {
  label: PropTypes.string,
  scheduleTitle: PropTypes.string,
};
