function calculator() {
  let productivity = +document.getElementById("productivity").value;
  let point = +document.getElementById("point").value;
  let workDay = +document.getElementById("workDay").value;
  let nightShift = +document.getElementById("nightShift").value;
  let annual = +document.getElementById("annual").value;
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
      if (point >= 93) {
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
    if (productivity >= 4160) {
      salary =
        4160 * 938 + nightShift * 50000 + 520000 - 525798 + annual * 150080;
      if (productivity - 4160 <= 500) {
        salary += (productivity - 4160) * 1100;
      } else if (productivity - 4160 <= 1000) {
        salary += 1100 * 500 + 1200 * (productivity - 4660);
      } else {
        salary +=
          1100 * 500 +
          1200 * (productivity - 4660) +
          1300 * (productivity - 5160);
      }
      if (point < 95 && point >= 93) {
        salary += 200000;
      } else if (point >= 95) {
        salary += 400000;
      }
      if (workDay > 25) {
        salary += 500000;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương: ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    } else {
      alert("Tui chưa có đơn giá cụ thể,chờ thêm đi bà!!");
    }
  } else if (fullTimeK.checked) {
    if (productivity >= 4160) {
      salary = 4160 * 938 + nightShift * 50000 + 520000;
      if (productivity - 4160 <= 500) {
        salary += (productivity - 4160) * 1100;
      } else if (productivity - 4160 <= 1000) {
        salary += 1100 * 500 + 1200 * (productivity - 4660);
      } else {
        salary +=
          1100 * 500 +
          1200 * (productivity - 4660) +
          1300 * (productivity - 5160);
      }
      if (point < 95 && point >= 93) {
        salary += 200000;
      } else if (point >= 95) {
        salary += 400000;
      }
      if (workDay > 25) {
        salary += 500000;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương: ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    } else {
      alert("Tui chưa có đơn giá cụ thể,chờ thêm đi bà!!");
    }
  } else {
    alert(
      "Rồi bà không chọn FullTime hay PartTime sao tui biết mà tính cho bà???"
    );
  }
}
