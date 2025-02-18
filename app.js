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

// !SECTION

// SECTION drawing (DOM manipulation) ✏️

// !SECTION