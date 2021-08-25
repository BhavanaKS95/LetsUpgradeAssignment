function Add() {
	var n1 = parseInt(document.getElementById('t1').value);
	var n2 = parseInt(document.getElementById('t2').value);
	sum = n1+n2;
	if(n1  == NaN) {
		alert = "Entered Data is Wrong !!!";
	}
	else{
	document.getElementById('d1').innerText = "The result of " + n1 + " and " + n2 + " is :" +sum;
	}
}

//AssignmentDay2

var food = [
	{
	Name : "Burger",
	Quantity : 2,
	Price : 100.00
	},
	{
	Name : "Fries",
	Quantity : 3,
	Price : 200.00
	},
	{
	Name : "Puff",
	Quantity : 4,
	Price : 500.00
	},
	{
	Name : "Pizza",
	Quantity : 1,
	Price : 100.00
	},
	{
	Name : "Garlic Bread",
	Quantity : 2,
	Price : 150.00
	}
	
]

for(var i = 0; i<food.length ; i++){
	console.log("Name :" + food[i].Name);
	console.log("Price :" + food[i].Price);
	console.log("Quantity :" + food[i].Quantity);
	console.log("**************************************");
}