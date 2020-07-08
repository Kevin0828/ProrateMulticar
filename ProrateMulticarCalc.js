var totalCars = 2; // number of cars to calculate


/**

   adds a car to the list
*/
function addCar()
{
	 totalCars++;

	var classElement = document.getElementById("cars-boxes-body");
	var wrapTr = document.createElement("tr");
	var wrapTd = document.createElement("td");
	var label = document.createElement("label");
	var input = document.createElement("INPUT");
	var message = document.createElement("td")

	message.setAttribute("class", "premium-text");
	message.setAttribute("id", "premium-text-" + totalCars);
	message.innerHTML = "Premium";

	label.setAttribute("for", "car" + totalCars);
	label.setAttribute("class", "car-label");
	label.innerHTML = "Car " + totalCars;

	input.setAttribute("class", "car");
	input.setAttribute("placeholder", "Premium");
	input.setAttribute("type", "text");
	input.setAttribute("id", "car" + totalCars);

	classElement.appendChild(wrapTr);
	wrapTr.appendChild(wrapTd);
	wrapTd.appendChild(label);
	wrapTd.appendChild(input);
	wrapTr.appendChild(message);
}

/**
   DOM removes one car from being calculated
*/
function removeCar()
{
    if(totalCars > 2)
    {
    	totalCars -= (totalCars > 0) ? 1 : 0;
	    document.getElementById("cars-boxes-body").deleteRow(totalCars);
     }
    else
    {
    	alert(" You can only have a minimum of 2 cars");
    }
}


// When the user clicks on <button> (x), close the modal
 function closeModal()
{
    document.getElementById("myModal").style.display = "none";
}

/**
  Calculates Premium of each car inside the modal
*/
function calculate()
{
	document.getElementById("myModal").style.display = "block";
}




