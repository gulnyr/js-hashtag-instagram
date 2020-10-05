var mainText = "Подготовить-среду-программирования-для-Cpp";
var textT = mainText.replace(/-/g," ")+"?";

mainText = mainText.toLowerCase().replace(/-/g," ").replace(/,/g,""); mainText = mainText.split(" "); var mainTextLen = mainText.length; var mainTextRes = "";

for(var i = 0; mainTextLen>i; i++){mainTextRes+= "#gconstr_"+mainText[i]+" ";}

var prepText = "#gconstr_программирование #gconstr_айтишник #gconstr_программист #gconstr_it #gconstr #инженер #gconstr_инженер #gconstr_автоматизация #gconstr_cpp";
//var prepText = "#gconstr_асутп #gconstr_асу_тп #gconstr_кипиа #gconstr #инженер #gconstr_инженер #gconstr_электроника #gconstr_электротехника #gconstr_физика"+" "+mainTextRes;

var arr = prepText.split(" ");

function shuffle(arr){
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

textT+"\n\n"+shuffle(arr).join(" ").replace(/\s+/g," ");