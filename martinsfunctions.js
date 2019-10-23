function ln(x){
	return Math.log(x);
}
function sin(x){
	return Math.sin(x);
}
function cos(x){
	return Math.cos(x);
}
function tan(x){
	return (Math.sin(x)/Math.cos(x));
}
function csc(x){
	return (1/Math.sin(x));
}
function sec(x){
	return (1/Math.cos(x));
}
function cot(x){
	return (Math.cos(x)/Math.sin(x));
}
function asin(x){
	return Math.asin(x);
}
function acos(x){
	return Math.acos(x);
}
function atan(x){
	return Math.atan(x);
}
function acsc(x){
	return asin(1/x);
}
function asec(x){
	return acos(1/x);
}
function acot(x){
	return atan(1/x);
}


function sinh(x){
	return (((Math.E**(x))-(Math.E**(-x)))/2);
}
function cosh(x){
	return ((Math.E**(x))+(Math.E**(-x)))/2;
}
function tanh(x){
	return sinh(x)/cosh(x);
}
function csch(x){
	return 1/sinh(x);
}
function sech(x){
	return 1/cosh(x);
}
function coth(x){
	return 1/tanh(x);
}
function asinh(x){
	return (Math.log(Math.sqrt(x**2 + 1) + x));
}
function acosh(x){
	return (Math.log(Math.sqrt(x**2 - 1) + x));
}
function atanh(x){
	return ln((1 + x)/(1 - x)) / 2;
}
function acsch(x){
	return asinh(1/x);
}
function asech(x){
	return acosh(1/x);
}
function acoth(x){
	return atanh(1/x);
}
function normal(x){
	return((Math.E**(-1*x**2))/(Math.sqrt(Math.PI)))
}
function Round(x){
    if(x==0){
		return 0
	}
	else{
		return +x.toFixed(10);;
	}
}
