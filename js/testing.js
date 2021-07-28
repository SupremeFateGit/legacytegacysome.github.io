let words = []


function add() {
    let word = document.getElementById('word').value

    words.push(word)

    document.getElementById('word').value = ""
    drawWords()
}


function drawWords() {
    let content = ""

    for (let i = 0; i < words.length; i++) {
        content +=

            "<div class='d-flex'>" +
            "<button type='button' class='btn btn-primary m-2' onclick='edit("+i+")'>" + words[i] + "</button>" +
            "</div>"


    }

    document.getElementById('word_options').innerHTML = content
    
}


function edit(index) {
    document.getElementById('word').value = words[index]
    document.getElementById('add_btn').onclick= function() {edit_word(index)}
}
function edit_word(index){
    words[index]=document.getElementById('word').value;
    document.getElementById('word').value='';
    document.getElementById('add_btn').onclick= function() {add()}
    drawWords()
}

let s = 'hi! how are doing'






function consoles() {
    console.log(document.getElementById('savol').value);
    console.log(document.getElementById('javob').value);
    console.log(words);
}


