<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Button from './components/Button/Button.vue'
import Icon from './components/Icon/Icon.vue'

const buttonRef = ref<InstanceType<typeof Button> | null>(null)
const size = ref<any>('3x')

onMounted(() => {
  console.log(buttonRef.value?.ref)
  setTimeout(() => {
    size.value = '2xl'
  }, 2000)
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  
  <Icon icon="arrow-up" :size="size" type="danger" color="#0e7a0d"/>
  <main>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
  </main>
</template>