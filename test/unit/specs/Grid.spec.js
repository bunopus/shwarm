import Vue from 'vue'
import Grid from '@/components/Grid'

describe('Grid.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Grid)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .toEqual('HELLO')
  })
})
