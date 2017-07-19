angular.module('app').factory('listFactory', function () {
  var service = {};

  var lists = [
    {
      id: 1,
      listName: 'Todo'
    },
    {
      id: 2,
      listName: 'Doing'
    },
    {
      id: 3,
      listName: 'Done'
    }
  ];

  service.getLists = function () {
    return lists;
  };

  service.addList = function (listName) {
    lists.push({
      id: _.uniqueId('list_'), //функція lodash, яка генерує id / у всіх id, які генеруються буде префікс list_
      listName: listName
    });
  };

  service.removeList = function (list) {
    _.pull(lists, list); //шукає в масиві потрібний елемент і видаляє його
  };

  return service;
});
