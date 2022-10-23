const first50Kw = 500;
const next50Kw = 650;
const next100Kw = 850;
const next150Kw = 1100;
const from350Kw = 1300;

function ShowResult() {
  var name = getName();
  var kw = getCapacity();
  var powerCapacity = countElectricityCost(kw);
  var noti = document.querySelector("#noti-2");

  noti.classList = "alert alert-success col-11 mt-3 ";
  noti.innerHTML =
    "👉 Khách hàng: " +
    name +
    "; Tiền điện phải trả: " +
    powerCapacity.toLocaleString() +
    " VNĐ";
}

function countElectricityCost(kw) {
  if (kw < 0 || kw == "") {
    var noti = document.querySelector("#noti-2");
    noti.innerHTML = "👉 Vui lòng nhập dữ liệu hợp lệ";
  } else {
    var electricityCost = 0;
    if (kw <= 50 && kw >= 0) {
      electricityCost = kw * first50Kw;
    } else if (kw > 50 && kw <= 100) {
      electricityCost = 50 * first50Kw + (kw - 50) * next50Kw;
    } else if (kw > 100 && kw <= 200) {
      electricityCost = 50 * first50Kw + 50 * next50Kw + (kw - 100) * next100Kw;
    } else if (kw > 200 && kw <= 350) {
      electricityCost =
        50 * first50Kw +
        50 * next50Kw +
        100 * next100Kw +
        (kw - 200) * next150Kw;
    } else {
      electricityCost =
        50 * first50Kw +
        50 * next50Kw +
        100 * next100Kw +
        150 * next150Kw +
        (kw - 350) * from350Kw;
    }
  }
  return electricityCost;
}

function getName() {
  var name = document.getElementById("name").value;
  return name;
}

function getCapacity() {
  var kw = Number(document.getElementById("kw").value);
  return kw;
}
