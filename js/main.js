
user_words = []




function drawWords() {
    let content = ""

    for (let i = 0; i < words.length; i++) {
        content +=

            "<div class='d-flex'>" +
            "<button type='button' class='btn btn-primary mr-2' onclick=user_answer(" + i + ")>" + words[i] + "</button>" +
            "</div>"


    }

    document.getElementById('word_options').innerHTML = content


}



function user_answer(index) {

    let u_word = words[index]
    words.splice(index,1)

    user_words.push(u_word)



    userDrawWords()


    drawWords()
}


function edit(index) {
    let word = user_words[index]
    words.push(word)
    user_words.splice(index,1)
    let content = ""
    drawWords()
    userDrawWords()

}

function userDrawWords() {
    let content = ""
    for (let i=0; i<user_words.length; i++){
        content +=
            "<div>" +
            "<button type='button' class='btn btn-success mr-2' onclick=edit("+i+")>" + user_words[i] + "</button>" +
            "</div>"


    }
    document.getElementById('user_answers').innerHTML=content
}

