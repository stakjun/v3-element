<template>
  <div>
    <vk-form :model="model" :rules="rules" ref="formRef">
      <vk-form-item prop="email" label="the email">
        <vk-input v-model="model.email" />
      </vk-form-item>
      <vk-form-item prop="password" label="the password">
        <vk-input v-model="model.password" type="password" />
      </vk-form-item>
      <vk-form-item prop="confirmPwd" label="confirm password">
        <vk-input v-model="model.confirmPwd" type="password" />
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
  confirmPwd: ''
})

const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
  confirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {  validator: (rule, value) => value === model.password, trigger: 'blur', message: '两个密码必须一致' } ],
}

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

