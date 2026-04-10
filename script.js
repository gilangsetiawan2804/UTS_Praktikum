// VALIDASI FORM
document.getElementById("formBeli").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let jumlah = document.getElementById("jumlah").value;

    let valid = true;

    document.getElementById("errorNama").innerText = "";
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("errorJumlah").innerText = "";

    if (nama === "") {
        document.getElementById("errorNama").innerText = "Nama wajib diisi";
        valid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("errorEmail").innerText = "Email tidak valid";
        valid = false;
    }

    if (jumlah <= 0) {
        document.getElementById("errorJumlah").innerText = "Jumlah harus lebih dari 0";
        valid = false;
    }

    if (valid) {
        alert("✅ Pembelian berhasil!");
        document.getElementById("formBeli").reset();
    }
});


// DATA DINAMIS
let data = ["The Psychology Of Money", "Atomic Habits", "Warren Buffet Mindset", "Is it Bad Or Good Habits"];

function tampilkan() {
    let list = document.getElementById("listItem");
    list.innerHTML = "";

    data.forEach((item, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button onclick="hapusItem(${index})">❌</button>
        `;

        list.appendChild(li);
    });
}

function tambahItem() {
    let input = document.getElementById("inputItem");
    if (input.value !== "") {
        data.push(input.value);
        input.value = "";
        tampilkan();
    }
}

function hapusItem(index) {
    data.splice(index, 1);
    tampilkan();
}

tampilkan();

let  = JSON.parse(localStorage.getItem("buku")) || [
    "Atomic Habits",
    "Filosofi Teras",
    "Laskar Pelangi",
    "Rich Dad Poor Dad"
];

// TAMPILKAN
function tampilkan(filter = "") {
    let list = document.getElementById("listItem");
    list.innerHTML = "";

    data
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach((item, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button onclick="hapusItem(${index})">❌</button>
        `;

        list.appendChild(li);
    });

    localStorage.setItem("buku", JSON.stringify(data));
}

// TAMBAH
function tambahItem() {
    let input = document.getElementById("inputItem");

    if (input.value !== "") {
        data.push(input.value);
        tampilkan();
        showToast("✅ Buku ditambahkan!");
        input.value = "";
    }
}

// HAPUS
function hapusItem(index) {
    data.splice(index, 1);
    tampilkan();
    showToast("❌ Buku dihapus!");
}

// SEARCH
function cariItem() {
    let keyword = document.getElementById("search").value;
    tampilkan(keyword);
}

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// TOAST NOTIF
function showToast(msg) {
    let toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 2000);
}

tampilkan();