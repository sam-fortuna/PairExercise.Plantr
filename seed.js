const { db, Gardener, Plot, Vegetable } = require('./models');

// let veggie1 = Vegetable.create({
//   name: 'Beet',
//   color: 'red',
//   plantedon: Date.now()
// })

// let veggie2 = Vegetable.create({
//   name: 'Broccoli',
//   color: 'green',
//   plantedon: Date.now()
// })

// let gardener1 = Gardener.create({
//   name: 'Mr. Gardener',
//   age: 56
// });
// let gardener2 = Gardener.create({
//   name: 'Mrs. Gardener',
//   age: 46
// });
// let gardener3 = Gardener.create({
//   name: 'The Gardener',
//   age: 45
//});

db.sync({force: true})
.then(
  () => {
    return Vegetable.bulkCreate([
    { name: 'Beet', color: 'red', plantedon: Date.now(), id: 1 },
    { name: 'Broccoli', color: 'green', plantedon: Date.now(), id: 2}]
)})
.then(
  (veggies) => {
    console.log(veggies[0])
    return Gardener.create({
      name: 'Mr. Gardener',
      age: 56,
      favoriteVegetableId: veggies[0].id
    })
  })
.catch(
	err => {
    console.log(err)
		db.close()
	})
.finally(() => {
  db.close()
});
