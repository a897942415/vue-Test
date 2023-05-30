<template>
    <div class="login-page">
    <div class="box">
      <div class="head">
        <!-- <img src="./assets/logo.png" alt="logo" /> -->
        <h1>登录</h1>
      </div>
      <form>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" id="username" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" id="password" placeholder="请输入密码" v-model="password" />
        </div>
        <button @click.prevent="login">登录</button>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  name:'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 处理登录逻辑
    }
  }
};
</script>
  <style scoped>
  .login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f8f9;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 24px;
  margin-top: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

input {
  width: 100%;
  max-width: 280px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #f3f3f3;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  transition: all 0.3s ease-in-out;
}

input:focus {
  outline: none;
  background-color: #e7e7e7;
}

button {
  width: 100%;
  max-width: 280px;
  margin-top: 20px;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #0078ff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  box-shadow: rgba(0, 120, 255, 0.4) 0px 5px 15px 0px;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #006ce6;
}
  </style>