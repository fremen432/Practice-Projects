if (typeof(Storage) !== "undefined") {
    localStorage.setItem("lastname", "Smith");
    document.querySelector("#result").innerHTML = 
    localStorage.getItem("lastname");
} else {
    document.querySelector("#result").innerHtml = "Sorry, your browser does not support Web Storage...";
    
}