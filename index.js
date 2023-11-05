// B1: Tạo 1 hàm lấy dữ liệu của nhân viên
// Tạo mảng chứa tất cả id input để nhận dữ liệu thông tin nhân viên
arrIdInput = [
  "tknv",
  "name",
  "email",
  "password",
  "datepicker",
  "luongCB",
  "chucvu",
  "gioLam",
];
var arrIdSpan = [
  "tbTKNV",
  "tbTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCB",
  "tbChucVu",
  "tbGiolam",
];
var arrNhanVien = [];
function getValueStaff() {
  // event.preventDefault;
  // B2: Tạo 1 đối tượng dùng để lưu trữ thông tin nhân viên
  var nhanVien = new NhanVien();
  // console.log(nhanVien);
  // lấy dữ liệu qua vòng lặp
  var isValid = true;
  for (var i = 0; i < arrIdInput.length; i++) {
    var valueInput = document.getElementById(arrIdInput[i]).value;

    // if(arrIdInput[i] == 'password'){
    //   checkPasswordValue(valueInput, arrIdSpan[i]);
    // }
    // if(arrIdInput[i] == 'gioLam'){
    //   checkWorkHour(valueInput, arrIdSpan[i]);
    // }

    // check validation:
    // tên tài khoản: kiểm tra rỗng và kiểm tra độ dài ký số
    // tên NV: Tên nhân viên phải là chữ, không để trống
    // email : kiểm tra rỗng và kiểm tra xem có phải email hay không
    // password: mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không
    // để trống
    // ngày làm:  không để trống, định dạng mm/dd/yyyy
    // Lương CB :  Lương cơ bản 1 000 000 - 20 000 000, không để trống
    // Số giờ làm: Số giờ làm trong tháng 80 - 200 giờ, không để trống
    // XỬ LÝ:
    if (arrIdInput[i] == "tknv") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkTkMinMaxValue(valueInput, arrIdSpan[i], 4, 6);
    } else if (arrIdInput[i] == "name") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkNameValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "email") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkEmailValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "password") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkPasswordValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "datepicker") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkDateWork(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "luongCB") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkSalaryValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == "gioLam") {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkWorkHour(valueInput, arrIdSpan[i]);
    } else {
      isValid &= checkEmptyValue(valueInput, arrIdSpan[i]);
    }

    nhanVien[arrIdInput[i]] = valueInput;
  }
  // console.log(nhanVien)
  // B3: Tạo 1 mảng để lưu trữ thông tin các nhân viên
  // muốn đưa một dữ liệu vào mảng sử dụng phương thức push để lưu trữ thông tin các nhân viên
  if (isValid) {
    return nhanVien;
  }
}

function addInfoStaff() {
  event.preventDefault();
  var nhanVien = getValueStaff();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    saveLocalStore("arrNhanVien", arrNhanVien);
    renderDisplay();
    // openToasts();
    document.getElementById("allForm").reset();
   
    

  }
}

