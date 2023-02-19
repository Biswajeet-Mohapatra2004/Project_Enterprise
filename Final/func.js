function Checklogin() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Pass").value;

    if (username === "mbiswajeet66@gmail.com" && password === "log123bm") {
        localStorage.setItem("USERNAME", username);
        localStorage.setItem("PASSWORD", password);
        window.location = "Dashboard.html";

    }
    else {
        alert("invalid username or password.");
    }
}


