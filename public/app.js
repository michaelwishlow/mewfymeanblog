(function () {
		angular
				.module("mewfymeanblog", [])
				.controller("BlogController", BlogController);

	function BlogController($scope, $http) {
			$scope.createPost = createPost;

			function createPost(post){
					console.log(post);
					$http.post("/api/blogpost", post);
			}

	}
}) ();