function toggleBox(box) {
    const content = box.querySelector(".content");
    const arrow = box.querySelector(".arrow");
    const titl = box.querySelector(".titl");

    if (content.style.display === "block") {
        content.style.display = "none";
        box.style.boxShadow = "0 0 20px #fff, 0 0 10px #ff0000, 0 0 10px red";
        arrow.innerHTML = "►";
        titl.style = "text-shadow: 0 0 20px #fff, 0 0 10px  #ff0000, 0 0 10px red"
        arrow.style = "text-shadow: 0 0 20px #fff, 0 0 10px  #ff0000, 0 0 10px red"
    } else {
        document.querySelectorAll(".content").forEach(c => c.style.display = "none");
        document.querySelectorAll(".box").forEach(b => b.style.boxShadow = "0 0 20px #fff, 0 0 10px #ff0000, 0 0 10px red");
        
        content.style.display = "block";
        box.style.boxShadow = "0 0 20px #fff, 0 0 10px aqua, 0 0 15px #0145ff";
        titl.style = "text-shadow: 0 0 10px #fff, 0 0 10px aqua, 0 0 15px #0145ff"
        arrow.style = "text-shadow: 0 0 10px #fff, 0 0 10px aqua, 0 0 15px #0145ff"
        arrow.innerHTML = "▲";
    }
}
