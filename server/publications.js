var Cakes = new Meteor.Collection("cakes");

Meteor.publish('cakes', function () {
	return Cakes.find();
});