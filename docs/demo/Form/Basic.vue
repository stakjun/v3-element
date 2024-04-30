
<template>
  <div>
    <vk-form :model="model" :rules="rules" ref="formRef">
      <vk-form-item label="the email" prop="email">
        <vk-input v-model="model.email"/>
      </vk-form-item>
      <vk-form-item label="the password" prop="password">
        <vk-input type="password" v-model="model.password" />
      </vk-form-item>
      <vk-form-item prop="confirmPwd" label="confirm password">
        <vk-input v-model="model.confirmPwd" type="password" />
      </vk-form-item>
      <div :style="{textAlign: 'center'}">
        <vk-button type="primary" @click.prevent="submit">Submit</vk-button>
        <vk-button  @click.prevent="reset">Reset</vk-button >
      </div>
    </vk-form>
    <p>
      form value:
      <pre>{{model}}</pre>
    </p>
  
  </div>
  </template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const model = reactive({
  email: '123',
  password: '',
  confirmPwd: ''
})
const rules = {
  email: [{ type: 'email', required: true, trigger: 'blur' } ],
  password: [{ type: 'string', required: true, trigger: 'blur', min: 3, max: 5 }],
  confirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {
    validator: (rule, value) => value === model.password, trigger: 'blur', message: '两个密码必须相同'
  } ],
}

const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('passed!')
  } catch (e) {
    console.log('the error', e)
  }
}
const reset = () => {
  formRef.value.resetFields()
}
</script>