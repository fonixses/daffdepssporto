const tombolTema = document.getElementById("tombol-tema");

function perbaruiTombolTema() {
    const temaGelapAktif = document.body.classList.contains("tema-gelap");

    tombolTema.setAttribute("aria-pressed", temaGelapAktif);
    tombolTema.setAttribute(
        "aria-label",
        temaGelapAktif ? "Aktifkan tema terang" : "Aktifkan tema gelap"
    );
    tombolTema.title = temaGelapAktif ? "Aktifkan tema terang" : "Aktifkan tema gelap";
}

// Gunakan pilihan tersimpan, lalu ikuti tema perangkat jika belum pernah dipilih.
const temaTersimpan = localStorage.getItem("tema");
const perangkatMemakaiTemaGelap = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (temaTersimpan === "gelap" || (!temaTersimpan && perangkatMemakaiTemaGelap)) {
    document.body.classList.add("tema-gelap");
}

perbaruiTombolTema();

tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("tema-gelap");

    const temaGelapAktif = document.body.classList.contains("tema-gelap");
    localStorage.setItem("tema", temaGelapAktif ? "gelap" : "terang");
    perbaruiTombolTema();
});
