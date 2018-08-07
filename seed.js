const { db, Gardener, Plot, Vegetable } = require('./models');
const PlotVegetable = db.model('vegetable_plot')

// elsewhere


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
    return Vegetable.create(
    { name: 'Beet', color: 'red', plantedon: Date.now() },
)} )
.then(
  (veggies) => {
    console.log(veggies)
    return Gardener.create({
      name: 'Mr. Gardener',
      age: 56,
      favoriteVegetableId: veggies.id
    })
  } )
.then( (gardener) => {
  console.log(gardener)
  return Plot.create({
    size: 376,
    shaded: true,
    gardenerId: gardener.id
  })
.then( (plot) => {
  return PlotVegetable.create({
    plotId: plot.id,
    vegetableId: gardener.favoriteVegetableId

  })
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
