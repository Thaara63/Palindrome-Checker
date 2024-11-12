//palindrome checker function

 function check(){

    const textBox = document.getElementById("textBox").value;
    const result = document.getElementById("result");

    let changedWord = textBox.replace(/[^A-Za-z0-9]/g, "");
    console.log(changedWord);
    let reverseWord = [...changedWord].reverse().join("");
    console.log(reverseWord);

    if(textBox === ""){
        result.textContent = `Please enter a word or sentence`
    }
    else if(changedWord.toLowerCase() === reverseWord.toLowerCase()){
        result.textContent = `"${textBox}" is a Palindrome.`
    }
    else{
        result.textContent = `"${textBox}" is not a Palindrome.`
    }

}
