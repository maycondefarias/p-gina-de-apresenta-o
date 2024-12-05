// Lista de produtos
const products = [
    { id: 1, name: "Celular", price: 1507.99, image: "assets/produto1.jpg" },
    { id: 2, name: "Videogame", price: 4497.99, image: "assets/produto2.jpg" },
    { id: 3, name: "Tênis", price: 497.99, image: "assets/produto3.jpg" },
    { id: 4, name: "Camiseta", price: 29.97, image: "assets/produto4.jpg" },
    { id: 5, name: "Notebook", price: 3500.00, image: "assets/produto5.jpg" },
    { id: 6, name: "Fone de Ouvido", price: 199.99, image: "assets/produto6.jpg" },
    { id: 7, name: "Relógio", price: 299.99, image: "assets/produto7.jpg" },
    { id: 8, name: "Mochila", price: 99.99, image: "assets/produto8.jpg" },
  ];
  
  let cart = [];
  
  // Exibir produtos
  function displayProducts(filteredProducts = products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
    filteredProducts.forEach(product => {
      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h2>${product.name}</h2>
          <p>R$${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>
      `;
    });
  }
  
  // Adicionar ao carrinho
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} foi adicionado ao carrinho!`);
  }
  
  // Buscar produtos
  function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
  }
  
  // Inicializar
  displayProducts();
  