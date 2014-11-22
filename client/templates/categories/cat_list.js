Template.catList.helpers({
	categories: function() {
		return Categories.find();
	}
});

Template.catList.events({
	"click .toggle-checked": function () {
		// Set the checked property to the opposite of its current value
		Categories.update(this._id, {$set: {checked: ! this.checked}});

		var jsonData = ''+
		'{"ApiKey": "544bf635-7f4c-4fb5-9fbe-88116a2dddd5",	'+
		'	"SearchRequest": {								'+
		'		"Keyword": "'+ this.title + '",				'+
		'		"SortBy": "relevance",						'+
		'		"Pagination": {								'+
		'			"ItemsPerPage": 5,						'+
		'			"PageNumber": 0							'+
		'		},											'+
		'		"Filters": {								'+
		'			"Price": {								'+
		'				"Min": 0,							'+
		'				"Max": 400							'+
		'			},										'+
		'			"Navigation": "computers",				'+
		'			"IncludeMarketPlace": false,			'+
		'			"Brands": [ "asus" ],					'+
		'			"Condition": null						'+
		'		}											'+
		'	}												'+
		'}													';
		console.log(this.title);
		$.ajax({
			type: "POST",
			url: "https://api.cdiscount.com/OpenApi/json/Search",
			data: jsonData
		}).done(function( msg ) {
			console.log(msg)
			$("#results").html(
				'<div class="product">'+
				'	<h3>'+msg.Products[0].Name+'</h3>'+
				'	<img src="'+msg.Products[0].MainImageUrl+'">'+
				'</div>'
			);
		});
	},
});
