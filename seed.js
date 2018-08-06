const db = require('./models');

let veggie1 = Vegetable.create({
  name: 'Beet',
  color: 'red',
  plantedon: '2018-04-24'
})

let gardener1 = Gardener.create({
  name: 'Mr. Gardener',
  age: 56
});
let gardener2 = Gardener.create({
  name: 'Mrs. Gardener',
  age: 46
});
let gardener3 = Gardener.create({
  name: 'The Gardener',
  age: 45
});

let gardeners = Promise.all([gardener1, gardener2, gardener3]);


const sync = db.sync({force: true})
.then(() => {
  db.close()
})
.catch(
	err => {
		console.log(err)
		db.close()
	});

