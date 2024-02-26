document.getElementById("calcular").addEventListener("click", function () {
    calcularValorc();
  });

  function calcularValorc() {
    var masa = parseFloat(document.getElementById("inputMass").value);
    var fuerza = parseFloat(document.getElementById("inputForce").value);
    var tiempo = parseFloat(document.getElementById("inputTime").value);

    var O = 1/2 * masa;
    var f = fuerza * tiempo;
    var resultado = f / O;

    var total =Math.sqrt(resultado) + " M/S"

    document.getElementById("inputResult").value = total; 
  }