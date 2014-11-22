if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "Automobile" },
      { text: "Electroménager" },
      { text: "Informatique" }
    ]
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
  });
}