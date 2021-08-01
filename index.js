document.getElementById('button').onclick = function changeContent() {
  var uyEni = document.getElementById("uyEni").value;
  var uyBoyi = document.getElementById("uyBoyi").value;

  var taxtaEni = document.getElementById("taxtaEni").value;
  var taxtaBoyi = document.getElementById("taxtaBoyi").value;

  var result = (uyEni*uyBoyi)/(taxtaEni*taxtaBoyi);

  return document.getElementById("label").innerHTML = Math.round(result);
  }
