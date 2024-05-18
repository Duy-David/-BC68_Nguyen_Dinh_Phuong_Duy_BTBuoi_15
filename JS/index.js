//BT!1:Tính tiền lương nhân viên
//sơ đồ 3 khối
//Input: điểm chuẩn, môn 1,môn 2 , môn3, khu vực, dối ttượng
//processing:

//output: KẾt qua đậu ,rới và tổng điểm

document.getElementById("diemTong").onclick = function () {
  // console.log('huhu')
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let mon1 = document.getElementById("mon1").value * 1;
  let mon2 = document.getElementById("mon2").value * 1;
  let mon3 = document.getElementById("mon3").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value * 1;

  // output
  let diemTong = 0;
  let ketQuab1 = "";
  // processing
  diemTong = diemTongTatCa(diemTong, mon1, mon2, mon3, khuVuc, doiTuong);

  ketQuab1 = ketQuabuoi1(diemChuan, diemTong);
};

function khuVUC(khuVuc, diemTong) {
  if (khuVuc === "A") {
    diemTong += 2;
  } else if (khuVuc === "B") {
    diemTong += 1;
  } else if (khuVuc === "C") {
    diemTong += 0.5;
  } else if (khuVuc === "X") {
    diemTong;
  } else {
    alert("Nhập sai khu vực");
  }
  return diemTong;
}

function doiTUONG(doiTuong, diemTong) {
  if (doiTuong == 1) {
    diemTong += 2.5;
  } else if (doiTuong == 2) {
    diemTong += 1.5;
  } else if (doiTuong == 3) {
    diemTong += 1;
  } else if (doiTuong == 0) {
    diemTong;
  } else {
    alert("Nhập sai đối tượng");
  }
  return diemTong;
}
function diemTongTatCa(diemTong, mon1, mon2, mon3, khuVuc, doiTuong) {
  khuVuc = khuVUC(khuVuc, diemTong);
  doiTuong = doiTUONG(doiTuong, diemTong);
  if (
    0 <= mon1 &&
    mon1 <= 10 &&
    0 <= mon2 &&
    mon2 <= 10 &&
    0 <= mon3 &&
    mon3 <= 10
  ) {
    diemTong += mon1 + mon2 + mon3 + khuVuc + doiTuong;
  } else {
    alert("Nhập sai điểm rồi");
  }
  return diemTong;
}
function ketQuabuoi1(diemChuan, diemTong) {
  if (diemChuan >= 0 && diemChuan <= 30)
    if (diemTong >= diemChuan) {
      document.getElementById(
        "result-b1"
      ).innerHTML = `Tổng số điểm đạt được: ${diemTong} và kết quả là đậu`;
      // console.log("đậu")
    } else {
      document.getElementById(
        "result-b1"
      ).innerHTML = `Tổng số điểm đạt được: ${diemTong} và kết quả là rớt`;
      // console.log('rớt')
    }
  else {
    alert("Nhập sai điểm chuẩn rồi");
  }

  return ketQuabuoi1;
}

//BT2:Tính tiền diện
//sơ đồ 3 khối
//Input: Tên , Số kw
//processing: Tiền điền được xữ lý theo công thcứ của đề bài
//output: Số tiền và tên người dùng

document.getElementById("tinhTienDien").onclick = function () {
  // console.log('huhu')
  let name = document.getElementById("hoVaTen").value;
  let soKW = document.getElementById("soKW").value * 1;
  // output
  // let  = 0;
  let ketQuab2 = "";
  // let tongtiendien = 0
  // processing;
  let tongtiendien = tongTienDien(soKW);
  ketQuab2 = inTiendien(name, tongtiendien);
};

