import React, { useState } from "react";
import Close from "../../img/icon/close.png";

function NoneMember({ onClose }) {
  const [active, setActive] = useState(true);

  const onChange = (e) => {
    setActive(false);
    console.log(e.target.value);
    if (e.target.value === "") {
      setActive(true);
    }
  };
  return (
    <div className="popupWrap">
      <div className="popup">
        <div className="popupContainer">
          <div className="popupHeader">
            <img src={Close} alt="close" onClick={onClose} />
          </div>
          <div className="popupContent noneMember">
            <p className="popupTitle">정말로 탈퇴하시겠습니까?</p>
            <p className="subTitle">
              아래에 '회원탈퇴' 라고 입력한 뒤 진행해 주세요
            </p>
            <div className="inputArea">
              <input type="text" placeholder="회원탈퇴" onChange={onChange} />
            </div>
          </div>
          <div className="popupFooter">
            <button className={active ? "btnStorke" : "btnRed"}>
              회원탈퇴
            </button>
            <button className="btnCancel" onClick={onClose}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoneMember;
