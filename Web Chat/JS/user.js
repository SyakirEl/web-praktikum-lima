// JavaScript Document
var chatbox = document.getElementById("chatbox");
var usermsg = document.getElementById("usermsg");
var namauser = document.getElementById("namauser");
var submitmsg = document.getElementById("submitmsg");

submitmsg.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = namauser.value + " : " + usermsg.value;
     chatbox.appendChild(newMessage);
     usermsg.value = "";
});
	