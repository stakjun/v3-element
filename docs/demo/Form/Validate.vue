
<template>
  <div>
    <vk-form :model="model" :rules="rules" ref="formRef">
      <vk-form-item prop="email" label="the email">
        <vk-input v-model="model.email" />
      </vk-form-item>
      <vk-form-item prop="password" label="the password">
        <vk-input v-model="model.password" type="password" />
      </vk-form-item>
      <vk-form-item prop="agreement" label="agreement">
        <vk-switch v-model="model.agreement" />
      </vk-form-item>
      <vk-form-item prop="zone" label="zone">
        <vk-select v-model="model.zone" :options="options" />
      </vk-form-item>
      <vk-form-item>
        <vk-button @click.prevent="submit" type="primary">Submit</vk-button>
        <vk-button @click.prevent="reset">Reset</vk-button>
      </vk-form-item>
    </vk-form>
  
    <p>
      form value:
      <pre>{{model}}</pre>
    </p>
  </div>
  </template>

<script setup>
import { reactive, ref } from 'vue'

const model = reactive({
  email: '',
  password: '',
  agreement: false,
  zone: ''
})

const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
  agreement: [{ type: 'enum', required: true, enum: [true], message: '请同意协议'} ],
  zone: [{ type: 'string', required: true, trigger: 'change' }],
}

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]

const formRef = ref()

const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('passed!')
  } catch(e) {
    console.log('the promise', e)
  }
}

const reset = () => {
  formRef.value.resetFields()
}
</script>
