if (Categories.find().count() === 0) {
	Categories.insert({
		title: 'Automobile',
	});
	Categories.insert({
		title: 'Vélo',
	});
	Categories.insert({
		title: 'Informatique',
	});
}
