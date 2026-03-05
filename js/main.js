document.addEventListener("DOMContentLoaded", () => {
    // Logika Slider About Section
    const slider = document.getElementById("about-slider");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    if (slider && btnPrev && btnNext) {
        btnNext.addEventListener("click", () => {
            slider.style.transform = "translateX(-50%)"; 
            
            btnNext.classList.remove("border-white", "text-white", "hover:bg-white", "hover:text-primary", "hover:scale-110");
            btnNext.classList.add("border-slate-500", "text-slate-500", "opacity-50", "cursor-not-allowed");
            
            btnPrev.classList.remove("border-slate-500", "text-slate-500", "opacity-50", "cursor-not-allowed");
            btnPrev.classList.add("border-white", "text-white", "hover:bg-white", "hover:text-primary", "hover:scale-110");
        });

        btnPrev.addEventListener("click", () => {
            slider.style.transform = "translateX(0%)"; 
            
            btnPrev.classList.remove("border-white", "text-white", "hover:bg-white", "hover:text-primary", "hover:scale-110");
            btnPrev.classList.add("border-slate-500", "text-slate-500", "opacity-50", "cursor-not-allowed");
            
            btnNext.classList.remove("border-slate-500", "text-slate-500", "opacity-50", "cursor-not-allowed");
            btnNext.classList.add("border-white", "text-white", "hover:bg-white", "hover:text-primary", "hover:scale-110");
        });
    }
});