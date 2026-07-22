// =========================================================================
// DATA SERTIFIKAT (PATOKAN UNTUK MENAMBAH FOTO/SERTIFIKAT BARU)
// =========================================================================
// Untuk menambah sertifikat baru:
// Cukup tambahkan objek baru di dalam array `certificates` di bawah ini.

const certificates = [
    {
        title: "RevoU Mini Course - Data Analytics (DAMC)",
        file: "DAMC-REVOU-mini-course.svg"
    },
    {
        title: "IDN Network - Cyber Security Dasar",
        file: "IDN-Cyber-Security-Dasar.svg"
    },
    {
        title: "IDN Network - Jaringan Komputer Dasar",
        file: "IDN-jaringan-komputer-dasar.svg"
    }

    // 💡 PATOKAN CONTOH CARA MENAMBAH SERTIFIKAT KE-4 KELAK:
    // ,{
    //     title: "Judul Sertifikat Baru Anda",
    //     file: "nama-file-sertifikat-baru.svg"
    // }
];

// =========================================================================
// LOGIKA TAMPILAN & POPUP (TIDAK PERLU DIUBAH-UBAH)
// =========================================================================

document.addEventListener("DOMContentLoaded", function() {
    renderCertificates();
});

function renderCertificates() {
    const certListContainer = document.getElementById("certificate-list");
    certListContainer.innerHTML = "";

    certificates.forEach((cert) => {
        const certItem = document.createElement("div");
        certItem.className = "cert-item";
        certItem.setAttribute("onclick", `openModal('${cert.title}', '${cert.file}')`);

        certItem.innerHTML = `
            <div class="cert-info">
                <i class="fa-solid fa-file-certificate"></i>
                <span class="cert-name">${cert.title}</span>
            </div>
            <span class="cert-badge">Lihat Foto <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        `;

        certListContainer.appendChild(certItem);
    });
}

function openModal(title, fileName) {
    const modal = document.getElementById("certModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalImg = document.getElementById("modalImg");

    modalTitle.textContent = title;
    modalImg.src = fileName; 

    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("certModal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("certModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

