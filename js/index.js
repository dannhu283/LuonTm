function calculator() {
  let productivity = Math.floor(+document.getElementById("productivity").value);
  let point = Math.floor(+document.getElementById("point").value);
  let workDay = Math.floor(+document.getElementById("workDay").value);
  let nightShift = Math.floor(+document.getElementById("nightShift").value);
  let annual = Math.floor(+document.getElementById("hiddenInput").value);
  let workmonth = Math.floor(+document.getElementById("monthwork").value);
  let salary = 0;
  if (isNaN(workmonth) || workmonth <= 0) {
    alert(
      "Vui lòng nhập số tháng làm việc để tui tính tiền thưởng điểm chất lượng nữa ba"
    );
    return;
  }
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

      if (workmonth < 6) {
        if (point >= 95) {
          salary += 150000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
      } else if (workmonth >= 6) {
        if (point >= 98) {
          salary += 300000;
        } else if (point >= 96) {
          salary += 200000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
      }

      if (workDay > 25) {
        salary += 300000;
      }
    } else {
      if (productivity < 3120 && productivity >= 3000) {
        salary = productivity * 750 + productivity * 125 + nightShift * 50000;
        if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
          salary -= productivity * 0.05 * 750;
        }
      } else {
        salary = productivity * 650 + productivity * 125 + nightShift * 50000;
        if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
          salary -= productivity * 0.05 * 650;
        }
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
      if (workmonth < 6) {
        if (point >= 95) {
          salary += 150000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
      } else if (workmonth >= 6) {
        if (point >= 98) {
          salary += 500000;
        } else if (point >= 96) {
          salary += 300000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
      }

      if (workDay > 25) {
        salary += 500000;
      }
      if (productivity >= 5000) {
        salary += 500000;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương: ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    } else if (productivity >= 3000 && productivity < 4160) {
      salary =
        nightShift * 50000 +
        productivity * 750 +
        productivity * 125 -
        1602432 +
        annual * 150080;
      if (productivity >= 3360 && workDay > 25) {
        salary += 250000;
      }
      if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
        salary -= productivity * 0.05 * 750;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương : ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    } else {
      salary =
        productivity * 650 +
        productivity * 125 +
        nightShift * 50000 +
        annual * 150080 -
        1602432;
      if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
        salary -= productivity * 0.05 * 650;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương : ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
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

      if (workmonth < 6) {
        if (point >= 95) {
          salary += 150000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
      } else if (workmonth >= 6) {
        if (point >= 98) {
          salary += 500000;
        } else if (point >= 96) {
          salary += 300000;
        } else {
          salary -= productivity * 0.05 * 938;
        }
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
    } else if (productivity >= 3000 && productivity < 4160) {
      salary = nightShift * 50000 + productivity * 750 + productivity * 125;
      if (productivity >= 3360 && workDay > 25) {
        salary += 250000;
      }
      if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
        salary -= productivity * 0.05 * 750;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương : ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    } else {
      salary = productivity * 650 + productivity * 125 + nightShift * 50000;
      if ((workmonth < 6 && point < 95) || (workmonth > 6 && point < 96)) {
        salary -= productivity * 0.05 * 650;
      }
      document.getElementById(
        "salary"
      ).innerHTML = `Tổng lương : ${salary.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
      })}`;
    }
  } else {
    alert(
      "Rồi bà không chọn FullTime hay PartTime sao tui biết mà tính cho bà???"
    );
  }
}

var input = document.getElementById("hiddenInput");
var h2 = document.getElementById("hidden");
function showInput() {
  h2.style.display = "block";
  input.style.display = "block";
}
function hiddenInput() {
  h2.style.display = "none";
  input.style.display = "none";
}
