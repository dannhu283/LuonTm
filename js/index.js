function calculator() {
  let productivity = +document.getElementById("productivity").value;
  let point = +document.getElementById("point").value;
  let workDay = +document.getElementById("workDay").value;
  let nightShift = +document.getElementById("nightShift").value;
  let salary = 0;
  if (partTime.checked) {
    if (productivity >= 3120) {
      salary = 3120 * 938 + 390000 + nightShift * 50000;
      if (productivity - 3120 <= 500) {
        salary += (productivity - 3120) * 1100;
      } else if (productivity - 3120 <= 1000) {
        salary += 500 * 1100 + (productivity - 3620) * 1200;
      } else {
        salary += 500 * 1100 + 500 * 1200 + (productivity - 4120) * 1300;
      }
      if (point >= 93 && point < 95) {
        salary += 100000;
      } else if (point > 95) {
        salary += 200000;
      } else {
        salary += 0;
      }
      if (workDay > 25) {
        salary += 300000;
      }
    } else {
      if (productivity < 3120 && productivity >= 3000) {
        salary = productivity * 750 + productivity * 125 + nightShift * 50000;
      } else {
        salary = productivity * 650 + productivity * 125 + nightShift * 50000;
      }
    }
    document.getElementById(
      "salary"
    ).innerHTML = `Tổng Lương: ${salary.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    })}`;
  } else if (fullTime.checked) {
    alert("Đang viết code mà buồn ngủ quá nên ngủ đã,mai viết tiếp 🥹");
  } else {
    alert(
      "Rồi bà không chọn FullTime hay PartTime sao tui biết mà tính cho bà  🤣🤣"
    );
  }
}
