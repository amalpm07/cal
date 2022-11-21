function display(num){
    result.value+=num //result.value=result.value+num
}
function Allclear(){
    result.value=""
}
function evaluateexp(){
    result.value=eval(result.value)
}
function backspace(){
    result.value=result.value.slice(0,-1)
}