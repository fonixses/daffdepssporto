const tombolTema = document.getElementById("tombol-tema");

// Mengecek tema yang terakhir dipilih
if (localStorage.getItem("tema") === "gelap") {
    document.body.classList.add("tema-gelap");
}

// Mengganti tema saat tombol ditekan
tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-gelap");

    if (document.body.classList.contains("tema-gelap")) {
        localStorage.setItem("tema", "gelap");
    } else {
        localStorage.setItem("tema", "terang");
    }
});
