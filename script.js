// --------------------------------- \\
// -------- JavaScript Page -------- \\
// --------------------------------- \\


const el = document.querySelector(".el");
const display = document.querySelector(".display")
let s = 1;

el.addEventListener("click", () => {
    // el.classList.remove(`state-${s + 1}`);
    //   s = (s + 1) % 3;
    //   el.classList.add(`state-${s + 1}`);


    if (s===1) {
        display.classList.replace("colorbox", "colorbox-radial");
        s++;
        console.log(s);
        return;
    }

    if (s===2) {
        display.classList.replace("colorbox-radial", "colorbox");
        s--;
        console.log(s)
        return;
    }
    

    // display.classList.remove("colorbox");
    // display.classList.add("screen-black")

    // colorbox.classList.add("screen-white")
    // el.classList.replace("screen-white", "screen-black") ||
    // el.classList.replace("screen-black", "colors-one");

    console.log("clicked");

});



// const buttonOne = document.querySelector('.button-one');

// function switchColor() {

// }



// // buttonOne.classList.add('new-class');

// buttonOne.addEventListener('click', switchColor);