const gallery = document.querySelector("#gallery");
       const galleryOffsetTop = gallery.offsetTop - 400;
       let isActive = false;
       window.addEventListener("scroll", (e)=> {
        console.log(window.scrollY)
        if(isActive) return
        if(window.scrollY >= galleryOffsetTop) {
            console.log("jestem")
            const animatedBoxes =document.querySelectorAll(".box")
            animatedBoxes.forEach(el=>{
               el.classList.add("active")
            })
            isActive = true;
        }
       })
       console.log(gallery.offsetTop)