function tongTienDien(soKW) {
  let soTien = 0;
  switch (true) {
    case soKW <= 50:
      soTien = soKW * 500;
      break;
    case soKW <= 100:
      soTien = 50 * 500 + (soKW - 50) * 150;
      break;
    case soKW <= 200:
      soTien = 500 * 50 + 50 * 650 + (soKW - 100) * 850;

      break;
    case soKW <= 350:
      soTien = 500 * 50 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
      break;
    default:
      if (soKW > 350) {
        soTien =
          500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
      } else {
        alert("nhập sai số kw");
        return;
      }
  }
  return soTien;
}
function inTiendien(name, tongtiendien) {
  document.getElementById(
    "result-b2"
  ).innerHTML = `Họ và tên:${name}<br> Số tiền điện:${tongtiendien.toLocaleString(
    "vn",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}

//BT3: Tính Tthuế thu nhập cá nhân
//sơ đồ 3 khối
//Input: họ và ten, thu nhập chiu thuế, số người phụ thuộc
//processing:  Thu nhập chịu thuế = Tổng thu nhập - 4tr*12- Số người phụ thuộc * 1.6tr*12
//output: Thuế TNCN

document.getElementById("tinhThue").onclick = function () {
  // console.log('huhu')
  let hoVaTenNguoiChiuThue = document.getElementById(
    "hovatennguoichiuthue"
  ).value;
  let tongThuNhap = document.getElementById("tongthuNhap").value * 1;
  let soNguoiPhuThuoc = document.getElementById("songuoiphuthuoc").value;

  // output
  let thueTNCN = 0;
  let ketQuab3 = "";
  // processing
  thueTNCN = tinhThueTNCN(tongThuNhap, soNguoiPhuThuoc);
  inTienThueTNCN;
  ketQuab3 = inTienThueTNCN(hoVaTenNguoiChiuThue, thueTNCN);
};
function tinhThueTNCN(tongThuNhap, soNguoiPhuThuoc) {
  let giamTruCaNhan = 4000000;
  let giamTruMotNguoiPhuThuoc = 1600000;
  let thuNhapChiuThue =
    tongThuNhap -
    giamTruCaNhan * 12 -
    soNguoiPhuThuoc * giamTruMotNguoiPhuThuoc * 12;
  let thueTNCN = 0;
  let thuNhapChiuThue5PhanTram = 600000000;
  let thuNhapChiuThue10PhanTram = 1200000000;
  let thuNhapChiuThue15PhanTram = 2100000000;
  let thuNhapChiuThue20PhanTram = 3840000000;
  let thuNhapChiuThue25PhanTram = 6240000000;
  let thuNhapChiuThue30PhanTram = 9600000000;
  let thueSuat5phantram = 5 / 100;
  let thueSuat10phantram = 10 / 100;
  let thueSuat15phantram = 15 / 100;
  let thueSuat20phantram = 20 / 100;
  let thueSuat25phantram = 25 / 100;
  let thueSuat30phantram = 30 / 100;
  let thueSuat35phantram = 35 / 100;

  switch (true) {
    case thuNhapChiuThue <= thuNhapChiuThue5PhanTram:
      thueTNCN = thuNhapChiuThue * thueSuat5phantram;
      break;
    case thuNhapChiuThue <= thuNhapChiuThue10PhanTram:
      thueTNCN =
        thuNhapChiuThue5PhanTram * thueSuat5phantram +
        (thuNhapChiuThue - thuNhapChiuThue5PhanTram) * thueSuat10phantram;
      break;
    case thuNhapChiuThue <= thuNhapChiuThue15PhanTram:
      thueTNCN =
        thuNhapChiuThue5PhanTram * thueSuat5phantram +
        (thuNhapChiuThue10PhanTram - thuNhapChiuThue5PhanTram) *
          thueSuat10phantram +
        (thuNhapChiuThue - thuNhapChiuThue10PhanTram) * thueSuat15phantram;
      break;
    case thuNhapChiuThue <= thuNhapChiuThue20PhanTram:
      thueTNCN =
        thuNhapChiuThue5PhanTram * thueSuat5phantram +
        (thuNhapChiuThue10PhanTram - thuNhapChiuThue5PhanTram) *
          thueSuat10phantram +
        (thuNhapChiuThue15PhanTram - thuNhapChiuThue10PhanTram) *
          thueSuat15phantram +
        (thuNhapChiuThue - thuNhapChiuThue15PhanTram) * thueSuat20phantram;
      break;
    case thuNhapChiuThue <= thuNhapChiuThue25PhanTram:
      thueTNCN =
        thuNhapChiuThue5PhanTram * thueSuat5phantram +
        (thuNhapChiuThue10PhanTram - thuNhapChiuThue5PhanTram) *
          thueSuat10phantram +
        (thuNhapChiuThue15PhanTram - thuNhapChiuThue10PhanTram) *
          thueSuat15phantram +
        (thuNhapChiuThue20PhanTram - thuNhapChiuThue15PhanTram) *
          thueSuat20phantram +
        (thuNhapChiuThue - thuNhapChiuThue20PhanTram) * thueSuat25phantram;

      break;
    case thuNhapChiuThue <= thuNhapChiuThue30PhanTram:
      thueTNCN =
        thuNhapChiuThue5PhanTram * thueSuat5phantram +
        (thuNhapChiuThue10PhanTram - thuNhapChiuThue5PhanTram) *
          thueSuat10phantram +
        (thuNhapChiuThue15PhanTram - thuNhapChiuThue10PhanTram) *
          thueSuat15phantram +
        (thuNhapChiuThue20PhanTram - thuNhapChiuThue15PhanTram) *
          thueSuat20phantram +
        (thuNhapChiuThue25PhanTram - thuNhapChiuThue20PhanTram) *
          thueSuat25phantram +
        (thuNhapChiuThue30PhanTram - thuNhapChiuThue25PhanTram) *
          thueSuat30phantram +
        (thuNhapChiuThue - thuNhapChiuThue30PhanTram) * thueSuat35phantram;

      break;

    default:
      if (thuNhapChiuThue > thuNhapChiuThue30PhanTram) {
        thueTNCN =
          thuNhapChiuThue5PhanTram * thueSuat5phantram +
          (thuNhapChiuThue10PhanTram - thuNhapChiuThue5PhanTram) *
            thueSuat10phantram +
          (thuNhapChiuThue15PhanTram - thuNhapChiuThue10PhanTram) *
            thueSuat15phantram +
          (thuNhapChiuThue20PhanTram - thuNhapChiuThue15PhanTram) *
            thueSuat20phantram +
          (thuNhapChiuThue25PhanTram - thuNhapChiuThue20PhanTram) *
            thueSuat25phantram +
          (thuNhapChiuThue - thuNhapChiuThue25PhanTram) * thueSuat30phantram;
      } else {
        alert("nhập tổng thu nhập");
        return;
      }
  }
  return thueTNCN;
}

function inTienThueTNCN(hoVaTenNguoiChiuThue, thueTNCN) {
  document.getElementById(
    "result-b3"
  ).innerHTML = `Họ và tên:${hoVaTenNguoiChiuThue}<br> Thuế TNCN:${thueTNCN.toLocaleString(
    "vn",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}

//BT4:TÍNH TIỀN CÁP
//sơ đồ 3 khối
//Input: Mã KH, Lọai KH, Số kết nối (Nếu có), Số kênh cao cấp
//processing: Tổng số tiền cáp = Phí xử lý hóa đơn + Phí dịch vụ cơ bản+ đầu kết nối(nếu có)+Thuê kênh cao cấp*số kênh
//output: Tổng số tiền cáp

document.getElementById("tinhTienCap").onclick = function () {
  // console.log('huhu')

  let maKhachHang = document.getElementById("maKhachHang").value;
  let loaiKhachHang = document.getElementById("loaiKhachhang").value;

  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  // }

  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  // output

  let tinhTienCap = 0;
  let ketQuab4 = "";
  // processing
  soKetNoi = congketnoi(soKetNoi);
  loaiKhachHang = loaiKHACHHANG(loaiKhachHang);
  tinhTienCap = TINHTIENCAP(tinhTienCap, soKetNoi, soKenhCaoCap);
  // console.log(tinhTienCap);
  ketQuab4 = inTienCap(maKhachHang, tinhTienCap);
};

function TINHTIENCAP(tinhTienCap, soKetNoi, soKenhCaoCap) {
  let loaiKhachHang = document.getElementById("loaiKhachhang").value;
  if (loaiKhachHang == "Nhà Dân") {
    tinhTienCap = 4.5 + 20 + 7.5 * soKenhCaoCap;
  } else {
    tinhTienCap = 15 + 75 + 5 * soKetNoi + 50 * soKenhCaoCap;
  }
  return tinhTienCap;
}

function loaiKHACHHANG() {
  let loaiKhachHang = document.getElementById("loaiKhachhang").value;
  if (loaiKhachHang == "Nhà Dân") {
    soKetNoi = document.getElementById("soKetNoi");
    soKetNoi.disabled = true;
    return soKetNoi
  } else {
    soKetNoi = document.getElementById("soKetNoi");
    soKetNoi.disabled = false;
  }
  return loaiKhachHang;
}

function congketnoi(soKetNoi) {
  if (1 <= soKetNoi && soKetNoi <= 10) {
    soKetNoi = document.getElementById("soKetNoi").value * 1;
    return soKetNoi
  } 
  ;
}
function inTienCap(maKhachHang, tinhTienCap) {
  document.getElementById(
    "result-b4"
  ).innerHTML = `Mã Khách hàng:${maKhachHang}<br> Số tiền cáp phải trả: ${tinhTienCap.toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  )}`;
}
