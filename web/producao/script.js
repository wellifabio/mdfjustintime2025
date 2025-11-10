const api = "http://localhost:3000";
const usuario = JSON.parse(localStorage.getItem("usuario")) || null;

if (!usuario) {
    window.location.href = "../login";
}
