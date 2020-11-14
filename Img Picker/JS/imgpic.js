// JavaScript Document
function pilih(){
 var pil=document.getElementById("form1").pic.value;
  if (pil=="1")
    {
        document.getElementById("img").innerHTML="<img src='IMG/GTAV.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game GTAV.jpg");
    }
	else if (pil=="2")
    {
        document.getElementById("img").innerHTML="<img src='IMG/WD.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game WD.jpg");
    }
	else if (pil=="3")
    {
        document.getElementById("img").innerHTML="<img src='IMG/VALO.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game VALO.jpg");
    }
	else if (pil=="4")
    {
        document.getElementById("img").innerHTML="<img src='IMG/CSGO.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game CSGO.jpg");
    }
	else if (pil=="5")
    {
        document.getElementById("img").innerHTML="<img src='IMG/DOTA.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game DOTA.jpg");
    }
	else if (pil=="6")
    {
        document.getElementById("img").innerHTML="<img src='IMG/FORT.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game FORT.jpg");
    }
	else if (pil=="7")
    {
        document.getElementById("img").innerHTML="<img src='IMG/APEX.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game APEX.jpg");
    }
	else if (pil=="8")
    {
        document.getElementById("img").innerHTML="<img src='IMG/PUBG.jpg'>";
		window.alert("Ini Adalah Gambar Dari Game PUBG.jpg");
    }else{
		document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
	}
	
}
