/* -------------------------------- option 1 ------------------------- */
function checkmonth(month) {
    var day = [];
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            tam = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            tam = 30;
            break;
        case 2:
            tam = 28;
            break
    }
    for (i = 1; i <= tam; i++) day.push(i);
    //lưu value vào mảng 1 chiều

    let d2d = [];
    while (day.length) d2d.push(day.splice(0, 7));
    //chuyển mảng 1 chiều thành 2 chiều, mỗi phần tử có index = 0 và có 7 phần tử con
    return d2d;
}

function showday() {
    let month1 = +document.getElementById('month-1').value;
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let calendar = document.getElementById('calendar-table-1');
    if (!month1) alert("vui lòng nhập tháng cần xem");
    else if (month1 > 0 && month1 < 13) {
        nday = checkmonth(month1);
        let html1 = '';
        html1 += "<table>";
        for (a = 0; a < weekdays.length; a++) {

        }
        let table = document.createElement("table");
        let headerRow = document.createElement("tr");
        for (a = 0; a < weekdays.length; a++) {
            let header = document.createElement('th');
            let textNode = document.createTextNode(weekdays[a]);
            header.appendChild(textNode);
            headerRow.appendChild(header);
        }
        table.appendChild(headerRow);
        for (i = 0; i < nday.length; i++) {
            let row = document.createElement("tr");
            for (j = 0; j < nday[i].length; j++) {
                let cell = document.createElement("td");
                let tnode = document.createTextNode(nday[i][j]);
                cell.appendChild(tnode);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        calendar.appendChild(table);
    } else {
        alert('Tháng phải lớn hơn 0 và nhỏ hơn 12');
    }

}

/* -------------------------------- option 2 ------------------------- */
function showCalendar() {
    let month = (+document.getElementById("month-2").value) - 1;
    let year = +document.getElementById("year-2").value;
    if (!month) alert("vui lòng nhập tháng");
    else if (month > 0 && month < 13) {
        if (!year) alert("Vui lòng nhập năm");
        else if (year > 0) {
            let dayCount = countDayOfMonth(month, year);
            let firstDay = getStartDayOfMonth(month, year);
            let calendar2 = document.getElementById("calendar-table-2");
            let weekdays2 = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
            let table2 = document.createElement("table");
            let headerRow2 = document.createElement("tr");
            for (a = 0; a < weekdays2.length; a++) {
                let header2 = document.createElement("th");
                header2.appendChild(document.createTextNode(weekdays2[a]));
                headerRow2.appendChild(header2);
            }
            table2.appendChild(headerRow2);
            let date = 1;
            for (i = 0; i < 5; i++) {
                let row2 = document.createElement("tr");
                for (j = 0; j < 7; j++) {
                    if (i === 0 && j < firstDay) {
                        //Giá trị những cell trc ngày đầu tiên của tháng  = ""
                        let cell2 = document.createElement("td");
                        cell2.appendChild(document.createTextNode(""));
                        row2.appendChild(cell2);
                    } else if (date > dayCount) break;
                    else {
                        cell2 = document.createElement("td");
                        cell2.appendChild(document.createTextNode(date));
                        row2.appendChild(cell2);
                        date++;
                    }
                    table2.appendChild(row2);
                }
            }
            calendar2.appendChild(table2);
        } else alert("Năm phải lớn hơn 0");
    } else alert("Tháng phải lớn hơn 0 và nhỏ hơn 13");

}

function getStartDayOfMonth(month, year) {
    return new Date(year, month, 1).getDay();
    // return day in week 0 - 6 (index)
}

function countDayOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
    // return day in month 1 - 31
}

/* -------------------------------- In 30 số nguyên tố ------------------------------ */


function timsonguyento() {
    let html = "";
    let songuyento = +document.getElementById("songuyento").value;
    if (!songuyento) alert('Vui lòng nhập vào 1 số');
    else if (songuyento < 2) alert('Đây không phải là số nguyên tố');
    else if (songuyento == 2) document.getElementById("songuyento-result").innerHTML = "Số 2 là số nguyên tố";
    else {
        for (i = 2; i <= songuyento; i++) {
            tam = 1;
            for (j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    tam = 0;
                    break;
                }
            } if (tam == 1) {
                html += "<p>" + i + "</p>";
            }
        }
        document.getElementById("songuyento-result").innerHTML = html;
    }
}

/* ------------------ in số nguyên tố --------------------  */
// function firstPrime(a) {
//     let count = 0;
//     for (i = 2; count < a; i++) {
//         if (kiemtrnt(i)) {
//             document.write(i + " ");
//             count++;
//         }
//     }
// }

// function kiemtrnt(a) {
//     for (let j = 2; j <= Math.sqrt(a); j++) {
//         if (a % j == 0) {
//             return false;
//         }
//     }
//     return true;
//}

/* ------------------ in số Fibonaci --------------------  */
// let a=0;
// let b=1;
// let c;
// let fibonaci = "";
// for(i=0;i<20; i++){
//     c = a + b;
//     a = b;
//     b = c;
//     fibonaci += c + " ";
// }
// console.log(fibonaci);

/* ------------------ tính tổng các số nhập từ phím --------------------  */
// let n =0;
// let sum = 0;
// while(n != parseInt(-1)){
//     sum += n;
//     n = +prompt("nhập số");
//     console.log(n);
// }
// console.log(sum);

/* ------------------ Nhập nhiệt độ trong range --------------------  */
// let n = +prompt("nhập nhiệt độ");
// while(n > 100 || n < 20){
//    if(n<20){
//       alert("có thể tăng nhiệt độ");
//       n = +prompt("nhập nhiệt độ tăng");
//    }else if(n>100){
//       alert("nhiệt độ giảm");
//       n = +prompt("nhập nhiệt độ");
//    }
// }
// alert("nhiệt độ ok")


/* ------------------ tính lãi kép bank --------------------- */

function laikep() {
    let optionLs = document.getElementById("bank-laikep").value;
    let a = +document.getElementById("tiengui").value;
    let n = +document.getElementById("time").value;
    let lsbank = +document.getElementById("ls").value;
    let sum = 0;
    if (!a) alert("vui lòng nhập số tiền");
    else if (!n) alert("Vui lòng nhập kỳ hạn");
    else if (!lsbank) alert("Vui lòng nhập lái suất");
    else {
        if (optionLs === "month") {
            lsbank = lsbank / 12 / 100;
            sum = tinhlaikep(lsbank, a, n)
        } else if (optionLs === "year") {
            tinhlaikep(lsbank, a, n);
            lsbank = lsbank/100;
            sum = tinhlaikep(lsbank, a, n);
        }
        document.getElementById("bank-result").innerHTML = sum + " VNĐ";
    }

}

 function tinhlaikep(ls, a, n) {
     let th1 = 0;
     for (i = 1; i <= n; i++) {
         th1 = a + (ls * a);
         a = th1;
     }
     return th1;
 }

// function tinhlaikep(ls,a ,n){
//     let th1 = 0;
//     let i = 1;
//     while(i<=n){
//         th1 = a + (ls * a);
//         a = th1;
//         i++;
//     }
//     return th1;
// }
