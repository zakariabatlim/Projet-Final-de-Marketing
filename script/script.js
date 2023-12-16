// Assuming you have an array of objects for each category, including prices and quantities
const categoryData = {
    "chaussures du sport": [
      { name: "Nike Shoes 1", price: 49.99, quantity: 0 },
      { name: "Nike Shoes 2", price: 59.99, quantity: 0 },
      { name: "Nike Shoes 3", price: 69.99, quantity: 0 }
    ]
  };
  
  // Function to add prices and quantity functionality to the categories
  function addPricesAndQuantityToCategories() {
    const categoryContainers = document.querySelectorAll('.categories .col-3');
  
    categoryContainers.forEach((container, index) => {
      const category = container.parentElement.previousElementSibling.textContent.trim();
      const item = categoryData[category][index];
  
      const priceElement = document.createElement('p');
      priceElement.textContent = `$${item.price.toFixed(2)}`;
  
      const quantityElement = document.createElement('div');
      quantityElement.classList.add('quantity');
  
      const decreaseButton = document.createElement('button');
      decreaseButton.textContent = '-';
      decreaseButton.addEventListener('click', () => decreaseQuantity(item));
  
      const quantityValue = document.createElement('span');
      quantityValue.textContent = item.quantity;
  

      const increaseButton = document.createElement('button');
      increaseButton.textContent = '+';
      increaseButton.addEventListener('click', () => increaseQuantity(item));
  
      quantityElement.appendChild(decreaseButton);
      quantityElement.appendChild(quantityValue);
      quantityElement.appendChild(increaseButton);
  
      container.appendChild(priceElement);
      container.appendChild(quantityElement);
    });
  }
  
  // Function to decrease the quantity of an item
  function decreaseQuantity(item) {
    if (item.quantity > 0) {
      item.quantity--;
      updateQuantity(item);
    }
  }
  
  // Function to increase the quantity of an item
  function increaseQuantity(item) {
    item.quantity++;
    updateQuantity(item);
  }
  
  // Function to update the displayed quantity for an item
  function updateQuantity(item) {
    const quantityValue = document.querySelector(`.categories .col-3:contains(${item.name}) .quantity span`);
    quantityValue.textContent = item.quantity;
  }
  
  // Call the function to add prices and quantity functionality to the categories
  addPricesAndQuantityToCategories();