var mainText = "�����������-�����-����������������-���-Cpp";
var textT = mainText.replace(/-/g," ")+"?";

mainText = mainText.toLowerCase().replace(/-/g," ").replace(/,/g,""); mainText = mainText.split(" "); var mainTextLen = mainText.length; var mainTextRes = "";

for(var i = 0; mainTextLen>i; i++){mainTextRes+= "#gconstr_"+mainText[i]+" ";}

var prepText = "#gconstr_���������������� #gconstr_�������� #gconstr_����������� #gconstr_it #gconstr #������� #gconstr_������� #gconstr_������������� #gconstr_cpp";
//var prepText = "#gconstr_����� #gconstr_���_�� #gconstr_����� #gconstr #������� #gconstr_������� #gconstr_����������� #gconstr_�������������� #gconstr_������"+" "+mainTextRes;

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