// JavaScript Document

// Maxlength
function maxlength(evt) {
	var panjangnama = document.getElementById("name").value;
	if (panjangnama.length >= 30  ){
		window.alert("Max Length 30");
		return false;
	}
}

// Anka Only
function angka(e) {
  var max = document.getElementById("jmltiket").value;
  if (!/^[0-9]+$/.test(e.value)) {
	window.alert("Hanya Boleh Angka");
    e.value = e.value.substring(0,e.value.length-1);
	max.length = 2;
  }
}

// Validasi Input
function validasi() {
	var nama = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var jam = document.getElementById("jam").value;
	var tujuan = document.getElementById("tujuan").value;
	var tiket = document.getElementById("jmltiket").value;
	
	if (nama && email && jam  && tujuan  && tiket ) {
		document.getElementById("chatbox").innerHTML= "Nama : " + nama + "<br>" + "Email : " + email + "<br>" + "Jam Berangkat : " + jam + "<br>" + "Tujuan : " +tujuan + "<br>" + "Jumlah Tiket : " + tiket + "<br><br>" + "Selamat Traveling";
		return false;
	}else{
		alert("Data Belum Lengkap, Harap Isi dengan Benar");
	}	
}