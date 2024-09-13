import { describe, it } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import ElementUI from "element-plus";

describe('HelloWorld', () => {
  it('renders properly 1', () => {
    mount(HelloWorld, {
      props: {
        comment: { is_public: false },
      },
      global: {
        plugins: [ElementUI]
      }
    });
  })
})
