const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    console.log("clicked");
  mobileMenu.classList.toggle("max-h-0");
  mobileMenu.classList.toggle("max-h-60"); // จะขยายสูงสุดเป็น 60px
  
});

 const images = [
    "https://plus.unsplash.com/premium_photo-1661506817223-e773bb0bb63f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1630527586722-8a6c8fa96994?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxmbG93ZXIlMjBmYXJtfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1663050970428-61fdaed2a6ee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxmbG93ZXIlMjBmYXJtfGVufDB8fDB8fHww"
  ];

let currentIndex = 0;
const imgElement= document.getElementById("carousel-image");
const indicators = document.querySelectorAll("[data-index]");

function showImage(index) {
    imgElement.src = images[index];
    indicators.forEach((btn,i)=>{
        btn.classList.toggle("bg-blue-600", i === index);
        btn.classList.toggle("bg-gray-300", i !== index);
    })
}

indicators.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        currentIndex = i;
        showImage(i);
    });
});

//auto play 
setInterval(()=>{
    currentIndex= (currentIndex +1)%images.length;
    showImage(currentIndex);
},4000);

showImage(currentIndex);



// scroll to top
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 500){
        scrollBtn.classList.remove("hidden");
    }else{
        scrollBtn.classList.add("hidden");
    }
});

scrollBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

