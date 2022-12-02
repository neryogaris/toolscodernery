window.addEventListener("load", today, true);
function today() {
	const datestamp = new Date().toISOString().split("T")[0];
	const timestamp = new Date().toLocaleTimeString("es-AR");
	document.getElementById("today").innerHTML = datestamp;
	document.getElementById("now").innerHTML = timestamp;
	document.getElementById("now2").innerHTML = timestamp;

	var yo = document.getElementById("finalLink2").textContent;
	console.log(yo);
}

window.addEventListener("load", copyright, true);
function copyright() {
	const thisYear = new Date().getFullYear();
	document.getElementById("thisYear").innerHTML = thisYear;
}

new Vue({
	el: "#app",
	data() {
		return {
			phone: "",
			msg: "",
			baselink: "http://api.whatsapp.com/send",
		};
	},
	computed: {
		phoneNumber: function () {
			return "?phone=" + this.phone;
		},
		encodedMsg: function () {
			return "&text=" + encodeURIComponent(this.msg);
		},
		whatsapplink: function () {
			if (this.phone && !this.msg) {
				return this.baselink.concat(this.phoneNumber);
			} else if (this.phone && this.msg) {
				return this.baselink.concat(this.phoneNumber).concat(this.encodedMsg);
			} else {
				return this.baselink;
			}
		},


	},

});


function openLink() {
	var yo = document.getElementById("finalLink2").textContent;
	console.log(yo);
	var link = document.querySelector("a");
	link.getAttribute("href");
	link.setAttribute("href",
		yo);

}

