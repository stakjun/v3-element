import type { App } from "vue"
import Button from "@/components/Button/Button.vue"


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