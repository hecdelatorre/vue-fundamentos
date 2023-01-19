import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {

  // test('Debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount( Counter )
  //   expect( wrapper.html() ).toMatchSnapshot()
  // })
  test('h2 debe tener el valor por defecto "Counter"', () => {
    const wrapper = shallowMount( Counter )
    // wrapper.findAll('h2')
    // expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en el parrafo', () => {
    const wrapper = shallowMount( Counter )
    const pValue = wrapper.find('[data-testid="counter"]').text()
    //expect(pValue[0].text()).toBe('100')
    expect(pValue).toBe('100')
  })

})
