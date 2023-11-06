$(document).ready(function(){	   
    $('.select-gray').css({'color':'#838383'});
	$('.select-gray').change(function() {
	  var current = $('select-gray').val();
	  if (current != 'null') {
		  $(this).css({'color':'#111'});
	  } else {
		  $(this).css({'color':'#838383'});
	  }
	}); 

	


	$('.default').click(function(){
		$(this).removeClass('.default').addClass('succeed');
	});
	$('.login-type').find('a').click(function(){
		$(this).removeClass('.active').addClass('active');
		$(this).parent('li').siblings('li').find('a').removeClass();
	});
	



	$('.topmenu').find('a').click(function(){
		$(this).parent('li').removeClass('.over').addClass('over');
		$(this).parent('li').siblings('li').removeClass('over');
	});



	

	$('.check-btn.sms').click(function(){
		$('.certify.layer-pop').show();
		ovShow();
	});
	



	$('.membership-btn').click(function(){
		$('.membership.layer-pop').show();
		ovShow();
	});
	
	
	/*$('.calendar-input').find('input').click(function(){
		$('.calendar.layer-pop').show();
		ovShow();
	});*/



	$('.placement-list').find('.name > a').click(function(){
		$('.info-nodata').hide();
		$('.info-view').show();

		$('.placement-wrap').find('.fr').addClass('open');
		$('#header').find('.prev').hide();
		$('#header').find('.placement-close').show();

		//ovShows();
	});
	
	$('#header').find('.placement-close').click(function(){
		//ovHides();
		$('.info-nodata').show();
		$('.info-view').hide();
		$('#header').find('.prev').show();
		$('#header').find('.placement-close').hide();
		$('.placement-wrap').find('.fr').removeClass('open');

	});



	$('.layer-pop ').find('.close, .ok-btn').click(function(){
		ovHide()
	});


	function ovShow(){
		var $cback = $(".body-slider-ovclick");
		$cback.unbind("click").bind("click",function(){ ovHide(); $('.layer-pop').hide();}).show();
	}
	function ovHide(){
		$(".body-slider-ovclick").hide();
		$('.layer-pop').hide()
	}
	


	function ovShows(){
		var $cbacks = $(".container-ovclick");
		$cbacks.unbind("click").bind("click",function(){ ovHides(); $('.placement-wrap').find('.fr').removeClass('open');}).show();
	}
	function ovHides(){
		$(".container-ovclick").hide();
		$('.placement-wrap').find('.fr').removeClass('open');
	}
	if($(".body-slider-ovclick").length<1) $("<div class='body-slider-ovclick'/>").appendTo($("#doc")).hide();
	if($(".container-ovclick").length<1) $("<div class='container-ovclick'/>").appendTo($(".placement-wrap")).hide();

	
	function autoHypenPhone(str){
		str = str.replace(/[^0-9]/g, '');
		var tmp = '';
		if( str.length < 4){
			return str;
		}else if(str.length < 7){
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3);
			return tmp;
		}else if(str.length < 11){
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 3);
			tmp += '-';
			tmp += str.substr(6);
			return tmp;
		}else{              
			tmp += str.substr(0, 3);
			tmp += '-';
			tmp += str.substr(3, 4);
			tmp += '-';
			tmp += str.substr(7);
			return tmp;
		}
		return str;
	}


	

});

$(function(){
  $(".date-calendar").ionDatePicker();
  getTimeStamp();
 

});
function auto_date_format( e, oThis ){
	
	var num_arr = [ 
		97, 98, 99, 100, 101, 102, 103, 104, 105, 96,
		48, 49, 50, 51, 52, 53, 54, 55, 56, 57
	]
	
	var key_code = ( e.which ) ? e.which : e.keyCode;
	if( num_arr.indexOf( Number( key_code ) ) != -1 ){
	
		var len = oThis.value.length;
		if( len == 4 ) oThis.value += "-";
		if( len == 7 ) oThis.value += "-";
	
	}
	
}

function phoneCehck(){
 var phonenum = $('#cellPhone').val();
 var regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
 if(!regExp.test(phonenum)){
	  alert('잘못된 휴대폰 번호입니다.');
	  $('#cellPhone').focus();
	  return false;    
 }
}


function clearText(thefield) {
  if (thefield.defaultValue==thefield.value) {
    thefield.value="";
  }
} 
function defaultText(thefield) {
  if (thefield.value=="") {
    thefield.value=thefield.defaultValue;
  }
}

function cngtype(){
    if($(".pswd").val() == "비밀번호 입력") {
        $(".pswd").val("");
        $(".pswd").attr("type", "password"); 
    } 
	
}
function cngtype2(){
    if($(".pswd2").val() == "비밀번호 재입력") {
        $(".pswd2").val("");
        $(".pswd2").attr("type", "password"); 
    }
}


function post_check()
{

  var ObjUserPassword = document.wform.pwd;
  var ObjUserPasswordRe = document.wform.pwd2;
 

  if(ObjUserPassword.value=="비밀번호 입력")
	{
	 alert("비밀번호를 입력해주세요.")
	 ObjUserPassword.focus()
	 return false;
	}
 if(ObjUserPasswordRe.value=="비밀번호 재입력")
	{
	 alert("비밀번호를 재입력해주세요.")
	 ObjUserPassword.focus()
	 return false;
	}


  if(ObjUserPassword.value != ObjUserPasswordRe.value)
 {
  alert("입력하신 비밀번호와 비밀번호확인이 일치하지 않습니다");
  return false;
  }
 
  if(ObjUserPassword.value.length<6) {
    alert("비밀번호는 영문,숫자,특수문자(!@$%^&* 만 허용)를 사용하여 6~16자까지, 영문은 대소문자를 구분합니다.");
    return false;
  }
 
  if(!ObjUserPassword.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)) {
    alert("비밀번호는 영문,숫자,특수문자(!@$%^&* 만 허용)를 사용하여 6~16자까지, 영문은 대소문자를 구분합니다.");
    return false;
  }
 
 
  var SamePass_0 = 0; //동일문자 카운트
  var SamePass_1 = 0; //연속성(+) 카운드
  var SamePass_2 = 0; //연속성(-) 카운드
 
  for(var i=0; i < ObjUserPassword.value.length; i++) {
    var chr_pass_0 = ObjUserPassword.value.charAt(i);
    var chr_pass_1 = ObjUserPassword.value.charAt(i+1);
    
    //동일문자 카운트
    if(chr_pass_0 == chr_pass_1) {
      SamePass_0 = SamePass_0 + 1
    }
    var chr_pass_2 = ObjUserPassword.value.charAt(i+2);
    //연속성(+) 카운드
    if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1) {
      SamePass_1 = SamePass_1 + 1
    }
    //연속성(-) 카운드
    if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1) {
      SamePass_2 = SamePass_2 + 1
    }
  }
  if(SamePass_0 > 1) {
    alert("동일문자를 3번 이상 사용할 수 없습니다.");
    return false;
  }
  if(SamePass_1 > 1 || SamePass_2 > 1 ) {
    alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
    return false;
  }
  return true;
}




function getTimeStamp() {
    var d = new Date();
    var date = leadingZeros(d.getFullYear(), 4) + '-' +
        leadingZeros(d.getMonth() + 1, 2) + '-' +
        leadingZeros(d.getDate(), 2) + ' ';
    $('.date-calendar').val(date);
}
function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
        for (i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}





