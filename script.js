const NORMAL_PRICE=90000;
const VIP_PRICE=120000;

let selectedSeats=[];
let currentMovie="";


const movies=[

{
title:"Avengers",
poster:"images/avengers.jpg",
trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"
},

{
title:"Spider Man",
poster:"images/spiderman.jpg",
trailer:"https://www.youtube.com/embed/JfVOs4VSpmA"
},

{
title:"Avatar 2",
poster:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
trailer:"https://www.youtube.com/embed/d9MyW72ELq0"
},

{
title:"Batman",
poster:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
trailer:"https://www.youtube.com/embed/mqqft2x_Aa4"
},

{
title:"Doctor Strange 2",
poster:"https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg"
},

{
title:"Fast & Furious 10",
poster:"https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
trailer:"https://www.youtube.com/embed/eoOaKN4qCKw"
},


];


const areas={

"TP Hồ Chí Minh":{

"CGV Vincom Đồng Khởi":["09:00","11:30","14:00","16:30","19:00","21:30"],
"Lotte Cinema Gò Vấp":["09:15","11:45","14:15","16:45","19:15","21:45"],
"Galaxy Nguyễn Du":["09:30","12:00","14:30","17:00","19:30"],
"BHD Star Bitexco":["09:00","11:20","13:40","16:00","18:20","20:40"],
"CGV Aeon Tân Phú":["09:10","11:40","14:10","16:40","19:10"]

},

"Hà Nội":{

"CGV Royal City":["09:00","11:30","14:00","16:30","19:00","21:30"],
"Lotte Cinema Liễu Giai":["09:15","11:45","14:15","16:45","19:15"],
"Beta Mỹ Đình":["09:30","12:00","14:30","17:00","19:30"],
"BHD Star Phạm Ngọc Thạch":["09:00","11:20","13:40","16:00","18:20"],
"CGV Vincom Bà Triệu":["09:10","11:40","14:10","16:40","19:10"]

},

"Đà Nẵng":{

"CGV Vincom Đà Nẵng":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Đà Nẵng":["09:15","11:45","14:15","16:45","19:15"],
"Galaxy Đà Nẵng":["09:30","12:00","14:30","17:00","19:30"]

},

"Cần Thơ":{

"CGV Sense City":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Cần Thơ":["09:15","11:45","14:15","16:45","19:15"]

},

"Hải Phòng":{

"CGV Vincom Hải Phòng":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Hải Phòng":["09:30","12:00","14:30","17:00","19:30"]

},

"Bình Dương":{

"CGV Aeon Bình Dương":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Dĩ An":["09:15","11:45","14:15","16:45","19:15"]

},

"Đồng Nai":{

"CGV Biên Hòa":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Đồng Nai":["09:30","12:00","14:30","17:00","19:30"]

},

"Khánh Hòa":{

"CGV Nha Trang":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Nha Trang":["09:30","12:00","14:30","17:00","19:30"]

},

"Huế":{

"CGV Huế":["09:00","11:30","14:00","16:30","19:00"],
"Lotte Cinema Huế":["09:30","12:00","14:30","17:00","19:30"]

},

"Quảng Ninh":{

"CGV Hạ Long":["09:00","11:30","14:00","16:30","19:00"]

},

"Nghệ An":{

"CGV Vinh Center":["09:00","11:30","14:00","16:30","19:00"]

},

"Thanh Hóa":{

"CGV Thanh Hóa":["09:00","11:30","14:00","16:30","19:00"]

},

"Thái Nguyên":{

"CGV Thái Nguyên":["09:00","11:30","14:00","16:30","19:00"]

},

"Hải Dương":{

"CGV Hải Dương":["09:00","11:30","14:00","16:30","19:00"]

},

"Bắc Ninh":{

"CGV Bắc Ninh":["09:00","11:30","14:00","16:30","19:00"]

},

"Bắc Giang":{

"CGV Bắc Giang":["09:00","11:30","14:00","16:30","19:00"]

},

"Nam Định":{

"CGV Nam Định":["09:00","11:30","14:00","16:30","19:00"]

},

"Vũng Tàu":{

"Lotte Cinema Vũng Tàu":["09:00","11:30","14:00","16:30","19:00"]

},

"Long An":{

"CGV Long An":["09:00","11:30","14:00","16:30","19:00"]

},

"Tiền Giang":{

"CGV Mỹ Tho":["09:00","11:30","14:00","16:30","19:00"]

},

"An Giang":{

"CGV Long Xuyên":["09:00","11:30","14:00","16:30","19:00"]

},

"Lâm Đồng":{

"CGV Đà Lạt":["09:00","11:30","14:00","16:30","19:00"]

},

"Phú Quốc":{

"CGV Phú Quốc":["09:00","11:30","14:00","16:30","19:00"]

},

"Bình Định":{

"CGV Quy Nhơn":["09:00","11:30","14:00","16:30","19:00"]

},

"Quảng Ngãi":{

"CGV Quảng Ngãi":["09:00","11:30","14:00","16:30","19:00"]

}

};


