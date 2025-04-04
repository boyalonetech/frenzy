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


let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down

        console.log("Scrolling Up");
        ham.style.display = "none"; // Hide element
        hamMenu.classList.remove("active")
        ham2.style.display = "none"; 

      
    } else {
        // Scrolling up
        console.log("Scrolling Down");
        ham.style.display = "block";
        ham2.style.display = "none";  // Show element
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach((card, index) => {
        const countLabel = card.querySelector(".countLabel");
        const increaseBtn = card.querySelector(".increaseBtn");
        const decreaseBtn = card.querySelector(".decreaseBtn");
        const resetBtn = card.querySelector(".resetBtn");
        // const viewCartBtn = document.createElement("button");
        // viewCartBtn.textContent = "View Cart";
        // viewCartBtn.classList.add("viewCartBtn");
        // card.appendChild(viewCartBtn);
        
        // Hide reset button initially
        resetBtn.style.display = "none";
        
        // Retrieve stored count from localStorage
        let count = localStorage.getItem(`count_${index}`) || 0;
        countLabel.textContent = count;

        // Function to update localStorage
        function updateStorage() {
            localStorage.setItem(`count_${index}`, count);
        }

        // Increase button functionality
        increaseBtn.addEventListener("click", () => {
            count++;
            countLabel.textContent = count;
            updateStorage();
        });

        // Decrease button functionality
        decreaseBtn.addEventListener("click", () => {
            if (count > 0) {
                count--;
                countLabel.textContent = count;
                updateStorage();
            }
        });

        // Reset button functionality
        resetBtn.addEventListener("click", () => {
            count = 0;
            countLabel.textContent = count;
            updateStorage();
        });

        // Redirect to cart page with selected items
        
        });
    });


// Add this to your main.js file or create a new one

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productCards = document.querySelectorAll('.shop-cards .card');
    
    // Function to filter products based on search input
    function filterProducts() {
      const searchTerm = searchInput.value.toLowerCase();
      
      productCards.forEach(card => {
        const productName = card.querySelector('.detail-tag p').textContent.toLowerCase();
        const productDescription = card.querySelector('.detail-tag h2').textContent.toLowerCase();
        
        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    
    // Event listeners for search
    searchButton.addEventListener('click', filterProducts);
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        filterProducts();
      }
    });
    
    // Optional: Clear search and show all products when input is empty
    searchInput.addEventListener('input', function() {
      if (this.value === '') {
        productCards.forEach(card => {
          card.style.display = 'block';
        });
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const productCards = document.querySelectorAll('.shop-cards .card');
    const shopContainer = document.querySelector('.shop-items');
    
    // Create a no results message element
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No products found matching your search.';
    shopContainer.appendChild(noResults);
    
    function highlightText(element, searchTerm) {
      const text = element.textContent;
      const regex = new RegExp(searchTerm, 'gi');
      const highlightedText = text.replace(regex, match => `<span class="highlight">${match}</span>`);
      element.innerHTML = highlightedText;
    }
    
    function removeHighlights() {
      document.querySelectorAll('.highlight').forEach(highlight => {
        const parent = highlight.parentNode;
        parent.textContent = parent.textContent;
      });
    }
    
    function filterProducts() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      let hasResults = false;
      
      removeHighlights();
      
      if (searchTerm === '') {
        productCards.forEach(card => {
          card.style.display = 'block';
        });
        noResults.style.display = 'none';
        return;
      }
      
      productCards.forEach(card => {
        const productName = card.querySelector('.detail-tag p');
        const productPrice = card.querySelector('.detail-tag h2');
        const nameText = productName.textContent.toLowerCase();
        const priceText = productPrice.textContent.toLowerCase();
        
        if (nameText.includes(searchTerm) || priceText.includes(searchTerm)) {
          card.style.display = 'block';
          hasResults = true;
          
          // Highlight matching text
          if (nameText.includes(searchTerm)) {
            highlightText(productName, searchTerm);
          }
          if (priceText.includes(searchTerm)) {
            highlightText(productPrice, searchTerm);
          }
        } else {
          card.style.display = 'none';
        }
      });
      
      noResults.style.display = hasResults ? 'none' : 'block';
    }
    
    searchButton.addEventListener('click', filterProducts);
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        filterProducts();
      }
    });
  });