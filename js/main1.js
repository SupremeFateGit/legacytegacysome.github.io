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
		"<button type='button' class='btn btn-light m-1' onclick='chooseFromMixed("+i+")'>"+mixedAnswer[i]+"</button>"
	}
	for (let i=0;i<checkList.length;i++){
		content2+=
		"<button type='button' class='btn btn-light m-1' onclick='returnToMixed("+i+")'>"+checkList[i]+"</button>"
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
	checkList.push(mixedAnswer[index]);
	mixedAnswer.splice(index,1)
	drawPage()
}

function returnToMixed(index){
	mixedAnswer.push(checkList[index])
	checkList.splice(index,1)
	drawPage()
}

function checkResult(){
	let checkingList=checkList
	checkList=[]
	for (let i =0 ; i<answer.length; i++) {
        if (answer[i]!=checkingList[i]) {
            return false
        }
    }
    return true
}
function check(){
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
	// document.getElementById('question').innerHTML=question;
	let sms=document.getElementById('question').innerText
	let rgt = new SpeechSynthesisUtterance(sms);
	window.speechSynthesis.speak(rgt);
}