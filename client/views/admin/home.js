Template.back_home.hi = function () {
	return 'hi there';
};

Template.add_cake_form.events({
	"submit form": function (e) {
		e.preventDefault();

		Client.Cakes.insert(jQuery(e.currentTarget));
	}
});