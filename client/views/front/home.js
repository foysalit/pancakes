Template.cakes_plate.cakes = function () {
	return Client.Cakes.get();
};

Template.cakes_plate.events({
	'click .remove-cake': function (e) {
		e.preventDefault();
		var $el = jQuery(e.currentTarget);
		console.log($el);

		Client.Cakes.remove($el.data('id'));
	}
});