# ES6 Syntax / feature sheet

## Resources
[Compat-table for ES6](https://kangax.github.io/compat-table/es6)


### Fat arrow
Variations of fat arrow
```javascript
const getPrice = () => 6;
console.log(getPrice());

const getPrice = count => count * 6;
console.log(getPrice());

const getPrice = (count, tax) => count * 6 * (1 + tax);
console.log(getPrice());

const getPrice = (count, tax) => {
  let total = count * 6;
  total *= (1 + tax);
  return total;
}
console.log(getPrice());
```

This keyword, dont have to bind anymore. Can change this with bind, apply or call.

### forEach

```javascript
var numbers = [1,2,3,4,5];
var sum = 0;

numbers.forEach(function(number){
  sum += number;
});
console.log(sum);

//Same thing calling additional function
function adder(number){
  sum += number;
}
numbers.forEach(adder);

console.log(sum);
```

### Map helper

```javascript
var numbers = [1,2,3];

var doubled = numbers.map(function(number){
  return number*2;
});
console.log(doubled);
```

### Filter helper

```javascript
var products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' },
]

var filterProd = products.filter(function(product){
  return product.type === 'vegetable';
});
console.log(filterProd);
```


### Find helper

```javascript
var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user = users.find(function(user){
    return user.name === 'Alex';
});
console.log(user);
```

### Every and Some helpers

```javascript
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];
var compAll = computers.every(function(computer){
  return computer.ram > 16;
});

var compSum = computers.some(function(computer){
  return computer.ram > 16;
});
console.log(compAll);
console.log(compSum);
```

### Reduce helpers

```javascript
var numbers = [ 10, 20 , 30];

var sum = numbers.reduce(function(sum, number){
  return sum + number;
}, 0);

numbers.reduce(function(initValue, number){
  return initValue + number;
}, initValue);

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

var primeColor = primaryColors.reduce(function(previous, primaryColor){
  return previous.push(primaryColor.color)
} []);
console.log(primeColor);


function balancedParens(string){
  return !string.split("").reduce(function(previous, char){
    if(previous < 0){ return previous; }
    if(char === "("){ return ++previous; }
    if(char === ")"){ return --previous; }
    return previous;
  }, 0);
}
console.log(balancedParens

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var totalDistance = trips.reduce((previous, trip) => { return previous + trip.distance; }, 0 );

var numbers = [1, 1, 2, 3, 4, 4];
function unique(array) {
  return array.reduce((previous, item) => {
    if( !previous.find( prev => prev === item)) previous.push(item);
    return previous;
  },[]);
}
```


### Rest and Spread Operator

```javascript
const defaultColors = ['red', 'green'];
const userFavoriteColors =['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

defaultColors.concat(userFavoriteColors);

['blue', 'green', ...defaultColors, ...userFavoriteColors, ...fallColors];

const showColors = (fallColor, ...colors) => console.log(colors);
showColors( 'blue', 'red', 'pink');

const prices = [12, 20, 18];
const maxP = Math.max(...prices);
console.log(maxP);

const letters = [ 'A', ...'BCD', 'E'];
console.log(letters);
```

### Destructuring

```javascript
const companies = [
  { name: 'Google', location: 'Montain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

const [{location}] = companies;
console.log(location);

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

const { locations: [ location ] } = Google;
console.log(location);


const points = [
  [4,5],
  [10,1],
  [0,40]
];
// wanted output ...
[
  {x:  4, y:  5 },
  {x: 10, y:  1 },
  {x:  0, y: 40 },
]
//map, destructor and mirror {x:x,y:y}
points.map(([x, y]) => {
  return { x, y };
});

// return as [{ subject: 'chemistry', time:'9AM', teacher: 'Darnick'},
//            { subject: 'chemistry', time:'9AM', teacher: 'Darnick'},
//            { subject: 'chemistry', time:'9AM', teacher: 'Darnick'},
//           ];

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([subject,time,teacher]) => {
    return {subject,time,teacher};
});


// awesome solution to destructor, recursion and multiply
const numbers = [1, 2, 3];

function double(numbers) {
   const [number, ...rest] = numbers;
    if(number === undefined){
        return [];
    }
    return [number*2,...double(rest)];    
}


```

### Extensions

... coming soon ... / Lazy
. Object
. string
. number
. Math
. RegExp
```javascript
const pattern = /\u{1f3c4}/u;
console.log(pattern.test('🏄'));
```
. Function


### iterator

```javascript

```

### Generators

```javascript
function* shopping(){
  const stuffFromStore = yield 'cash';
  const cleanClothes = yield 'laundery';

  return stuffFromStore;
}

const gen = shopping();
gen.next();
gen.next('groceries');
gen.next('clean clothes');


function* colors(){
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
for(let color of colors()){
  myColors.push(color);
}
//generator play nice with for of loops, no gen.next() needed
console.log(myColors);

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team){
  yield team.lead;
  yield team.tester;
}

const names = [];
for(let name of TeamIterator(engineeringTeam)){
  names.push(name);
}

// rewrite -----------------
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* (){
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for(let name of engineeringTeam){
  names.push(name);
}
```

#### When to use Generators

```javascript
THO SHALL NOT PASS

```

### Promises and Fetch

Promise -> unresolved(waiting) -> resolved(success) -> rejected(error)

resolve -> then
rejected -> catch

```javascript
promise = new Promise((resolve, reject) =>{
  setTimeOut(() => {resolve();}, 3000);
});
promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log("also ran"))
  .catch(() => console.log("got rejected"));
```

### Fetch
_handleCommentSubmit(comment)
```javascript
url = 'https://jsonplaceholder.typicode.com/posts/';
fetch(this.props.url, {
    method: 'POST',
    body. JSON.stringify(comment)
})
  .then(response => response.json() )
  .then( data => {
    this.setState({ comments: resJson})
  })
  .catch((ex) => {
    console.error(this.props.url,ex);
  })
```

### Sleep function
```javascript
const sleep = (delay = 0) => (
    new Promise(resolve => {
        setTimeout(resolve, delay)
    })
);

sleep(3000)
.then(() => getUniqueCommmentAuthors())
.then(uniqueAuthors=>{this.setState({uniqueAuthors})
})

```

### Read file node
```javascript
const readFile = (filePath) => (
    new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) { reject(err)}
            resolve(data)
        })
    })
)
readFile('path/to/file')
.then(data => console.log('here is the data', data))
catch(ex => console.error('Arg!', ex))

Promise.all([
    fetchComments(),
    fetchPosts(),
    fetchUsers(),
])
.then(responses => {
    let [comments, posts, users] = responses;

    this.setState({
        comments,
        posts,
        users
    })
})
```

### Async control flow
```javascript
async _handleCommentSubmit(commit) {
    //init
    try {
        let res = await fetch(this.props.url, {
            method: 'POST',
            body: JSON.stringify(comment)
        })
        newComments = await res.json();
    } catch (ex) {
        console.error(this.props.url, ex)
        newComments = comments;
    }
    this.setState({ comments: newComments})
}

const funWithAsync = async () => {
    let uniqueAuthors = await getUniqueCommentAuthors()

    await sleep(1500)

    let packageInfo = JSON.parse(await readFile('./package.json'));

    await sleep(3000)

    let [comments, posts, users] = await Promise.all([
        fetchComments(),
        fetchPosts(),
        fetchUsers(),
    ])

    return 42;
}
```
https://github.com/benmvp/react-esnext
