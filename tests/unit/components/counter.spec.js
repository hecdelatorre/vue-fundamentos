import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter', () => {
  let wrapper
  beforeEach(() => wrapper = shallowMount(Counter))

  // test('Debe de hacer match con el snapshot', () => {
  //   const wrapper = shallowMount( Counter )
  //   expect( wrapper.html() ).toMatchSnapshot()
  // })
  test('h2 debe tener el valor por defecto "Counter"', () => {
    // wrapper.findAll('h2')
    // expect(wrapper.find('h2').exists()).toBe(true)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    const h2Value = wrapper.find('h2').text()
    expect(h2Value).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en el parrafo', async() => {
    const pValue = wrapper.find('[data-testid="counter"]').text()
    //expect(pValue[0].text()).toBe('100')
    expect(pValue).toBe('100')
  })

  test('Debe Aumuntar y disminuir el contador', async() => {
    const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')
    await increaseBtn.trigger('click')
    const pValue = wrapper.find('[data-testid="counter"]').text()
    expect(pValue).toBe('101')
  })

  test('Debe establecer el valor por defecto', () => {
    const { start, raise } = wrapper.props()
    // const raise = wrapper.props('raise')
    console.log(start)
    console.log(typeof raise)
        
    const pValue = wrapper.find('[data-testid="counter"]').text()
    expect(Number(pValue)).toBe(start)
  })

  test('Debe re mostrar la prop title', () => {
    const title = 'Hola Mundo'
    const wrapper = shallowMount( Counter, {
      props: {
        title
      }
    })
    expect(wrapper.find('h2').text()).toBe(title)
  })

})
