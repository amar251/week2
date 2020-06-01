(function(){

	angular.module('ShoppingListApp',[])
	.controller('ToBuyController', ToBuy)
	.controller('AlreadyBoughtController', Bought)
	.service('ShoppingListCheckOffService',Service);

	ToBuy.$inject = ['ShoppingListCheckOffService'];
	function ToBuy(ShoppingListCheckOffService){

		var buy = this;
		
		buy.items=ShoppingListCheckOffService.ShowItems();
		buy.BuyItem=function(itemIndex){
			ShoppingListCheckOffService.removeItem(itemIndex);
		};
	}

	Bought.$inject = ['ShoppingListCheckOffService'];
	function Bought(ShoppingListCheckOffService){

		var bought = this;
		bought.items=ShoppingListCheckOffService.ShowBoughtItems();
	}

	function Service(){

		var service=this;
		var tobuy = [
			{ name: "Cookies", quantity: "5"},
			{ name: "Snacks", quantity: "5"},
			{ name: "Soda", quantity: "6"},
			{ name: "Sauce", quantity: "7"},
			{ name: "Sugar", quantity: "1"}
		];

		var bought=[];

		service.ShowItems=function(){
			return tobuy;
		};

		service.ShowBoughtItems=function(){
			return bought;
		};

		service.removeItem=function(itemIndex){
			
			bought.push(tobuy[itemIndex]);
			tobuy.splice(itemIndex, 1);
			
		};

		


	}


})();