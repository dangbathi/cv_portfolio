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

//test = showCalendar(9,2021);



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
}

function countDayOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}