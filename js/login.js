import request from "./main.js";
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Avtorizatsiyani serverga so'rovgan qiling
    // Masalan, siz avtorizatsiyani o'z backend tizimingizda amalga oshirishingiz mumkin.

    // Agar avtorizatsiya muvaffaqiyatli bo'lsa, foydalanuvchini "category.html" sahifasiga yo'naltirish
    if (email === "foydalanuvchi_email" && password === "foydalanuvchi_parol") {
      window.location.href = "category.html";
    } else {
      // Agar avtorizatsiya xato bo'lsa, foydalanuvchiga xabarnoma chiqaring yoki yordam berish.
      alert("Email yoki parol noto'g'ri.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Avtorizatsiyani serverga so'rovgan qiling
    // Masalan, siz avtorizatsiyani o'z backend tizimingizda amalga oshirishingiz mumkin.

    // Agar avtorizatsiya muvaffaqiyatli bo'lsa, foydalanuvchini "category.html" sahifasiga yo'naltirish
    if (email === "foydalanuvchi_email" && password === "foydalanuvchi_parol") {
      // Foydalanuvchi muvaffaqiyatli avtorizatsiya bo'ldi, "category.html" sahifasini ochamiz
      window.location.href = "category.html";
    } else {
      // Agar avtorizatsiya xato bo'lsa, foydalanuvchiga xabarnoma chiqaring yoki yordam berish.
      alert("Email yoki parol noto'g'ri.");
    }
  });
});


