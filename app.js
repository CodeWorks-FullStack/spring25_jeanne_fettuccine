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

function addSpaghettiToCart() {
  const spaghetti = menuItems[0]
  spaghetti.quantity++
  console.log('you clicked the button', spaghetti);
}

function addFettuccineToCart() {
  const fettuccine = menuItems[1]
  fettuccine.quantity++
}

function addItemToCart(indexNumber) {
  const menuItem = menuItems[indexNumber]

  if (menuItem == undefined) {
    console.warn(`${indexNumber} is not a valid index`)
    return // hard stop
  }

  menuItem.quantity++

  drawCart()
}

function calculateCartTotal() {
  let total = 0

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    total += menuItem.price * menuItem.quantity
  }

  return total
}

// !SECTION

// SECTION drawing (DOM manipulation) ✏️

function drawCart() {

  let itemNames = ''

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i]
    if (menuItem.quantity > 0) {
      itemNames += `<li>${menuItem.name} Qty: ${menuItem.quantity} $${menuItem.quantity * menuItem.price}</li>`
    }
  }

  const cartListElem = document.getElementById('cartList')
  cartListElem.innerHTML = itemNames
}
// !SECTION