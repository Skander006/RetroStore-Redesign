let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener("click",()=>{
    menu.classList.toggle("active");
});
console.log(burger);
console.log(menu);

let observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold : 0.2
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
