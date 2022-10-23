function Enrollment(object, area, originalGrade) {
  var grade1 = Number(document.getElementById("grade-1").value);
  var grade2 = Number(document.getElementById("grade-2").value);
  var grade3 = Number(document.getElementById("grade-3").value);
  var benchMark = Number(document.getElementById("bench-mark").value);
  var noti = document.getElementById("noti-1");
  noti.classList = "alert alert-success col-12 mt-3 mx-auto";

  originalGrade = ExamGrade(grade1, grade2, grade3);
  area = AreaSelect();
  object = ObjectSelect();

  if (grade1 == "" || grade2 == "" || grade3 == "") {
    noti.classList = "alert alert-danger col-12 mt-3 mx-auto";
    noti.innerHTML = "👉 Vui lòng nhập điểm";
  } else {
    if (grade1 == 0 || grade2 == 0 || grade3 == 0) {
      noti.classList = "alert alert-danger col-12 mt-3 mx-auto";
      noti.innerHTML = "👉 Bạn đã trượt vì có điểm = 0";
    } else {
      if (area == "A") {
        switch (object) {
          case "1":
            var totalGrade = originalGrade + 4.5;
            break;
          case "2":
            var totalGrade = originalGrade + 3.5;
            break;
          case "3":
            var totalGrade = originalGrade + 3;
            break;
          default:
            var totalGrade = originalGrade + 2;
            break;
        }
      } else if (area == "B") {
        switch (object) {
          case "1":
            var totalGrade = originalGrade + 1 + 2.5;
            break;
          case "2":
            var totalGrade = originalGrade + 1 + 1.5;
            break;
          case "3":
            var totalGrade = originalGrade + 1 + 1;
            break;
          default:
            var totalGrade = originalGrade + 1;
            break;
        }
      } else if (area == "C") {
        switch (object) {
          case "1":
            var totalGrade = originalGrade + 0.5 + 2.5;
            break;
          case "2":
            var totalGrade = originalGrade + 0.5 + 1.5;
            break;
          case "3":
            var totalGrade = originalGrade + 0.5 + 1;
            break;
          default:
            var totalGrade = originalGrade + 0.5;
            break;
        }
      } else {
        switch (object) {
          case "1":
            var totalGrade = originalGrade + 2.5;
            break;
          case "2":
            var totalGrade = originalGrade + 1.5;
            break;
          case "3":
            var totalGrade = originalGrade + 1;
            break;
          default:
            var totalGrade = originalGrade;
            break;
        }
      }
      console.log(totalGrade);
      console.log(originalGrade);
      console.log(object);
      console.log(area);
      if (totalGrade >= benchMark) {
        noti.innerHTML = "👉 Bạn đã đậu với số điểm " + totalGrade + " điểm";
      } else {
        noti.classList = "alert alert-danger col-12 mt-3 mx-auto";
        noti.innerHTML = "👉 Bạn đã trượt. Tổng điểm: " + totalGrade;
      }
    }
  }
}

function ExamGrade(numb1, numb2, numb3) {
  var result = numb1 + numb2 + numb3;
  return result;
}

function AreaSelect() {
  var area = document.getElementById("area").value;
  return area;
}

function ObjectSelect() {
  var object = document.getElementById("object").value;
  return object;
}
