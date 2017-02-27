angular.module('app').factory('Items', function () {
    //Businnes logic Here
    var index = 5;

    var dummyItem = {
        nome: 'Item #',
        descrizione: 'Praesent nec nisl a purus blandit viverra. Phasellus nec sem in justo pellentesque facilisis. Sed cursus turpis vitae tortor. Praesent blandit laoreet nibh. Cras ultricies mi eu turpis hendrerit fringilla.lhasellus ullamcorper ipsumore',
        image: 'http://www.placehold.it/800x600',
        slots: 2,
    }

    var armi = [{
        nome: 'Ascia',
        descrizione: 'L\’ascia bipenne è una scure a due lame, simbolo del potere minoico.',
        image: 'http://khazalidgrungron.altervista.org/axes/05.png',
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

    //Public API Here
    var list = function () {
        return armi;
    }

    var get = function (nome) {
        return armi.find((el) => el.nome === nome);
    }

    var add = function () {
        var copia = angular.copy(dummyItem);
        copia.id = index.toString();
        copia.nome += index;
        armi.push(copia);
        index++;
    };

    var remove = function (index) {
        armi.splice(index, 1);
    }

    return {
        list: list,
        add: add,
        get: get,
        remove: remove,
    };
});