/**
 * @author Richard Benson
 */
function process(inputStack){
	var workingStack = [];
	var currentValue = 0;
	var result = 0;
	var operand = function(){};
	
	while (inputStack.length > 0){
		currentValue = inputStack.pop();
		if (currentValue.match(/^[\*\+\-\/]$/)) {
			switch(String(currentValue))
			{
				case "+":
					operand = pcadd;
				break;
				case "*":
					operand = pcmultiply;
				break;
				case "/":
					operand = pcdivide;
				break;
				case "-":
					operand = pcsubtract;
				break;
			}
			try	{
				workingStack.push(operand(workingStack.pop(),workingStack.pop()));
			}
			catch(e)
			{
				alert(e.message);
			}
		} else if(currentValue.match(/.+/g)) {
			workingStack.push(parseFloat(currentValue));
		}
	}
	$("#result").text(workingStack.join(""));
	return workingStack.join("");
}

function pcadd(a,b){
		return "("+a+"+"+b+")";
}

function pcsubtract(a,b){
		return "("+a+"-"+b+")";
}
function pcmultiply(a,b){
		return "("+a+"*"+b+")";
}
function pcdivide (a,b){
		return "("+a+"/"+b+")";
}

$("#pc-run").click(function(){process($("#pc-input").val().split(" ").reverse())});
