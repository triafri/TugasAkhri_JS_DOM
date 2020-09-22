function buat_login(){
	var hide = document.getElementById("X");
	hide.parentElement.removeChild(hide);

	var p = document.createElement("P");
	p.className = "tulisan_login";
	p.innerHTML = "silahkan mendaftar";
	var element = document.getElementsByTagName("div")[0];
	element.appendChild(p);
	var form = document.createElement("FORM");
	element.appendChild(form);

	var label = document.createElement("label");
	label.innerHTML = "Nama User";
	form.appendChild(label);
	var nama = document.createElement("input");
	nama.type ="text";
	nama.name = "nama";
	nama.className = "form_login";
	nama.placeholder = "Nama User.."
	form.appendChild(nama);

	var label2 = document.createElement("label");
	label2.innerHTML = "Nomor Handphone";
	form.appendChild(label2);
	var hp = document.createElement("input");
	hp.type ="text";
	hp.name = "nomorhp";
	hp.className = "form_login";
	hp.placeholder = "Nomor Handphone.."
	form.appendChild(hp);

	var label3 = document.createElement("label");
	label3.innerHTML = "Username";
	form.appendChild(label3);
	var user = document.createElement("input");
	user.type ="text";
	user.name = "username";
	user.className = "form_login";
	user.placeholder = "Username atau Email.."
	form.appendChild(user);

	var label4 = document.createElement("label");
	label4.innerHTML = "Password";
	form.appendChild(label4);
	var pass = document.createElement("input");
	pass.type ="text";
	pass.name = "password";
	pass.className = "form_login";
	pass.placeholder = "Password.."
	form.appendChild(pass);

	var btn = document.createElement("input");
	btn.type = "submit";
	btn.value = "DAFTAR SEKARANG";
	btn.className = "tombol_login";
	form.appendChild(btn);
}