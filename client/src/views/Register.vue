<template>
  <div class="register">
    <h1>This is the registration</h1>

    <input v-model="email" type="email" name="email" placeholder="Email">
    <input v-model="password" type="password" name="password" placeholder="Password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import Auth from '@/services/Auth'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const res = await Auth.register({
        email: this.email,
        password: this.password
      })
      console.log(res.data)
    }
  }
}
</script>