function renderDisplay(arr) {
  // check hàm để khi gọi hàm không cần truyền tham số vì nếu k có tham số sẽ auto dùng mảng arrNhanVien để sử dụng
  if (!arr) {
    arr = arrNhanVien;
  }

  // biến content giúp lưu trữ các chuỗi html khi chạy vòng lặp
  var content = "";
  // dùng vòng lặp để đưa thông tin nhận viên lên giao diện đang có trong mảng dũ liệu
  for (var z = 0; z < arr.length; z++) {
    // muốn các đối tượng được lấy từ localStorage sẽ có phương thức cần phải khởi tạo một đối tượng
    var nhanVien = new NhanVien();
    var staffInfo = arr[z];
    // sử dụng Object.assign để copy dữ liệu
    Object.assign(nhanVien, staffInfo);
    // console.log(nhanVien);
    content += `
        <tr>
        <td>${nhanVien.tknv}</td>
        <td>${nhanVien.name}</td>
        <td>${nhanVien.email}</td>  
        <td>${nhanVien.datepicker}</td>  
        <td>${nhanVien.chucvu}</td>  
        <td>${nhanVien.tinhTongLuong()}</td>  
        <td>${nhanVien.xepLoaiNhanVien()}</td>
        <td>
        <button onclick="deleteStaff('${
          nhanVien.tknv
        }')" class="btn btn-danger mt-2">Xoá</button>
        <button onclick="getInfoStaff('${
          nhanVien.tknv
        }')" class="btn btn-dark mt-2"
        data-toggle="modal" data-target="#myModal"
        >Sửa</button>

        </td>
        </tr>
        `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}
//----------- xây dựng chức năng xoá nhân viên---------
function deleteStaff(tenTK) {
  // console.log("xoá")
  // console.log(tenTK);
  var viTriTk = -1;
  for (i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.tknv == tenTK) {
      viTriTk = i;
      console.log(viTriTk);
    }
    if (viTriTk != -1) {
      arrNhanVien.splice(viTriTk, 1);
      saveLocalStore("arrNhanVien", arrNhanVien);
      renderDisplay();
      // console.log(arrNhanVien);
    }
  }
}
//------ thực hiện edit staffInfo-----
function getInfoStaff(tenTK) {
  // console.log(tenTK);
  var nhanVien = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == tenTK) {
      nhanVien = arrNhanVien[i];
    }
  }
  console.log(nhanVien);
  // lấy dữ liệu đã lấy được rồi truyền lên input
  for (var a = 0; a < arrIdInput.length; a++) {
    document.getElementById(arrIdInput[a]).value = nhanVien[arrIdInput[a]];
    if (arrIdInput[a] == "tknv") {
      document.getElementById(arrIdInput[a]).readOnly = true;
    }
  }
}

function editInfoStaff() {
  var nhanVien = getValueStaff();
  console.log(nhanVien);
  var editLocation = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.tknv == arrNhanVien[i].tknv) {
      editLocation = i;
    }
  }
  document.getElementById("tknv").readOnly = false;
  arrNhanVien[editLocation] = nhanVien;
  saveLocalStore("arrNhanVien", arrNhanVien);
  renderDisplay();
  document.getElementById("allForm").reset();
}
// ---- xây dựng chức năng tìm kiếm nhân viên theo loại Nhân Viên-----
function searchStaff(event) {
  var keyWord = event.target.value;
  var newKeyWord = removeVietnameseTones(keyWord.toLowerCase().trim());
  // console.log(newKeyWord);
  // arrKtNhanVien = arrNhanVien;
  // console.log(arrKtNhanVien);
  // chạy vòng lặp để tìm kiếm dữ liệu phù hợp khi người dùng tìm kiếm
  // console.log(arrNhanVien)
  var arrFilter = [];
  // var ktNhanVien = {};
  for (var p = 0; p < arrNhanVien.length; p++) {
    // console.log(arrNhanVien[p])
    // console.log(typeof ktNhanVien)
    var loaiNhanVien = removeVietnameseTones(
      arrNhanVien[p].name.toLowerCase().trim()
    );
    // sử dụng hàm include để kiểm tra có phù hợp dữ liệu hay không
    if (loaiNhanVien.includes(newKeyWord)) {
      // console.log("đúng", ktNhanVien);

      // console.log('đúng', arrNhanVien[p])
      arrFilter.push(arrNhanVien[p]);
    }
    // else {
    //   console.log("sai", ktNhanVien);
    // }
  }
  console.log(arrFilter);
  renderDisplay(arrFilter);
}

//-------------- sử dụng lưu trữ xuống localStorage----------
// chuyển dữ liệu object, aray về chuỗi JSON
function saveLocalStore(key, value) {
  var valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}
//---- lấy dữ liệu từ localStorage----
function getLocalStore(key) {
  var arrLocal = JSON.parse(localStorage.getItem(key));
  // console.log(arrLocal);
  if (arrLocal) {
    arrNhanVien = arrLocal;
    // console.log(arrNhanVien);
    renderDisplay();
  }
}


getLocalStore("arrNhanVien");


// function openToasts(){
//   // gọi tới layout Toast 
//   const toastLiveExample = document.getElementById('liveToast');
//   // thêm Toast bootstrap để có thể sử dụng phương thức show giúp mở Toast lên 
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
//   toastBootstrap.show();
// }

// click để thêm Nhân Viên
// document.getElementById("btnThemNV").onclick = addInfoStaff;

// click để edit Nhân Viên
document.getElementById("btnCapNhat").onclick = editInfoStaff;
