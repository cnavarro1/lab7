function init(){
  function popUpAlert(){
    var input = document.getElementById("entryinput").value;
    var output = document.getElementById("textoutput");
	alert("Cristian Navarro: " + input);
	textOut.innerHTML = textIn;
  }
  var button = document.getElementById("entrybutton");
  button.addEventListener('click', popUpAlert);
}
window.addEventListener('load', init);