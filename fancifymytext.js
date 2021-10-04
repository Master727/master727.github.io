var textArea=document.getElementById("textArea");
function makeBig(){
    textArea.style.fontSize="24pt";
}
document.getElementsByName("fancify")[0].addEventListener("change",function(){
    textArea.style.fontWeight="bold";
    textArea.style.color="blue";
    textArea.style.textDecoration="underline"
    alert("styles added to the text area");
})
document.getElementsByName("fancify")[1].addEventListener("change",function(){
    textArea.style.fontWeight="normal";
    textArea.style.color="black";
    textArea.style.textDecoration="none"
    alert("styles removed from the text area");
})
function makeMoo(){
    textArea.style.textTransform="uppercase"
    let str=textArea.value.split(".");
    let str2=str.join("-Moo");
    textArea.value=str2;
}