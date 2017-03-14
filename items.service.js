angular.module('app').service('ItemsSrv',function(){
var n=0;
  var dummyItem = {
      nome: 'Item #',
      descrizione: 'Praesent nec nisl a purus blandit viverra. Phasellus nec sem in justo pellentesque facilisis. Sed cursus turpis vitae tortor. Praesent blandit laoreet nibh. Cras ultricies mi eu turpis hendrerit fringilla.lhasellus ullamcorper ipsumore',
      image: 'http://www.placehold.it/800x600',
      slots: 2,
  }

var armi = [{
      nome: 'Ascia',
      descrizione: 'L\’ascia bipenne è una scure a due lame, simbolo del potere minoico.',
      image: 'http://fabbriasciadoro.altervista.org/ArmiPap/Immagini/AsciaBipenne2.jpg',
      slots: 2
  }, {
      nome: 'Katana',
      descrizione: 'Arma inizialmente usata dai Samurai e successivamente evolutasi con le arti Ninja.',
      image: 'http://www.clker.com/cliparts/5/s/J/S/8/i/wakisashi-sword.svg',
      slots: 4
  }, {
      nome: 'Pugnale',
      descrizione: 'Arma da taglio usata unicamente per gli scontri ravvicinati. Può essere nascosta, in modo da cogliere di sorpresa il nemico.',
      image: 'http://www.dailyclipart.net/wp-content/uploads/medium/Pirates3.jpg',
      slots: 3
  }, {
      nome: 'Shuriken',
      descrizione: 'Arma esclusivamente da lancio. Grazie alla forma e alla struttura, raggiunge può raggiungere una velocità impressionante.',
      image: 'http://www.karatemart.com/images/products/large/tiny-typhoon-shuriken.jpg',
      slots: 1
  }];

     var getArmi = function(){
        return armi;
    }
    var addArmi = function(){
      var dummy = angular.copy(dummyItem);
      dummy.nome += n;
      armi.push(dummy);
      ++n;
    }

    var deleteArmi = function(indice){
      armi.splice(indice,1);
    }

   var cercaArma = function(nome){
     return armi.find(function(el){
       return (el.nome == nome);
     })
   }

//PUBLIC API
  return{
    //ritorna degli oggetti
    getArmi: getArmi,
    addArmi: addArmi,
    deleteArmi: deleteArmi,
    cercaArma: cercaArma
  }
});
