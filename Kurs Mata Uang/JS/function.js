// JavaScript Document
function kurs(){
	var k = document.getElementById("kurs").value;
	
	if (k == 1){
		var input = document.getElementById("nilai").value;
		var nilai = 9915;
		var hitung = nilai * input;
		document.getElementById("rupiah").value = "Rp. " + hitung;
	}
	else if (k == 2){
		var input2 = document.getElementById("nilai").value;
		var nilai2 = 13472;
		var hitung2 = nilai2 * input2;
		document.getElementById("rupiah").value = "Rp. " + hitung2;
	}
	else if (k == 3){
		var input3 = document.getElementById("nilai").value;
		var nilai3 = 874;
		var hitung3 = nilai3 * input3;
		document.getElementById("rupiah").value = "Rp. " + hitung3;
	}
	else if (k == 4){
		var input4 = document.getElementById("nilai").value;
		var nilai4 = 120;
		var hitung4 = nilai4 * input4;
		document.getElementById("rupiah").value = "Rp. " + hitung4;
	}
	else if (k == 5){
		var input5 = document.getElementById("nilai").value;
		var nilai5 = 15.888;
		var hitung5 = nilai5 * input5;
		document.getElementById("rupiah").value = "Rp. " + hitung5;
	}
	else if (k == 6){
		var input6 = document.getElementById("nilai").value;
		var nilai6 = 3592;
		var hitung6 = nilai6 * input6;
		document.getElementById("rupiah").value = "Rp. " + hitung6;
	}
	else if (k < 1){
		document.getElementById("rupiah").value = "0";
	}
}

