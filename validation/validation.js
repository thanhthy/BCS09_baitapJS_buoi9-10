function checkEmptyValue(value, idSpan) {
  // check dữ liệu của nhân viên
  if (value == "") {
    document.getElementById(idSpan).style.display = "block";
    document.getElementById(idSpan).innerHTML = `Vui lòng không bỏ trống`;
    return false;
  } else {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  };
};

// kiểm tra độ dài ký tự của tk:
function checkTkMinMaxValue(value, idSpan, min, max) {
    // kiểm tra độ dài ký tự
    if (value.length >= min && value.length <= max) {
      // điều kiện đúng dữ liệu thoả yêu cầu
      document.getElementById(idSpan).innerHTML = "";
      return true;
    } else {
      // điều kiện sai
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(
        idSpan
      ).innerHTML = `Vui lòng nhập tối thiểu ${min} và tối đa ${max}`;
      return false;
    };
  };
// check validation staff name :
  function checkNameValue(value, idSpan) {
    regexName = /^[a-zA-Z]+$/;
    regexName.test(value);
    if (regexName.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML =
        "Chỉ được nhập chữ cái";
      return false;
    };
  };

// check validation Email 
function checkEmailValue(value, idSpan) {
  var regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // sử dụng phương thức test để kiểm tra dữ liệu đầu vào có thoả chuỗi regex hay không
  regexEmail.test(value); // true , dữ liệu không thoả ==> false
  if (regexEmail.test(value)) {
    // dữ liệu thoả regex
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(idSpan).style.display = "block";
    document.getElementById(idSpan).innerHTML =
      "Định dạng email không chính xác";
    return false;
  };
};
// check validation password :
function checkPasswordValue(value, idSpan) {
    regexPassword = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,10}$/;
    regexPassword.test(value);
    if (regexPassword.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML =
        "Password cần có từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
      return false;
    };
  };
  // check validation date work
  function checkDateWork(value, idSpan){
    regexDateWork = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    regexDateWork.test(value);
    if (regexDateWork.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML =
        "Ngày tháng không hợp lệ";
      return false;
    };
  };
  // check validation salary:
  function checkSalaryValue(value, idSpan){
    regexSalary =  /^(1000000|1000000\.[0-9]{2}|[1-9][0-9]{6}|20000000)$/;
    if (regexSalary.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML =
        "Số lương chỉ trong khoảng 1,000,000 đến 20,000,000";
      return false;
    };
  };
// check validation workHour:
function checkWorkHour(value, idSpan){
    regexWorkHour =   /^(8[0-9]|9[0-9]|[1-9][0-9]{2}|200)$/;
    if (regexWorkHour.test(value)) {
      document.getElementById(idSpan).innerHTML = "";
      return true;
    }else{
      document.getElementById(idSpan).style.display = "block";
      document.getElementById(idSpan).innerHTML =
        "Số giờ làm trong tháng yêu cầu từ 80 - 200 giờ";
      return false;
    };
  };






