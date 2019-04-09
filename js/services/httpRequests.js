webDevApp.service('httpService', function($http) {

	var postFormData = function postFormData(url, formData){
		return $http({	
			method: 'post',
			url: url,
			data: formData,
			headers: {'Content-Type': 'application/json'}
		});
	}
	
	return({
		post: postFormData
	});
});