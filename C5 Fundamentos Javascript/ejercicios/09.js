function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  /* if( valor === null || valor === undefined) console.log(true);
  else console(false) */
  console.log(valor)
  return valor === null || valor === undefined;
  
}
esNuloOIndefinido();


module.exports = esNuloOIndefinido;