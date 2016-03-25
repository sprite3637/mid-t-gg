var angular = angular.module('book', [])
  .controller('Controller', function ($scope) {
    $scope.bookOrder = []
    $scope.add = function (data) {
      if (check(data)) {
        var count = find(data)
        $scope.bookOrder[count].amount++
      } else {
        $scope.bookOrder.push(data)
      }
      $scope.sum = promotion($scope.bookOrder)
      $scope.sumA = sumAmount($scope.bookOrder)
    }
    var sumAmount = function (amount) {
      var sumA = 0
      for (var A = 0; A < $scope.bookOrder.length; A++) {
        sumA += $scope.bookOrder[A].amount
      }
      return (sumA)
    }
    var find = function (findData) {
      for (var f = 0; f < $scope.bookOrder.length; f++) {
        if ($scope.bookOrder[f].sector === findData.sector) {
          return (f)
        }
      }
    }
    var check = function (checkData) {
      for (var c = 0; c < $scope.bookOrder.length; c++) {
        if ($scope.bookOrder[c].sector === checkData.sector) {
          return (true)
        }
      }
      return (false)
    }

    var promotion = function (proData) {
      var length = proData.length
      var price = 0
      for (var m = 0; m < proData.length; m++) {
        price += proData[m].amount * 100
      }
      var disCount = 0
      var delAmount = []

      for (var p = 0; p < proData.length; p++) {
        delAmount.push({price: proData[p].price, sector: proData[p].sector, amount: proData[p].amount})
      }

      while (length > 1) {
        if (length === 2) {
          disCount += 20
        } else if (length === 3) {
          disCount += 60
        } else if (length === 4) {
          disCount += 120
        } else if (length === 5) {
          disCount += 200
        } else if (length === 6) {
          disCount += 300
        } else if (length === 7) {
          disCount += 420
        }

        for (var a = 0; a < delAmount.length; a++) {
          delAmount[a].amount--
        }
        for (var s = delAmount.length - 1; s >= 0; s--) {
          if (delAmount[s].amount === 0) {
            delAmount.splice(s, 1)
            console.log('splice')
          }
        }

        length = delAmount.length
      }
      return ({disCount: disCount, sum: price - disCount, price: price})
    }
    $scope.addOrder = function (index) {
      $scope.bookOrder[index].amount++
      $scope.sum = promotion($scope.bookOrder)
    }
    $scope.delOrder = function (index) {
      if ($scope.bookOrder[index].amount === 1) {
        $scope.bookOrder.splice(index, 1)
        $scope.sum = promotion($scope.bookOrder)
        $scope.sumA = sumAmount($scope.bookOrder)
      } else {
        $scope.bookOrder[index].amount--
        $scope.sum = promotion($scope.bookOrder)
        $scope.sumA = sumAmount($scope.bookOrder)
      }
    }
    $scope.deleteOrder = function (index) {
      $scope.bookOrder.splice(index, 1)
      $scope.sum = promotion($scope.bookOrder)
      $scope.sumA = sumAmount($scope.bookOrder)
    }
  })
