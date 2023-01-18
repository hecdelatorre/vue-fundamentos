describe('Examples Component', () => {
  test('Debe de ser mayor a 10', () => {
    // Arreglas
    let value = 6;
    // Estimulo
    value += 5
    // Observar el resultado
    expect( value ).toBeGreaterThan(10)
  })
})
