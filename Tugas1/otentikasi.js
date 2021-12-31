function validated(e) {
    e.preventDefault();
    let val1 = document.getElementById("username").value + document.getElementById("password").value;
    let val2 = "ahmad2017" + "integrity"
   
    if(val1 == val2) {
        location.href = "home.html";
        alert("Selamat, Login Sukses !");
    }   else {
        alert("Maaf, Login Gagal !");
    }
}