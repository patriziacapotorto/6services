angular.module('app').controller('ItemsCtrl', function ($scope, Items) {

    $scope.Items = Items;

    $scope.$watch('nomeArma', function (nome) {
        $scope.risultato = Items.get(nome);
    });


});