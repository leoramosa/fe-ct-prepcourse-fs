function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  /* if(numero % 1 === 0) console.log(true);
  else console.log(false)
  return numero; */
  return Number.isInteger(numero);
     
}
console.log(esNumeroEntero(10));
console.log(esNumeroEntero("No es numero entero"));


module.exports = esNumeroEntero;