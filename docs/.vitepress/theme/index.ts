import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import V3Element from '../../../src/index'
import '../../../src/styles/index.css'
import './custom.css'

library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(V3Element)
  }
}