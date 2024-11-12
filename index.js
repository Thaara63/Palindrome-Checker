
const  checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", function (){

    const textBox = document.getElementById("textBox").value,
    result = document.getElementById("result");

    let changedWord = textBox.replace(/[^A-Za-z0-9]/g, "");
    console.log(changedWord);
    let reverseWord = [...changedWord].reverse().join("");
    console.log(reverseWord);

    if(changedWord.toLowerCase() === reverseWord.toLowerCase()){
        result.textContent = `"${textBox}" is a Palindrome.`
    }
    else{
        result.textContent = `"${textBox}" is not a Palindrome.`
    }

})
