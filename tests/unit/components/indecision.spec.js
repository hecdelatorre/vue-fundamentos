import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision', () => {
  let wrapper
  beforeEach(() => wrapper = shallowMount( Indecision ))
  test('Indecision - Snapshot', () => expect(wrapper.html()).toMatchSnapshot())

  test('Escribir en el input no debe disparar nada (console.log)', () => {
    
  })

  test('Escribir "?" debe de disparar el fetch', () => {})
  test('Pruebas en getAnswer', () => {})
  test('Pruebas en getAnswer - fallo en el API', () => {})
})
