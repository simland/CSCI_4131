/**
 * @author Richard Benson
 */
var PolishCalc = {
	init : function(){
		this.display(this.process(window.prompt("Enter RPN String","4 2 +").split(" ").reverse()));
	},
	process : function(stack){
		var workingStack = [];
		var currentValue = 0;
		var result = 0;
		var operand = function(){};
		
		while (stack.length > 0){
			currentValue = stack.pop();
			if (currentValue.match(/^[\*\+\-\/]$/)) {
				switch(String(currentValue))
				{
					case "+":
						operand = this.add;
					break;
					case "*":
						operand = this.multiply;
					break;
					case "/":
						operand = this.divide;
					break;
					case "-":
						operand = this.subtract;
					break;
				}
				
				
				while (workingStack.length > 1){
					workingStack.push(operand(workingStack.pop(),workingStack.pop()));
				}
			} else {
				workingStack.push(currentValue);
			}
		}
		
		return workingStack[0];
	},
	display : function(output){
		if (window.confirm("The answer was "+output+". Input another string?")){
			this.init();
		} else {
			window.alert("All done");
		}
	},
	add : function(a,b){
		return a.valueOf()+b.valueOf();
	},
	subtract : function(a,b){
		return a.valueOf()-b.valueOf();
	},
	multiply : function (a,b){
		return a.valueOf()*b.valueOf();
	},
	dividie : function (a,b){
		return a.valueOf()/b.valueOf();
	}
};

PolishCalc.init();
