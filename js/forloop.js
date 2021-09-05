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
    for (i = 1; i <= tam; i++) {
        day.push(i);
        //lưu value vào mảng 1 chiều 
    }
    let d2d = [];
    while (day.length) d2d.push(day.splice(0, 7));
    //chuyển mảng 1 chiều thành 2 chiều, mỗi phần tử có index = 0 và có 7 phần tử con
    return d2d;
}

function showday() {
    let month = +document.getElementById('month').value;
    let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let calendar = document.getElementById('calendar-week-day');
    if (!month) {
        alert("vui lòng nhập tháng cần xem");
    } else if (month > 0 && month < 12) {
        nday = checkmonth(month);
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
    }else{
        alert('Tháng phải lớn hơn 0 và nhỏ hơn 12');
    }

}
