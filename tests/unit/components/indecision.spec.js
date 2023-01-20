import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision'

describe('Indecision', () => {
  let wrapper
  let clgSpy
  let getAnswerSpy

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({
      answer: 'yes',
      forced: false,
      image: 'https://yesno.wtf/assets/yes/2.gif'
    })
  }))

  beforeEach(() => {
    wrapper = shallowMount( Indecision )
    clgSpy = jest.spyOn(console, 'log')
    getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    jest.clearAllMocks()
  })

  test('Indecision - Snapshot', () => expect(wrapper.html()).toMatchSnapshot())

  test('Escribir en el input no debe disparar nada (console.log)', async() => {

    const input = wrapper.find('input')
    await input.setValue('Hola mundo')
    // expect(clgSpy).toHaveBeenCalled()
    expect(clgSpy).toHaveBeenCalledTimes(1)
    // expect(getAnswerSpy).toHaveReturnedTimes(0)
    expect(getAnswerSpy).not.toHaveBeenCalled()
  })

  test('Escribir "?" debe de disparar el getAnswer', async() => {
    const input = wrapper.find('input')
    await input.setValue('$$$?')
    // await input.setValue('?')
    // expect(clgSpy).toHaveBeenCalled()
    // expect(getAnswerSpy).toHaveReturnedTimes(0)
    expect(getAnswerSpy).toHaveBeenCalled()
  })
  
  test('Pruebas en getAnswer', async() => {
    await wrapper.vm.getAnswer()
    const img = wrapper.find('img')
    expect(img.exists()).toBeTruthy()
    expect(wrapper.vm.img).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect(wrapper.vm.answer).toBe('Si')
  })
  
  // test('Pruebas en getAnswer - fallo en el API', () => {})
})
