document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
  
    if (menuIcon) { // Check if menuIcon exists
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active'); // Toggle the 'active' class on the nav links
        });
    }
});

let products = null;
        // get datas from file json
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                products = data;
                addDataToHTML();
        })

        function addDataToHTML(){
    // remove datas default from HTML
        let listProductHTML = document.querySelector('.listProduct');

        // add new datas
        if(products != null) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('a');
                newProduct.href = '/detail.html?id=' + product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">ETB ${product.price}</div>`;
                listProductHTML.appendChild(newProduct);

            });
        }
    }

    window.addEventListener('scroll', () => {
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    document.getElementById('scrollToTopBtn').addEventListener('click', scrollToTop);