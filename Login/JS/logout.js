// JavaScript Document
function logout() {
	var yakin = confirm("Apakah Kamu Yakin Ingin Keluar?");
	if (yakin) {
		document.write("Anda Berhasil Keluar");
		window.location = "index.html";
	} else {
		document.write("Baiklah, Stay Here Please :)");
		window.location = "home.html"
	}
}