(function () {
		angular
				.module("mewfymeanblog", [])
				.controller("BlogController", BlogController);

	function BlogController($scope) {
			$scope.createPost = createPost;

			function createPost(post){
					console.log("createPost!");
			}

	}
}) ();