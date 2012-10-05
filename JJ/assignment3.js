var $ = function (id ) 
	{return document.getElementById(id);}

window.onload = function () 
	{$("Submit").onclick = verify}
	
var verify = function()
	{
		var inputtest = ($("userentry").value);
		if(inputtest.search(
    /^[ \t]*\-?[1-9][0-9]*([ \t]+((\-?[1-9][0-9]*)|[\+\-\*]))*[ \t]*$/
                     ) < 0 )
        alert("The formula must start with a number and must contain only numbers or the following operators (+, -, *) seperated by spaces.")
        else 
        {
        	var seperatedinput = inputtest.split(" ");
        	ReverseCalc(seperatedinput)
        }
}        
function ReverseCalc(verifiedinput) 
	{
		var stack = [0]
			for (var index in verifiedinput) { //starts the evaluator
				if ((verifiedinput[index]) == false)   //If there are blank spaces in front, they are ignored
					{continue}  
				else if (!isNaN(verifiedinput[index]))   //If item is a number, pushes number to stack
					{stack.push(verifiedinput[index])}
				else if (isNaN(verifiedinput[index]))  //If item is not a number, pulls for equation
					{var operand2 = stack.pop(); //extracts first number
						var operand1 = stack.pop();  //extracts second number
						var result = ( "(" + operand1 + " "+ verifiedinput[index] + " " + operand2 + ")" );  //calculator
						stack.push(result)};
				} 
			answer(stack)//sends stack to a results section
	}
function answer(answers)
	{
		var formatanswer = answers.pop()
		$("Equation").firstChild.nodeValue = formatanswer
		$("One_Answer").firstChild.nodeValue = eval(formatanswer)
	}