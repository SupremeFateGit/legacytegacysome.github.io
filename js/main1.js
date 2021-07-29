let question='how are you, bro!';
let answer='qandaysiz ,birodar!';
let mixedAnswer=['kofe','yaxshimisiz','qandaysiz','choy','birodar'];
//bazadan sozlar keldi deb olsak


let checkList=[] <!-- here user choosens to check actual answer [asnwer] -->


// endi o'shalardan undov va vergullarni olib , kerakli so'zlarni list qilamiz
answer=answer.replace('!','');
answer=answer.replace(',','');
answer=answer.split(' ');  <!-- here answer you can check by asnwer list-->




function drawPage(){
	let content1=''
	let content2=''
	for (let i=0;i<mixedAnswer.length;i++){
		content1+=
		"<button type='button' class='btn btn-light m-1' onclick='chooseFromMixed("+i+")' id='btn-mix"+i+"'>"+mixedAnswer[i]+"</button>"
	}
	for (let i=0;i<checkList.length;i++){
		content2+=
		"<button type='button' class='btn btn-light m-1' onclick='returnToMixed("+i+")' id='btn-off"+i+"'>"+checkList[i]+"</button>"
	}
	document.getElementById('mixed-words').innerHTML=content1
	document.getElementById('answer').innerHTML=content2
}


function result(){
	//here btn colors and background colors returned to default
	document.getElementById('checkButton').innerHTML='result'
	document.getElementById('checkButton').classList.add('btn-success');
    document.getElementById('checkButton').classList.remove('btn-danger');
	document.getElementById('sliding').style.backgroundColor='#fff';


	//here logical works for result btn
	document.getElementById('question').innerHTML=question;
	drawPage()
	document.getElementById('checkButton').onclick=function() {check()}
}

function chooseFromMixed(index){
	//action works when mixed words are pressed. And go to choosen list
	checkList.push(mixedAnswer[index]);
	mixedAnswer.splice(index,1)
	drawPage()
}

function returnToMixed(index){
	//to undone choosen word to mixed words list again
	mixedAnswer.push(checkList[index])
	checkList.splice(index,1)
	drawPage()
}

function avoidCheckError(){
	//to avoid undefined returning buttons to mixed words or to choosen words

	//and this one is for choosen words
	for (let i=0;i<checkList.length;i++){
		document.getElementById('btn-off'+i).onclick=function() {return}
	}
	//and this one is for mixed words
	for (let i=0;i<mixedAnswer.length;i++){
		document.getElementById('btn-mix'+i).onclick=function() {return}
	}
}

function checkResult(){ 
	//this only return true or false according to result of test
	avoidCheckError()
	let checkingList=checkList
	checkList=[] 
    if (answer.length==checkingList.length){
    for (let i =0 ;i<answer.length;i++){
        if(!(answer.includes(checkingList[i]))){
            return false
        }
    }
    return true 
}
else {return false}

}
function check(){
	//here we take true or false from checkResult. And color effects and also changing onlick of 'result' button
	if (checkResult()) {
        document.getElementById('sliding').style.backgroundColor='#5cb85c';
        document.getElementById('checkButton').innerHTML='congratulation';
        document.getElementById('checkButton').classList.add('btn-success');
        document.getElementById('checkButton').classList.remove('btn-danger');

    }

    else {
        document.getElementById('sliding').style.backgroundColor='#d9534f';
        document.getElementById('checkButton').classList.remove('btn-success');
        document.getElementById('checkButton').classList.add('btn-danger');
        document.getElementById('checkButton').innerHTML='unfortunately';
        let i=1

    }
    document.getElementById('checkButton').onclick=function() {result()}
}





// overall txt to speech part here:
function speechIt(){
	let sms=document.getElementById('question').innerText
	let rgt = new SpeechSynthesisUtterance(sms);
	window.speechSynthesis.speak(rgt);
	//there is undone work with default pronunciation . We have to convert it to english according to question langauage
}



