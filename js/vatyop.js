function clear_box() {
    document.getElementsByTagName("input").value = '';

}

function tong_hai_so() {
    let a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    tong = a + b;
    document.getElementById('result').innerHTML = 'Tổng 2 số nguyên là: ' + tong;
}

function hien_ngay_thang() {
    let d, m, y;
    d = +document.getElementById('d').value;
    m = +document.getElementById('m').value;
    y = +document.getElementById('y').value;
    if (!d) {
        alert('vui lòng nhập ngày');
    } else if (d > 0 && d <= 31) {
        if (!m) {
            alert('vui lòng nhập tháng');
        } else if (m >= 1 && m <= 12) {
            if (!y) {
                alert('vui lòng nhập năm');
            } else if (y >= 1000 && y < 9999) {
                document.getElementById('result1').innerHTML = 'ngày ' + d + ' tháng ' + m + ' năm ' + y;
            } else {
                alert('Năm phải lớn hơn hoặc bằng 1000 và nhỏ hơn hoặc bằng 9999');
            }
        } else {
            alert('Tháng phải lớn hơn hoặc bằng 1 và nhỏ hơn hoặc bằng 12');
        }
    } else {
        alert('Ngày phải lớn hơn 0 và nhỏ hơn hoặc bằng 31');
    }

}

function chu_vi_dien_tich_hinh_tron() {
    let r;
    const Pi = 3.14;
    r = +document.getElementById('r').value;
    if (!r) {
        alert('Vui lòng nhập bán kính');
    } else {
        C = 2 * r * Pi;
        S = Math.pow(r, 2) * Pi;
        document.getElementById('result2').innerHTML = 'Chu vi: ' + C;
        document.getElementById('result3').innerHTML = 'Diện tích: ' + S;
    }
}

function noi_dung_thu() {
    let name, address, time;
    name = document.getElementById('ten').value;
    address = document.getElementById('diachi').value;
    time = document.getElementById('thoigian').value;
    date = new Date(time);
    if (!name) {
        alert('Vui lòng nhập tên');
    } else if (!address) {
        alert('Vui lòng nhập địa chỉ');
    } else if (!time) {
        alert('Vui lòng chọn thời gian');
    } else {
        document.getElementById('result5').style.display = 'block';
        document.getElementById('inTen').innerHTML = name + " thương nhớ,";
        document.getElementById('add_date').innerHTML = address + ", Ngày " + date.getDate() + " tháng " + date.getMonth() + " năm " + date.getFullYear();
    }
}


function tinh_tuoi_duong() {
    let birthday = document.getElementById('birthday').value;
    let tuoi = tinh_tuoi(birthday)[0];
    let m = tinh_tuoi(birthday)[2];
    let d = tinh_tuoi(birthday)[1];
    document.getElementById('result7').innerHTML = tuoi + " tuổi " + Math.abs(m) + " tháng " + Math.abs(d) + " ngày";
}

function tinh_tuoi(birthday) {
    let today;
    date = new Date(birthday);
    today = new Date();
    tuoi = today.getFullYear() - date.getFullYear();
    m = today.getMonth() - date.getMonth();
    d = today.getDate() - date.getDate();
    if (m < 0 || (m >= 0 && today.getDate() < date.getDate())) {
        tuoi--;
        return [tuoi, d, m];
    }
    return [tuoi, d, m];
}

function reset_tuoi() {
    document.getElementById('namsinh').value = '';
    document.getElementById('result7').innerHTML = '';
    document.getElementById('result8').innerHTML = '';
}


function tinh_lai_suat_don() {
    let tiengui, time;
    const ls = 6.5;
    tiengui = +document.getElementById('tiengui').value;
    time = +document.getElementById('time').value;
    if (!tiengui) {
        alert('vui lòng nhập số tiền vốn');
    } else if (tiengui >= 50000) {
        if (!time) {
            alert('vui lòng chọn kỳ hạn');
        } else {
            tlai = tiengui * ls / 100;
            total = tiengui + time * tlai;
            document.getElementById('result4').innerHTML = "Tổng tiền khi đáo hạn: " + total + " VNĐ";
        }
    } else {
        alert('số tiền tối thiểu 50.000 VNĐ')
    }
}


function doi_tien() {
    let amount, fCurrency, tCurrency, currency;
    amount = +document.getElementById('amount').value;
    fCurrency = +document.getElementById('fCurrency').value;
    tCurrency = +document.getElementById('tCurrency').value;
    currency = +document.getElementById('currency').value;
    if (!amount) {
        alert('vui lòng nhập số tiền');
    } else if (amount > 0) {
        currency = amount * tCurrency / fCurrency;
        document.getElementById('currency').placeholder = currency;
    } else {
        alert('số tiền phải lớn hơn 0')
    }

}

