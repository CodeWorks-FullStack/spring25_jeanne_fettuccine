// Primitive data types include strings, booleans, numbers, null, undefined

// NOTE reference data types


// ANCHOR objects {}

const jeremy = {
  name: 'Jeremy',
  age: 34,
  hasJob: true
}



const dog = {
  name: 'Dipper',
  breed: {
    isPurebred: false,
    name: 'Aussie Pit'
  }
}

// ANCHOR arrays []

const catNames = ['ramona', 'georgie', 'frankie', 'gopher']

const people = [
  {
    name: 'Mick',
    age: 75,
    hasJob: true,
    favoriteSnacks: [
      'doritos',
      'cheetos'
    ]
  },
  {
    name: 'Jake',
    age: 18,
    hasJob: false,
    favoriteSnacks: [
      'ramen',
      'cheese'
    ]
  },
  {
    name: 'Jeanne',
    age: Infinity,
    hasJob: true,
    favoriteSnacks: [
      'celery',
      'brussels sprouts'
    ]
  },

]

for (let i = 0; i < 100; i++) {
  // console.log(i);
}

// console.log(people[1].favoriteSnacks[0]);

for (let i = 0; i < people.length; i++) {
  const person = people[i]
  person.age
  console.log(person);
}




const x = 7
const y = 7

x == y // true

const cat1 = { name: 'pepper' }

const cat2 = { name: 'pepper' }

const cat3 = cat1

cat1.name = 'cheddars'
cat1.breed = 'dumb idiot'

// console.log('cat1', cat1);
// console.log('cat3', cat3);
