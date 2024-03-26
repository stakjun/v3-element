import type { App } from "vue"
import Button from "@/components/Button/Button.vue"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './styles/index.css'

library.add(fas)

const components = [
  Button
]

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  install,
  Button
}

export default {
  install
}