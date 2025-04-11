const ham = document.getElementById("home");
const hamMenu = document.querySelector(".off-screen-menu");
const hamHome = document.querySelector("svg");
const ham2 = document.getElementById("home2")




hamMenu.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    hamHome.classList.remove("add-home");
    ham.style.display = "block";
    ham2.style.display = "none";
});




// Toggle Menu on Click
ham.addEventListener("click", () => {
  hamMenu.classList.add("active");
  hamHome.classList.add("add-home");
  ham.style.display = "none";
  ham2.style.display = "block";
});

ham2.addEventListener("click", () => {
  hamMenu.classList.remove("active");
  ham.style.display = "block";
  ham2.style.display = "none";
})


hamMenu.addEventListener("scroll", () => {
   
let lastScrollTop = 0;

window.addEventListener("scrollY", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down

        ham.style.display = "none"; // Hide element
        hamMenu.classList.remove("active")
        ham2.style.display = "none"; 

      
    } else {
        // Scrolling up
        ham.style.display = "none";
        ham2.style.display = "none";  // Show element
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
});

})


// let lastScrollTop = 0;

// window.addEventListener("scroll", function () {
//     let scrollTop = window.scrollY || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         // Scrolling down

//         console.log("Scrolling Up");
//         ham.style.display = "none"; // Hide element
//         hamMenu.classList.remove("active")
//         ham2.style.display = "none"; 

      
//     } else {
//         // Scrolling up
//         console.log("Scrolling Down");
//         ham.style.display = "block";
//         ham2.style.display = "none";  // Show element
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
// });

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".card").forEach((card, index) => {
//         const countLabel = card.querySelector(".countLabel");
//         const increaseBtn = card.querySelector(".increaseBtn");
//         const decreaseBtn = card.querySelector(".decreaseBtn");
//         const resetBtn = card.querySelector(".resetBtn");
//         // const viewCartBtn = document.createElement("button");
//         // viewCartBtn.textContent = "View Cart";
//         // viewCartBtn.classList.add("viewCartBtn");
//         // card.appendChild(viewCartBtn);
        
//         // Hide reset button initially
//         resetBtn.style.display = "none";
        
//         // Retrieve stored count from localStorage
//         let count = localStorage.getItem(`count_${index}`) || 0;
//         countLabel.textContent = count;

//         // Function to update localStorage
//         function updateStorage() {
//             localStorage.setItem(`count_${index}`, count);
//         }

//         // Increase button functionality
//         increaseBtn.addEventListener("click", () => {
//             count++;
//             countLabel.textContent = count;
//             updateStorage();
//         });

//         // Decrease button functionality
//         decreaseBtn.addEventListener("click", () => {
//             if (count > 0) {
//                 count--;
//                 countLabel.textContent = count;
//                 updateStorage();
//             }
//         });

//         // Reset button functionality
//         resetBtn.addEventListener("click", () => {
//             count = 0;
//             countLabel.textContent = count;
//             updateStorage();
//         });

//         // Redirect to cart page with selected items
        
//         });
//     });

