var toggleMainPopup = function () {
  /* 스토리지 제어 함수 정의 */
  var handleStorage = {
    // 스토리지에 데이터 쓰기(이름, 만료일)
    setStorage: function (name, exp) {
      // 만료 시간 구하기(exp를 ms단위로 변경)
      var date = new Date();
      date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

      // 로컬 스토리지에 저장하기
      // (값을 따로 저장하지 않고 만료 시간을 저장)
      localStorage.setItem(name, date);
    },
    // 스토리지 읽어오기
    getStorage: function (name) {
      var now = new Date();
      now = now.setTime(now.getTime());
      // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
      // 시간이 남아 있으면 true, 아니면 false 리턴
      return parseInt(localStorage.getItem(name)) > now;
    },
  };

  // 쿠키 읽고 화면 보이게
  if (handleStorage.getStorage("today")) {
    $(".appPopup").removeClass("on");
  } else {
    $(".appPopup").addClass("on");
  }

  // 오늘하루
  $(".noneInstall").on("click", function () {
    // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
    handleStorage.setStorage("today", 1);
    $(this).parents(".appPopup").removeClass("on");
  });
};

$(function () {
  toggleMainPopup();
});

// 팝업 끝나는 날 설정
function now() {
  // 현재 날짜, 시간, 분, 초를 모두 가지고 와서 '년-월-일-시-분-초' 형식으로 만들어주는 함수
  const popDt = new Date(),
    popYear = popDt.getFullYear(),
    popMonth = popDt.getMonth() + 1,
    popDate = popDt.getDate(),
    popHours = popDt.getHours(),
    popMin = popDt.getMinutes();
  return (
    popYear +
    "-" +
    (popMonth < 10 ? "0" + popMonth : popMonth) +
    "-" +
    (popDate < 10 ? "0" + popDate : popDate) +
    "-" +
    popHours +
    "-" +
    popMin
  );
}

function endDate() {
  // 끝나는 날짜, 시간, 분, 초를 모두 가지고 와서 '년-월-일-시-분-초' 형식으로 만들어주는 함수
  const endYear = "2023",
    endMonth = "5",
    endDate = "31",
    endHours = "23",
    endMin = "59";

  return (
    endYear +
    "-" +
    (endMonth < 10 ? "0" + endMonth : endMonth) +
    "-" +
    (endDate < 10 ? "0" + endDate : endDate) +
    "-" +
    endHours +
    "-" +
    endMin
  );
}
function dayNone() {
  // 현재 날짜와, 끝나는 날짜 서로 비교하여 pop을 숨기는 기능
  if (now() == endDate()) {
    $(".imgPopup.on").remove();
  }
}

var ImgPopup = function () {
  /* 스토리지 제어 함수 정의 */
  var handleStorage = {
    // 스토리지에 데이터 쓰기(이름, 만료일)
    setStorage: function (name, exp) {
      // 만료 시간 구하기(exp를 ms단위로 변경)
      var date = new Date();
      date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

      // 로컬 스토리지에 저장하기
      // (값을 따로 저장하지 않고 만료 시간을 저장)
      localStorage.setItem(name, date);
    },
    // 스토리지 읽어오기
    getStorage: function (name) {
      var now = new Date();
      now = now.setTime(now.getTime());
      // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여
      // 시간이 남아 있으면 true, 아니면 false 리턴
      return parseInt(localStorage.getItem(name)) > now;
    },
  };

  // 쿠키 읽고 화면 보이게
  if (handleStorage.getStorage("today_1")) {
    $(".imgPopup").removeClass("on");
  } else {
    $(".imgPopup").addClass("on");
  }

  // 오늘하루 안보이게
  $(".imgPopupClose").on("click", function () {
    // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
    handleStorage.setStorage("today_1", 1);
    $(this).parents(".imgPopup").hide();
  });
};

$(function () {
  ImgPopup();
});

$(function () {
  dayNone();
});
