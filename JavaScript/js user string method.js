alert("This program will allow you to:\n1. Convert to uppercase \n2. Convert to lower case. \n3. Replace selected text");

let uText = prompt("Enter the text to analyze");

let uResp = prompt("what will you like done, on the text? \nFor converting to lowercase, type 'L'. \nFor converting to uppercase type 'U' \nFor replacing text type 'R'");
if(uResp == 'L' || uResp == 'l'){
    function userLower(t){
        let newText = t.toLowerCase();
        return newText;
    }
    alert(userLower(uText));
}else if(uResp == 'U' || uResp == 'u'){
    function userUpper(t){
        let newText2 = t.toUpperCase();
        return newText2;
    }
    alert(userUpper(uText));

}else if(uResp == 'R' || uResp == 'r'){
function userReplace(t){
    let newText3 = t.replace("I", "You")
    return newText3;
}
alert(userReplace(uText));
}

else{
    alert("Invalid option");
}