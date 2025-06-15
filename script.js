const products = [
  {
    title: "Wireless Earbuds",
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B09ZQ3LC1F?tag=abhisheksho0f-20"
  },
  {
    title: "Nike Running Shoes",
    image: "https://m.media-amazon.com/images/I/81IavvZtxxL._AC_UL1500_.jpg",
    link: "https://www.amazon.com/dp/B08F29Q4X4?tag=abhisheksho0f-20"
  },
  {
    title: "Smart Watch",
    image: "https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B07X2R9W7M?tag=abhisheksho0f-20"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  container.innerHTML += `
    <div class="product-card">
      <h3>${product.title}</h3>
      <img src="${product.image}" alt="${product.title}">
      <a href="${product.link}" target="_blank">Buy Now</a>
    </div>
  `;
});