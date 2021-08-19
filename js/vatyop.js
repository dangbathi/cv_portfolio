function tong_hai_so(){
    let a,b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    tong = a + b;
    document.getElementById('result').innerHTML = 'Tổng 2 số nguyên là: '+tong;
}

function hien_ngay_thang(){
    let d,m,y;
    d = +document.getElementById('d').value;
    m = +document.getElementById('m').value;
    y = +document.getElementById('y').value;
    if(!d){
        alert('vui lòng nhập ngày');
    }else if(d>0 && d<=31){
        if(!m){
            alert('vui lòng nhập tháng');
        }else if(m>=1 && m<=12){
            if(!y){
                alert('vui lòng nhập năm');
            }else if(y>=1000 && y<9999){
                document.getElementById('result1').innerHTML = 'ngày '+d+' tháng '+m+' năm '+y;
            }
        }else{
            alert('Tháng phải lớn hơn hoặc bằng 1 và nhỏ hơn hoặc bằng 12');
        }
    }else{
        alert('Ngày phải lớn hơn 0 và nhỏ hơn hoặc bằng 31');
    }
   
}

function chu_vi_dien_tich_hinh_tron(){
    let r;
    const Pi = 3.14;
    r = +document.getElementById('r').value;
    if(!r){
        alert('Vui lòng nhập bán kính');
    }else{
        C=2*r*Pi;
        S=Math.pow(r,2)*Pi;
        document.getElementById('result2').innerHTML = 'Chu vi: '+C;
        document.getElementById('result3').innerHTML = 'Diện tích: '+S;
    }
}

function noi_dung_thu(){
    let name,address,time;
    name = document.getElementById('ten').value;
    address = document.getElementById('diachi').value;
    time = document.getElementById('thoigian').value;
    date = new Date(time);
    if(!name){
        alert('Vui lòng nhập tên');
    }else if(!address){
        alert('Vui lòng nhập địa chỉ');
    }else if(!time){
        alert('Vui lòng chọn thời gian');
    }else{
        document.getElementById('result5').style.display = 'block';
        document.getElementById('inTen').innerHTML = name + " thương nhớ,";
        document.getElementById('add_date').innerHTML = address + ", Ngày "+date.getDate()+" tháng "+date.getMonth()+" năm "+date.getFullYear();
    }
}


function tinh_tuoi(){
    let today,birthday;
    birthday = document.getElementById('namsinh').value;
    date = new Date(birthday);
    today = new Date();
    tuoi = today.getFullYear() - date.getFullYear();
    m = today.getMonth() - date.getMonth();
    console.log(m);
    if(m < 0 || (m === 0 && today.getDate() < date.getDate())){
        tuoi--;
        m = Math.abs(m);
        d = Math.abs(today.getDate() - date.getDate());
        document.getElementById('result7').innerHTML = tuoi + " tuổi";
        document.getElementById('result8').innerHTML = "Bạn còn: " +m+ " tháng và: " + d + " ngày là đến sinh nhật";
    }
    document.getElementById('result7').innerHTML = tuoi + " tuổi";
    document.getElementById('result8').style.display = 'none';
}