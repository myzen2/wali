Template.catList.helpers({
	categories: function() {
		return Categories.find();
	}
});

Template.catList.events({
	"click .toggle-checked": function () {
		// Set the checked property to the opposite of its current value
		Categories.update(this._id, {$set: {checked: ! this.checked}});
	},
});
