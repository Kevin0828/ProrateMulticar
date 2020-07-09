let MAX_CARS = 10;
let MIN_CARS = 2;


/**
   adds a car to the list
*/
function addCar()
{
	var carsCounter = (document.querySelectorAll(".car").length + 1);

   if(carsCounter <= MAX_CARS)
   {
	var table = document.getElementById("cars-boxes-body");
	var row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        var cell1 = row.insertCell(-1);
	var label = document.createElement("label");
	var input = document.createElement("INPUT");
	var message = document.createElement("label")

	message.setAttribute("class", "premium-text");
	message.innerHTML = "Premium";

	label.setAttribute("for", "car" + carsCounter);
	label.setAttribute("class", "car-label");
	label.innerHTML = "Car " + carsCounter;

	input.setAttribute("class", "car");
	input.setAttribute("placeholder", "$0.00");
	input.setAttribute("type", "text");
	input.setAttribute("id", "car" + (carsCounter - 1));

	cell.appendChild(label);
	cell.appendChild(input);
	cell1.appendChild(message);
}
else
{
      alert("You can only have a maximum of " + MAX_CARS + " cars");
}

}

/**
   DOM removes one car from html form 
*/
function removeCar()
{
	var carsCounter = (document.querySelectorAll(".car").length);

    if(carsCounter > MIN_CARS)// minimum amount of cars
    {
      	document.getElementById("cars-boxes-body").deleteRow(carsCounter - 1);
    }
    else
    {
    	alert("You can only have a minimum of 2 cars");
    }
}


// When the user clicks on <button> (x), close the modal
 function closeModal()
{
    document.getElementById("myModal").style.display = "none";
    var carsCounter = document.querySelectorAll(".car").length;
     
    for(var i = 0; i < carsCounter; ++i)
    {
     document.getElementById("modal-table-body").deleteRow(0);
    }

}

/**
  Calculates Premium of each car inside the modal
*/
function calculate()
{
	document.getElementById("myModal").style.display = "block";

	var carsCounter = document.querySelectorAll(".car").length;
	var downpayment = parseFloat(document.getElementById("downpayment").value);
	var monthlypayment = parseFloat(document.getElementById("monthlypayment").value);
        var totalSum = 0;
	var arrPremium = [];
	var carMonthly = [];
	var carDown = [];

	for(var i = 0; i < carsCounter; ++i)
	{
		arrPremium[i] = parseFloat(document.getElementById("car" + i).value);
		totalSum =  (arrPremium[i] + totalSum);
	}
	
	for(var i = 0; i < carsCounter; ++i)
	{
		carMonthly[i] = ((arrPremium[i] / totalSum) * monthlypayment);
		carDown[i] = ((arrPremium[i] / totalSum) * downpayment);
	}

	displayResults(carDown,carMonthly);
}


/**
  Creates new elements inside the modal table with the calculated down payments
  and monthly payments
*/
function displayResults(downpayments, monthlypayments)
{
    var table = document.getElementById("modal-table-body");

   for(var i = 0; i < downpayments.length; ++i)
   { 
	 var row = table.insertRow(-1);
         var car_cell = row.insertCell(-1);
         var down_cell = row.insertCell(-1);
         var mp_cell = row.insertCell(-1);

	 var car_label = document.createElement("p");
	 car_label.setAttribute("class", "premium-text modal-results");
	 car_cell.appendChild(car_label);

	 var down_label = document.createElement("p");
	 down_label.setAttribute("class", "premium-text modal-results");
	 down_cell.appendChild(down_label);

	 var mp_label = document.createElement("p");
	 mp_label.setAttribute("class", "premium-text modal-results");
	 mp_cell.appendChild(mp_label);

	 downpayments[i] = (downpayments[i] > 0) ? downpayments[i] : 0.00;
	 monthlypayments[i] = (monthlypayments[i] > 0) ? monthlypayments[i] : 0.00;

	 car_label.innerHTML = "Vehicle " + (i + 1);
     down_label.innerHTML = "$" + downpayments[i].toFixed(2);
	 mp_label.innerHTML = "$" + monthlypayments[i].toFixed(2);
   }
}


/**
   Resets values from inputs
**/
function resetValues()
{
	document.getElementById("form-user-input-cars").reset();
	document.getElementById("form-user-input-DP-MP").reset();
}



