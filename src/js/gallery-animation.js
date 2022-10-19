const gallery = document.querySelector("#gallery");
       const galleryOffsetTop = gallery.offsetTop - 500;
       let isActive = false;
       window.addEventListener("scroll", (e)=> {
        if(isActive) return
        if(window.scrollY >= galleryOffsetTop) {
            const animatedBoxes =document.querySelectorAll(".box")
            animatedBoxes.forEach(el=>{
               el.classList.add("active")
            })
            isActive = true;
        }
       })
     