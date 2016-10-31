function MainController($scope){
  $scope.contact = {
    name: 'Jesse',
    email: 'jesse@jesse.com',
    phone: '123-123-4567'
  }
}

angular
  .module('app')
  .controller('MainController', MainController)