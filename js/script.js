function tipCalculate (){
	var totalBill = document.getElementById('bill').value;


// if(isNan(totalBill))

	var percBtns = document.getElementsByClassName('tip-btn');

	for (var i=0; i<percBtns.length; i++){
	     if (percBtns[i].checked){
	     var tipPerc = percBtns[i].value
	 }
	}

	if (!isNaN(totalBill)) {
	  var tipTotal = Math.floor(totalBill * tipPerc * 100) /100;
	  var tipBox = document.getElementById('tipamount');
	  tipBox.innerHTML = "$" + tipTotal;
	} else {
	  alert('Please enter numbers only');

	}

}
// var reset = document.getElementsByClassName('tip-btn');
//    if (bill[i].checked){
//    	var reset = bill[i].value
//    }

function resetCalc() {
 var output=$('#tipamount');
 $(output).empty();

}