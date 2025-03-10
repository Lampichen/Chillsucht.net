function updateLogoSize() {
    let cslo2 = document.getElementById("cslo-2"); // Logo 2 als Referenz
    let newWidth = cslo2.clientWidth * 0.25; // Aktuelle Breite von Logo 2 holen

    document.documentElement.style.setProperty("--cslo-1-width", newWidth + "px");
}

// Größe aktualisieren, wenn sich das Fenster ändert
window.addEventListener("resize", updateLogoSize);
updateLogoSize(); // Direkt beim Laden ausführen

