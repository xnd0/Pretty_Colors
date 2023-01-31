// --------------------------------- \\
// -------- JavaScript Page -------- \\
// --------------------------------- \\


const el = document.querySelector(".el");
const display = document.querySelector(".display")

let s = 1;

el.addEventListener("click", () => {

    if (s === 1) {
        display.classList.replace("colorbox", "colorbox-radial");
        s++;
        return;
    };

    if (s === 2) {
        display.classList.replace("colorbox-radial", "screen-black");
        s++;
        return;
    };

    if (s === 3) {
        display.classList.replace("screen-black", "screen-white");
        s++;
        return;
    };

    if (s === 4) {
        display.classList.replace("screen-white", "colorbox");
        s = 1;
        return;
    };

    console.log("clicked");

});
