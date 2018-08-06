const db = require('/models');

const sync = db.sync({force: true})
.then(() => { 
	db.close()
})
.catch(
	err => {
		console.log(err)
		db.close()
	});

