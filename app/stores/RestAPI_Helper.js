let $ = require('jquery');

module.exports = {
	get(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				dataType:"json",
				success,
				error
			});
		});
	},
	del(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				type:'DELETE',
				success,
				error
			})
		})
	},
	post(url,data){
		console.log('data in rst api', data);
		return new Promise(function(success,error){
			$.ajax({
				url,
				type:'POST',
				data,
				dataType: "text",
				success,
				error
			})
		})
	},
	put(url,data){
		return new Promise(function(success,error){
			$.ajax({
				url,
				type:'PUT',
				data,
				success,
				error
			})
		})
	}
}