const movieList=document.getElementById("movieList");

movies.forEach((m,i)=>{

movieList.innerHTML+=`
<div class="movie">
<img src="${m.poster}">
<h3>${m.title}</h3>
<button onclick="selectMovie(${i})" class="btn-book">Đặt vé</button>
</div>
`;

});


function selectMovie(i){

document.getElementById("bookingSection").classList.remove("hidden");

document.getElementById("movieTitle").innerText=movies[i].title;

document.getElementById("trailer").src=movies[i].trailer;

loadAreas();

createSeats();

scrollToSection("detailSection");

}


function loadAreas(){

const list=document.getElementById("areaList");

list.innerHTML="";

for(let area in areas){

list.innerHTML+=`<li onclick="loadCinema('${area}')">${area}</li>`;

}

}


function loadCinema(area){

const cinemaList=document.getElementById("cinemaList");

cinemaList.innerHTML="";

for(let cinema in areas[area]){

cinemaList.innerHTML+=`<h4>${cinema}</h4>`;

areas[area][cinema].forEach(time=>{

cinemaList.innerHTML+=`<button>${time}</button>`;

});

}

}


function createSeats(){

const seats=document.getElementById("seats");

seats.innerHTML="";

const letters="ABCDEFGH";

for(let r=0;r<8;r++){

for(let c=1;c<=12;c++){

const name=letters[r]+c;

const div=document.createElement("div");

div.className="seat "+(r>=3&&r<=5?"vip":"normal");

div.innerText=name;

div.onclick=()=>selectSeat(div,name,r);

seats.appendChild(div);

}

}

}


function selectSeat(div,name,row){

div.classList.toggle("selected");

const index=selectedSeats.indexOf(name);

if(index>-1) selectedSeats.splice(index,1);
else selectedSeats.push(name);

update();

}


function update(){

document.getElementById("seatList").innerText=selectedSeats.join(",");

let total=0;

selectedSeats.forEach(seat=>{

const row=seat.charCodeAt(0)-65;

total+=row>=3&&row<=5?VIP_PRICE:NORMAL_PRICE;

});

document.getElementById("total").innerText=total.toLocaleString();

}


function book(){

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;

if(!name||!email||selectedSeats.length==0){
alert("Nhập đủ thông tin");
return;
}

localStorage.setItem("movie",document.getElementById("movieTitle").innerText);
localStorage.setItem("seats",selectedSeats.join(","));
localStorage.setItem("total",document.getElementById("total").innerText);

window.location.href="payment.html";


document.getElementById("message").innerText="Đặt vé thành công 🎉";

}


function scrollToSection(id){

document.getElementById(id).scrollIntoView({behavior:"smooth"});

}

function confirmBooking(){

if(selectedSeats.length==0){
alert("Vui lòng chọn ghế");
return;
}

localStorage.setItem("movie",document.getElementById("movieTitle").innerText);
localStorage.setItem("seats",selectedSeats.join(","));
localStorage.setItem("total",document.getElementById("total").innerText);

window.location.href="confirm.html";

}