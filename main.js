const h1 = document.querySelector("h1")

const breakTheText = () => {
    let h1Text = h1.textContent;
    let splittedText = h1Text.split("")

    let halfValue = splittedText.length / 2;

    let clutter = ""

    splittedText.forEach((el, index) => {
        if(index < halfValue) {
            clutter += `<span class="a">${el}</span>`
        } else {
             clutter += `<span class="b">${el}</span>`
        }
    })

    h1.innerHTML = clutter;
}

breakTheText()

gsap.from("h1 .a", {
    y: 50,
    stagger: 0.15,
    duration: 0.6,
    opacity: 0,
    delay: 0.5
})
gsap.from("h1 .b", {
    y: 50,
    stagger: -0.15,
    duration: 0.6,
    opacity: 0,
    delay: 0.5
})