// ------------------ tank-game ---------------------
const tankSpeed = 5
function moveUp() {
    let currentTop = parseInt(document.getElementById("tank").style["top"]);
    let currentBoom = parseInt(document.getElementById('boom').style["top"]);
    console.log(currentTop);
    console.log(currentBoom);
    document.getElementById('tank').style.top = currentTop - tankSpeed + "px";
    if(currentTop<0){
        document.getElementById('tank').style.top = 0 + "px";
    }else {
        collision(currentDown,currentBoom);
    }
}

function moveDown() {
    let currentDown = parseInt(document.getElementById('tank').style["top"]);
    let currentBoom = parseInt(document.getElementById('boom').style["top"]);
    console.log(currentDown +" - " + currentBoom);
    document.getElementById('tank').style["top"] = currentDown + tankSpeed + "px";
    if(currentDown>425){
        document.getElementById('tank').style.top = 425 + "px";
    }else {
        collision(currentDown,currentBoom);
    }
}

function moveLeft() {
    let currentLeft = parseInt(document.getElementById('tank').style["left"]);
    document.getElementById('tank').style["left"] = currentLeft - tankSpeed + "px";
    if(currentLeft<0){
        document.getElementById('tank').style.left = 0 + "px";
    }
}

function moveRight() {
    let currentRight = parseInt(document.getElementById('tank').style["left"]);
    document.getElementById('tank').style["left"] = currentRight + tankSpeed + "px";
    if(currentRight>425){
        document.getElementById('tank').style.left = 425 + "px";
    }
}

function autoLocation(){
    document.getElementById('boom').style.top = Math.floor(Math.random() * 401) + "px";
    document.getElementById('boom').style.left = Math.floor(Math.random() * 401) + "px";
}

function collision(topcurrentTank,topcurrentBoom){

    if(35<=(Math.abs(topcurrentBoom - topcurrentTank)) && (Math.abs(topcurrentBoom - topcurrentTank)) <= 40){
        return alert("gameover");
    }
    
}


/* --------------------------- Doi Lich Am ----------------------------------- */

function can(birthday) {
    let date = new Date(birthday);
    let year = date.getFullYear();
    let can = year % 10;
    let namCan = '';

    // -------------- tinh can ------------------
    if (can == 0) {
        namCan = "Canh";
    }
    else if (can == 1) {
        namCan = "Tân";
    }
    else if (can == 2) {
        namCan = "Nhâm";
    }
    else if (can == 3) {
        namCan = "Quý";
    }
    else if (can == 4) {
        namCan = "Giáp";
    }
    else if (can == 5) {
        namCan = "Ất";
    }
    else if (can == 6) {
        namCan = "Bính";
    }
    else if (can == 7) {
        namCan = "Đinh";
    }
    else if (can == 8) {
        namCan = "Mậu";
    }
    else if (can == 9) {
        namCan = "Kỷ";
    }

    return namCan
}

// -------------- tinh chi ------------------

function chi(birthday) {
    let date = new Date(birthday);
    let year = date.getFullYear();
    let chi = year % 12;
    let namChi = '';

    if (chi == 0) {
        namChi = "Thân";
    }
    else if (chi == 1) {
        namChi = "Dậu";
    }
    else if (chi == 2) {
        namChi = "Tuất";
    }
    else if (chi == 3) {
        namChi = "Hợi";
    }
    else if (chi == 4) {
        namChi = "TÝ";
    }
    else if (chi == 5) {
        namChi = "Sửu";
    }
    else if (chi == 6) {
        namChi = "Dần";
    }
    else if (chi == 7) {
        namChi = "Mẹo";
    }
    else if (chi == 8) {
        namChi = "Thìn";
    }
    else if (chi == 9) {
        namChi = "Tỵ";
    }
    else if (chi == 10) {
        namChi = "Ngọ";
    }
    else if (chi == 11) {
        namChi = "Mùi";
    }
    return namChi;
}

function doi_lich_am() {
    let bBirthday = document.getElementById('boy-date').value;
    let gBirthday = document.getElementById('girl-date').value;
    let bcan = can(bBirthday);
    let bchi = chi(bBirthday);
    let gcan = can(gBirthday);
    let gchi = chi(gBirthday);
    let btuoi = tinh_tuoi(bBirthday)[0];
    let gtuoi = tinh_tuoi(gBirthday)[0];
    document.getElementById('result-b').innerHTML = bcan + " " + bchi + " " + btuoi + " Tuổi";
    document.getElementById('result-g').innerHTML = gcan + " " + gchi + " " + gtuoi + " Tuổi";
    console.log(test = Math.abs(btuoi - gtuoi) % 3);
    if ((Math.abs(btuoi - gtuoi)) % 3 == 0) {
        document.getElementById('result-kq').innerHTML = "2 bạn không hợp";
    } else if ((Math.abs(btuoi - gtuoi)) % 4 == 0) {
        document.getElementById('result-kq').innerHTML = "2 bạn tam hợp";
    } else {
        document.getElementById('result-kq').innerHTML = "Hên xui";
    }
}

/* --------------------------- Good - Cheap - Fast ----------------------------------- */

