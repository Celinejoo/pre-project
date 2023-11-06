// 인력요청 iFrame 방식 Layer Popup JS

jQuery(document).ready(function ($) {
  $("#terms-link").click(function () {
    $("#terms").addClass("on");
  });
  $(".title_text_none2").click(function () {
    $("#terms").removeClass("on");
  });
  $(".serviceWrap").click(function () {
    $(".form-box").addClass("on");
    $(".bk_background").addClass("on");
  });
  $(".title_text_none").click(function () {
    $(".form-box").removeClass("on");
    $(".bk_background").removeClass("on");
  });

  $(".order_link_ck").click(function () {
    $(".order_iframe").addClass("on");
    $("#header-wrap").css("z-index", 2000);
    $(".appPopup").css("z-index", 1000);
    $(".bk_background").addClass("on");
  });

  $(".title_text_none3").click(function () {
    $(".order_iframe").removeClass("on");
    $("#header-wrap").css("z-index", 3009);
    $(".appPopup").css("z-index", 3000);
    $(".bk_background").removeClass("on");
  });

  $(".bk_background").click(function () {
    $("#terms").removeClass("on");
    $(".order_iframe").removeClass("on");
    $(".bk_background").removeClass("on");
    $("#header-wrap").css("z-index", 3009);
    $(".appPopup").css("z-index", 3000);
    $(".form-box").removeClass("on");
  });

  // 로그인 -> 회원가입 클릭 시 팝업
  $(".register").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#registerPopup").removeClass("hide");
  });

  //로그인페이지 -> 직종 선택 시 팝업
  $(".type3").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#typePopup ").removeClass("hide");
  });

  //login_next 검색 버튼 클릭 시 팝업
  $(".btn-search").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#searchPopup ").removeClass("hide");
  });

  //main.html

  //1. execl down popup
  $(".xls-down").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#alertPopup").removeClass("hide");
  });

  //2.작업 상세 정보
  $(".m-field").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#detailPopup").removeClass("hide");
  });

  //근로자 지정 팝업
  $(".name_choice").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#workerPopup").removeClass("hide");
  });

  //체크박스 선택 시 버튼이 생성

  $(".checkBox").on("click", function () {
    var checked = $(".checkBox").is(":checked");
    //console.log(checked);
    if (checked) {
      $(".btnWrap").addClass("active");
    } else {
      $(".btnWrap").removeClass("active");
    }
  });

  //체크 박스 선택 -> 빨간색 취소 버튼 클릭 닫음 처리
  $(".btnRed").on("click", function () {
    $(".btnWrap").removeClass("active");
  });

  // 날짜 선택 팝업 표출
  $("#btnCopy").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#datePopup").removeClass("hide");
  });

  //날짜 선택 후 -> 장소 선택 팝업
  $(".dateBox").on("click", function () {
    $("#datePopup").addClass("hide");
    $("#sitePopup").removeClass("hide");
  });

  //장소선택의 뒤로 가기 버튼 처리
  $("#sitePopup .back").on("click", function () {
    $("#datePopup").removeClass("hide");
    $("#sitePopup").addClass("hide");
  });

  //장소 선택-리스트 선택 후 인원 선택 팝업 표출
  $("#sitePopup .siteList").on("click", function () {
    $("#peopleNumPopup").removeClass("hide");
    $("#sitePopup").addClass("hide");

    //이분 재요청 클릭 시 장소 선택 후 닫히지 않게 처리
    if ($(".siteList").hasClass("active")) {
      $("#peopleNumPopup").addClass("hide");
      $("#sitePopup").removeClass("hide");
    }
  });

  //인원 선택 팝업 뒤로 가기 버튼
  $("#peopleNumPopup .back").on("click", function () {
    $("#peopleNumPopup").addClass("hide");
    $("#sitePopup").removeClass("hide");
  });

  //인원선택 +,- 처리
  var num = $(".inputNum").val();
  $(".btnMinus").on("click", function () {
    num--;
    $(".inputNum").val(num);
    if (num <= 0) {
      num = 0;
      $(".inputNum").val(num);
    }
  });

  $(".btnPlus").on("click", function () {
    num++;
    $(".inputNum").val(num);
    if (num >= 99) {
      num = 99;
      $(".inputNum").val(num);
    }
  });

  //지급 처리 확인 팝업
  $(".pay").on("click", function () {
    $("#payPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //인력교체 팝업
  $(".cate-btn2").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#chagePopup").removeClass("hide");
  });

  //요청 취소 팝업
  $(".cate-btn3").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#cancelPopup").removeClass("hide");
  });

  //이분재요청 클릭 시 팝업 표출
  $(".cate-btn6").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#datePopup").removeClass("hide");
    $(".siteList").addClass("active");
  });

  //평가 팝업 표출
  $(".cate-btn5").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#ratingPopup").removeClass("hide");
  });

  // 평가 팝업
  $(".starWrap span").click(function () {
    $(this).parent().children("span").removeClass("on");
    $(this).addClass("on").prevAll("span").addClass("on");
    return false;
  });

  //은행 팝업 표출
  $(".transfer").on("click", function () {
    $("#bankPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //서명하기 팝업 표출
  $(".singBtn").on("click", function () {
    $("#signPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //서명 팝업 -> 계약서 보기 버튼 클릭 -> 게약서 팝업
  $(".contractShow").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#contractPopup").removeClass("hide");
  });

  //계약서 보기 버튼 클릭 -> 계약서 팝업
  $(".contractBtn").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#contractPopup").removeClass("hide");
    $("#contractPopup").addClass("active");
  });

  //계약서 보기 팝업 close -> 계약서 팝업만 닫히게
  $(".contractClose").on("click", function () {
    $("#contractPopup").addClass("hide");

    if ($("#contractPopup").hasClass("active")) {
      $(".popupWrap").addClass("hide");
    } else {
      $(".popupWrap").removeClass("hide");
    }
  });

  $(".transferManager").on("click", function () {
    $("#transManagerPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //로그아웃 팝업
  $(".logout").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#logoutPopup").removeClass("hide");
  });

  //회원탈퇴 팝업
  $(".withdrawal").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#withdrawalPopup").removeClass("hide");
  });

  //공유하기
  $(".bt-share").on("click", function () {
    $(".popupWrap").removeClass("hide");
    $("#sharePopup").removeClass("hide");
  });

  //회사 관리 팝업 오픈
  $("#tm01").on("click", function () {
    $("#managePopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  $(".btnAuth").on("click", function () {
    $("#companyAuthPopup").removeClass("hide");
    $("#managePopup").addClass("hide");
    $(".close").addClass("auth");
    $(".cancelBtn").addClass("auth");

    $(".close").on("click", function () {
      if ($(".close").hasClass("auth")) {
        $("#companyAuthPopup").addClass("hide");
        $("#managePopup").removeClass("hide");
        $(".close").removeClass("auth");
        $(".cancelBtn").removeClass("auth");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".cancelBtn").on("click", function () {
      if ($(".cancelBtn").hasClass("auth")) {
        $("#companyAuthPopup").addClass("hide");
        $("#managePopup").removeClass("hide");
        $(".cancelBtn").removeClass("auth");
        $(".close").removeClass("auth");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  $(".btnLeave").on("click", function () {
    $("#leavePopup").removeClass("hide");
    $("#managePopup").addClass("hide");
    $(".close").addClass("leave");
    $(".cancelBtn").addClass("leave");

    $(".close").on("click", function () {
      if ($(".close").hasClass("leave")) {
        $("#leavePopup").addClass("hide");
        $("#managePopup").removeClass("hide");
        $(".close").removeClass("leave");
        $(".cancelBtn").removeClass("leave");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".cancelBtn").on("click", function () {
      if ($(".cancelBtn").hasClass("leave")) {
        $("#leavePopup").addClass("hide");
        $("#managePopup").removeClass("hide");
        $(".cancelBtn").removeClass("leave");
        $(".close").removeClass("leave");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //현장관리 팝업 오픈
  $("#tm02").on("click", function () {
    $("#siteManagePopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //수정 1 버튼 -> 회사 인증 안내 팝업
  $(".btnEdit_1").on("click", function () {
    $("#siteEditPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("edit_1");
    $(".close").addClass("edit_1");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("edit_1")) {
        $("#siteEditPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("edit_1");
        $(".close").removeClass("edit_1");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("edit_1")) {
        $("#siteEditPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("edit_1");
        $(".close").removeClass("edit_1");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //수정 2 버튼 -> 회사 인증 안내 팝업
  $(".btnEdit_2").on("click", function () {
    $("#alertPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("edit_2");
    $(".close").addClass("edit_2");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("edit_2")) {
        $("#alertPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("edit_2");
        $(".close").removeClass("edit_2");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("edit_2")) {
        $("#alertPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".close").removeClass("edit_2");
        $(".cancelBtn").removeClass("edit_2");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //수정 3 버튼 -> 수정 권한 안내 팝업 오픈
  $(".btnEdit_3").on("click", function () {
    $("#editPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("edit_3");
    $(".close").addClass("edit_3");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("edit_3")) {
        $("#editPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("edit_3");
        $(".close").removeClass("edit_3");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("edit_3")) {
        $("#editPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".popupWrap").removeClass("hide");
        $(".close").removeClass("edit_3");
        $(".cancelBtn").removeClass("edit_3");
      }
    });
  });

  //종료 2 버튼 -> 수정 권한 안내 오픈
  $(".btnQuit_2").on("click", function () {
    $("#editPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("quit_2");
    $(".close").addClass("quit_2");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("quit_2")) {
        $("#editPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("quit_2");
        $(".close").removeClass("quit_2");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("quit_2")) {
        $("#editPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".close").removeClass("quit_2");
        $(".cancelBtn").removeClass("quit_2");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //종료 2 버튼 -> 수정 권한 안내 오픈
  $(".btnQuit_3").on("click", function () {
    $("#quitPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("quit_3");
    $(".close").addClass("quit_3");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("quit_3")) {
        $("#quitPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".cancelBtn").removeClass("quit_3");
        $(".close").removeClass("quit_3");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("quit_3")) {
        $("#quitPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".close").removeClass("quit_3");
        $(".cancelBtn").removeClass("quit_3");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //나가기 3 버튼 -> 나가기 안내 문구
  $(".btnExit_3").on("click", function () {
    $("#exitPopup").removeClass("hide");
    $("#siteManagePopup").addClass("hide");
    $(".cancelBtn").addClass("exit_3");
    $(".close").addClass("exit_3");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("exit_3")) {
        $("#exitPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".close").removeClass("exit_3");
        $(".cancelBtn").removeClass("exit_3");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("exit_3")) {
        $("#exitPopup").addClass("hide");
        $("#siteManagePopup").removeClass("hide");
        $(".close").removeClass("exit_3");
        $(".cancelBtn").removeClass("exit_3");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //매니저 관리 팝업
  $("#tm03").on("click", function () {
    $("#managerPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //내보내기 버튼 클릭 시 팝업
  $(".btnExport").on("click", function () {
    $("#managerPopup").addClass("hide");
    $("#alertPopup").removeClass("hide");
    $(".cancelBtn").addClass("export");
    $(".close").addClass("export");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("export")) {
        $("#alertPopup").addClass("hide");
        $("#managerPopup").removeClass("hide");
        $(".cancelBtn").removeClass("export");
        $(".close").removeClass("export");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("export")) {
        $("#alertPopup").addClass("hide");
        $("#managerPopup").removeClass("hide");
        $(".cancelBtn").removeClass("export");
        $(".close").removeClass("export");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //서명관리 팝업
  $("#tm04").on("click", function () {
    $("#singManagePopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");

    //인증을 받지 않은 매니저의 경우 아래의 코드를 호출한다.
    // $(".popupWrap").removeClass("hide");
    //  $("#alertPopup").removeClass("hide");
  });

  // 비밀번호
  $("#tm05").on("click", function () {
    $("#passwordPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  $(".confirmPwd").on("click", function () {
    $("#passwordPopup").addClass("hide");
    $("#pwdConfirmPopup").removeClass("hide");
    $(".cancelBtn").addClass("pwd");
    $(".close").addClass("pwd");

    $(".cancelBtn").on("click", function () {
      if ($(this).hasClass("pwd")) {
        $("#pwdConfirmPopup").addClass("hide");
        $("#passwordPopup").removeClass("hide");
        $(".cancelBtn").removeClass("pwd");
        $(".close").removeClass("pwd");
        $(".popupWrap").removeClass("hide");
      }
    });

    $(".close").on("click", function () {
      if ($(this).hasClass("pwd")) {
        $("#pwdConfirmPopup").addClass("hide");
        $("#passwordPopup").removeClass("hide");
        $(".close").removeClass("pwd");
        $(".cancelBtn").removeClass("pwd");
        $(".popupWrap").removeClass("hide");
      }
    });
  });

  //소개 면세서 메누 클릭
  $("#tm06").on("click", function () {
    $("#taxFreePopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");

    //인증을 받지 않은 매니저의 경우 아래의 코드를 호출한다.
    // $(".popupWrap").removeClass("hide");
    //  $("#alertPopup").removeClass("hide");
  });

  //알림센터 제목 클릭 event
  $(".notiTitle").on("click", function () {
    $(this).parent().parent().siblings().toggleClass("active");
    $(this).parent().siblings().find($(".read")).toggleClass("active");
  });

  //알림센터 팝업
  $(".notify").on("click", function () {
    $("#notiPopup").removeClass("hide");
    $(".popupWrap").removeClass("hide");
  });

  //이미지 팝업
  // $(".imgPopupClose").on("click", function () {
  //   $(".imgPopup").addClass("remove");
  // });

  //공통 -> 닫기, 확인, 취소 버튼 클릭 시 닫음
  $(".close, .cancelBtn, .confirmBtn").on("click", function () {
    $(".popupWrap").addClass("hide");
    $(".popup").addClass("hide");
  });

  $(".popupClose").on("click", function () {
    $(".popupWrap").addClass("hide");
    $(".popup").addClass("hide");
  });

  //공통 -> 영역 밖 선택 시 닫음
  $(".popupWrap").on("click", function (e) {
    if (e.target == e.currentTarget) {
      $(".popup").addClass("hide");
      $(".popupWrap").addClass("hide");
    }
  });
});

function open_Pop3() {
  var popup = window.open(
    "https://www.smartilbo.com/jabook5/ilgaja/o/orderLink.html",
    "인력요청",
    "width=640px,height=960px,scrollbars=yes"
  );
}
