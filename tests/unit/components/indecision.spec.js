import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision', () => {
  let wrapper
  let clgSpy
  beforeEach(() => {
    wrapper = shallowMount( Indecision )
    clgSpy = jest.spyOn(console, 'log')
  })
  test('Indecision - Snapshot', () => expect(wrapper.html()).toMatchSnapshot())

  test('Escribir en el input no debe disparar nada (console.log)', async() => {
    const input = wrapper.find('input')
    await input.setValue('Hola mundo')
    // expect(clgSpy).toHaveBeenCalled()
    expect(clgSpy).toHaveBeenCalledTimes(1)
  })

  // test('Escribir "?" debe de disparar el fetch', () => {})
  // test('Pruebas en getAnswer', () => {})
  // test('Pruebas en getAnswer - fallo en el API', () => {})
})
