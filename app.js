// SECTION global variables 🧠

const menuItems = [
  {
    name: 'spaghetti',
    price: 7,
    quantity: 0
  },
  {
    name: 'fettuccine',
    price: 30.99,
    quantity: 0
  },
  {
    name: 'chips and salsa',
    price: 1.99,
    quantity: 0
  },
  {
    name: 'quesadilla',
    price: 15.99,
    quantity: 0
  },
]

// !SECTION

// SECTION actions / logic ⚙️

// NOTE good starting point, but replaced by addItemToCart
function addSpaghettiToCart() {
  const spaghetti = menuItems[0]
  spaghetti.quantity++
  console.log('you clicked the button', spaghetti);
}

// NOTE good starting point, but replaced by addItemToCart
function addFettuccineToCart() {
  const fettuccine = menuItems[1]
  fettuccine.quantity++
}

// NOTE make sure you supply an argument when you call this function
function addItemToCart(indexNumber) {
  const menuItem = menuItems[indexNumber]

  if (menuItem == undefined) {
    console.warn(`${indexNumber} is not a valid index`)
    return // hard stop
  }

  menuItem.quantity++

  drawCart()
  drawCartTotal()
}

function calculateCartTotal() {
  let total = 0

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    total += menuItem.price * menuItem.quantity
  }

  // NOTE other pieces of our javascript application can use `total` by invoking this function and saving the result to a variable
  return total
}

function checkout() {
  // NOTE this only works because calculateCartTotal `returns` a value
  const cartTotal = calculateCartTotal()

  if (cartTotal == 0) {
    window.alert("Hey add some stuff to your cart")
    return // hard stop
  }

  // NOTE opens a window in the browser tab with our supplied argument as the text content
  window.alert(`Enjoy your order! Your total was $${cartTotal.toFixed(2)}!`)

  clearCart()
  drawCart()
  drawCartTotal()
}

function clearCart() {
  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    menuItem.quantity = 0
  }
}

// !SECTION

// SECTION drawing (DOM manipulation) ✏️

function drawCart() {

  // NOTE placeholder to add to later
  let menuListItems = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    if (menuItem.quantity > 0) {
      // NOTE we can generate HTML using values from each object in our array
      menuListItems += `<li>${menuItem.name} Qty: ${menuItem.quantity} $${menuItem.quantity * menuItem.price}</li>`
    }
  }

  const cartListElem = document.getElementById('cartList')
  // NOTE if we use innerHTML here, it will interpret our string as actual HTML and render it accordingly
  cartListElem.innerHTML = menuListItems
}

function drawCartTotal() {
  const cartTotalElem = document.getElementById('cartTotal')

  // NOTE this only works because calculateCartTotal `returns` a value
  const cartTotal = calculateCartTotal()

  // NOTE toFixed is a number method that converts a number to a string and returns it. It also takes in an argument that show will how many decimal places to include (if the number is 7, it returns '7.00' | if the number is 7.888888888 it returns '7.89')
  cartTotalElem.innerText = cartTotal.toFixed(2)
}
// !SECTION