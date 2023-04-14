var ans = "New Delhi is the capital of India and an administrative district of NCT Delhi.";
var ans1 = "";
function resFunc() {
 document.getElementById("res").innerHTML = ans;
}
function resFunc1() {
 document.getElementById("res").innerHTML = ans1;
}

document.getElementById("nd").addEventListener("click", resFunc);
document.getElementById("mb").addEventListener("click", resFunc1);
