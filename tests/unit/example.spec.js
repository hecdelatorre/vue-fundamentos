describe('Examples Component', () => {
  test('Debe de ser mayor a 10', () => {
    // Arreglas
    let value = 0;
    // Estimulo
    value += 5
    // Observar el resultado
    if (value < 10) {
      throw `${ value } no es mayor a 10`
    } 
  })
})
