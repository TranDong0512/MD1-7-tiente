function clickon() {
    let dauvao = document.getElementById("giatridauvao").value;
    let Select1 = document.getElementById("select1").value;
    let Select2 = document.getElementById("select2").value;
    if (Select1 == Select2) {
        alert(dauvao)
    }
    if (Select1 == "vn" && Select2 == "usd") {
        alert(dauvao/24000+ "USD")
    }
    if (Select1 == "usd" && Select2 == "vn") {
        alert(dauvao*24000+ "VND")
    }
}
