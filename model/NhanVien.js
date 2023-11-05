// tạo ra 1 lớp đối tượng bao gồm các thuộc tính là: tên tài khoản, họ tên, email, mật khẩu, ngày sinh, lương cơ bản, chức vụ, giờ làm  
function NhanVien(){
    this.tknv = '';
  this.name = '';
  this.email = '';
  this.password = '';
  this.datepicker = '';
  this.luongCB = '';
  this.chucvu = '';
  this.gioLam = '';

  // tạo phương thức giúp tính tổng lương
  this.tinhTongLuong = function(){
    var tongLuong = 0;
    switch(this.chucvu){
      case 'Nhân Viên':
        tongLuong = this.luongCB *1;
        break;
      case 'Trưởng Phòng':
        tongLuong = (this.luongCB*1)*2;
        break;
        case 'Giám Đốc':
          tongLuong = (this.luongCB*1)*3;
    }
    
    return tongLuong;

  };
  this.xepLoaiNhanVien = function(){
    var xepLoai = '';
    if(this.gioLam >= 192){
      xepLoai = 'Nv xuất sắc'
    }else if(this.gioLam >= 176){
      xepLoai = 'Nv giỏi'
    }else if(this.gioLam >= 160){
      xepLoai = 'Nv khá'
    }else{
      xepLoai = 'Nv trung bình'
    };
    return xepLoai;
  };
};
