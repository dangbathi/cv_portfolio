let month = +prompt("nhập tháng");
if(month <= 12 ){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        alert('Tháng ' + month + ' có 31 ngày');
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        alert('Tháng ' + month + ' có 30 ngày');
    }else if(month == 2){
        alert('Tháng ' + month + ' có 28 hoặc 29 ngày');
    }
}else{
    alert('Vui lòng nhập tháng nhỏ hơn 12');
}
