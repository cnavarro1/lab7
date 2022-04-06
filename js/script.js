function init(){
  function popUpAlert(){
    var input = document.getElementById("entryinput").value;
    var output = document.getElementById("textoutput");
	alert("Cristian Navarro: " + input);
	output.innerHTML = input;
  }
  var button = document.getElementById("entrybutton");
  button.addEventListener('click', popUpAlert);
}
window.addEventListener('load', init);