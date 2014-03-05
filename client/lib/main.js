Deps.autorun(function(){
	Meteor.subscribe('cakes');
});
//var CakesCollection = new Meteor.Collection("cakes");

Client = {};

Client.Cakes = {
	Collection: new Meteor.Collection("cakes"),

	insertRules: {
		'cake' : {
			required: true,
			url: true
		}
	},

	insert: function ($form) {
		$form.validate({
			rules: this.insertRules
		});

		if(!$form.valid()) return;

		var cake = $form.find('#cake').val(),
			title = $form.find('#title').val();

		var insert = this.Collection.insert({title: title, cake: cake});
		return insert || false;
	},

	get: function (total) {
		var opts = {};

		if(typeof total === 'number'){
			opts.limit = total; 
		}

		return this.Collection.find({}, opts).fetch();
	},

	remove: function (id) {
		if(typeof id === 'string')
			this.Collection.remove(id);
	}
};
