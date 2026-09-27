/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu when link is clicked */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});


/* Load saved theme */

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    const icon = themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}


/* ================= CART ================= */

let cartCount = 0;

const cartCounter = document.getElementById("cartCount");

const toast = document.getElementById("toast");


document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCounter.textContent = cartCount;

        showToast("Added to cart!");

    });

});


/* ================= TOAST ================= */

function showToast(message) {

    toast.querySelector("span").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

}


/* ================= WISHLIST ================= */

document.querySelectorAll(".wishlist").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            showToast("Added to wishlist ❤️");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            showToast("Removed from wishlist");

        }

    });

});


/* ================= PRODUCT SEARCH ================= */

const searchInput = document.getElementById("searchInput");

const productCards = document.querySelectorAll(".product-card");

const noProducts = document.getElementById("noProducts");


searchInput.addEventListener("input", () => {

    const searchValue = searchInput.value.toLowerCase().trim();

    let foundProducts = 0;

    productCards.forEach(card => {

        const productName =
            card.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {

            card.style.display = "";

            foundProducts++;

        } else {

            card.style.display = "none";

        }

    });


    if (foundProducts === 0) {

        noProducts.style.display = "block";

    } else {

        noProducts.style.display = "none";

    }

});


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email) {

        showToast("Thank you for subscribing! ✨");

        newsletterForm.reset();

    }

});


/* ================= SCROLL ANIMATION ================= */

const cards =
    document.querySelectorAll(
        ".category-card, .product-card, .about-image, .about-content"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});