angular.module('app').controller('ItemsCtrl', function ($scope,ItemsSrv) {

    //1) SPOSTARE NEL SERVICE I SEGUENTI OGGETTI
    //2) CREARE NEL SERVICE I SEGUENTI METODI : LIST, GET, ADD, REMOVE

$scope.listaArmi = ItemsSrv.getArmi();//mette nella var listaArmi il risultato della funzione scritta nel service

 $scope.aggiungi = function(){
    ItemsSrv.addArmi();//evento associato al btn
   }

   $scope.elimina = function(indice){
      ItemsSrv.deleteArmi(indice);//evento associato al btn
     }


    //ricerca attiva
    $scope.$watch('nome',function(){
    $scope.armaTrovata = ItemsSrv.cercaArma($scope.nome);
    console.log($scope.armaTrovata);
    })

});
