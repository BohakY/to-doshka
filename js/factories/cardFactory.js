angular.module('app').factory('cardFactory', function () {
  var service = {};

  var cards = [
    {
      id: 1,
      description: 'Англійська. Виконати Unit7-8',
      list_id: 1
    },
    {
      id: 2,
      description: 'Зробити проект To-doshka на AngularJS',
      list_id: 2
    },
    {
      id: 3,
      description: 'Learn AngularJS',
      list_id: 2 
    }
  ];

  service.getCards = function (list) {
    return _.filter(cards, { list_id: list.id }); //повертає всі картки в яких list_id такий який передається на вході
  };

  service.createCard = function (list, cardDescription) {
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    });
  };

  service.deleteCard = function (card) {
    return _.pull(cards, card); // видаляє обєкт з масиву
  };

  service.updateCard = function (updatingCard) {
    var card = _.findWhere(cards, { id: updatingCard.id });
    card.description = updatingCard.description;
    card.list_id = updatingCard.list_id;
  };

  return service;
});
