<template>
    <div id="comp" :class="currentTheme">
  
        <div class="container">
          <div class="left">
            <div class="header">
              <div class="animation a1">Добро пожаловать!</div>
              <div class="animation a2">Создайте свою учетную запись, используя адрес электронной почты и пароль</div>
            </div>
            <form class="form" action="#">
              <input type="email" class="form-field animation a3" placeholder="Электронная почта">
              <input type="password" class="form-field animation a4" placeholder="Пароль">
              <input type="password" class="form-field animation a5" placeholder="Повторите пароль">
              <p class="animation a6"><a href="login.html">Авторизоваться</a></p>
              <button class="animation a7">Зарегистрироваться</button>
            </form>
          </div>
          <div class="right"></div>
        </div>
        
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'app',
    data() {
      return{
        currentTheme: localStorage.getItem("theme-color"),
      }
    },
    components:{
    },
    methods: {
      changeTheme() {
        this.currentTheme = localStorage.getItem("theme-color")
      }
    }
  }
  </script>
  
  <style lang="scss">
  /*Обнуление*/
  * {padding: 0;margin: 0;border: 0;}
  *,*:before,*:after {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active {outline: none;}
  a:focus,a:active {outline: none;}
  nav, footer, header, aside {display: block;}
  html, body{height: 100%;width: 100%;font-size: 100%;line-height: 1;font-size: 14px;-ms-text-size-adjust: 100%;-moz-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;}
  input,button,textarea {font-family: inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding: 0;border: 0;}
  a, a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img {vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size: inherit;font-weight: 400;}
  /*----------------------------*/
  
  * { box-sizing: border-box; }
  
  
  body {
    font-family: 'Rubik', sans-serif;
  }
  
  .container {
    display: flex;
    height: 100vh;
  }
  
  .left {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    animation-name: left;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-delay: 1s;
  }
  
  .right {
    flex: 1;
    background-color: black;
    transition: 1s;
    background-image: url(../../assets/HEHE.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #000;
  }
  
  .header > div {
    margin: 10px;
    text-align: center;
  }
  
  .header > div {
    margin-top: 10px;
    font-weight: normal;
    font-size: 15px;
  }
  
  .form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  
    &-field {
      height: 46px;
      padding: 0 16px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-family: 'Rubik', sans-serif;
      outline: 0;
      transition: .2s;
      margin-top: 20px;
  
      &:focus {
        border-color: #0f7ef1;
      }
    }
  
    &> button {
      padding: 12px 10px;
      border: 0;
      background: linear-gradient(to right, #de48b5 0%,#0097ff 100%); 
      border-radius: 3px;
      margin-top: 15px;
      color: #fff;
      letter-spacing: 1px;
      font-family: 'Rubik', sans-serif;
    }
  
    &> p{
      max-width: 100%;
      text-align: center;
      margin-top: 15px;
  
      &> a{
      font-size: 14px;
      }
    }
  }
  .animation {
    animation-name: move;
    animation-duration: .4s;
    animation-fill-mode: both;
    animation-delay: 2s;
  }
  
  .a1 {
    animation-delay: 2s;
  }
  
  .a2 {
    animation-delay: 2.1s;
  }
  
  .a3 {
    animation-delay: 2.2s;
  }
  
  .a4 {
    animation-delay: 2.3s;
  }
  
  .a5 {
    animation-delay: 2.4s;
  }
  
  .a6 {
    animation-delay: 2.5s;
  }
  .a6 {
    animation-delay: 2.6s;
  }
  
  @keyframes move {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-40px);
    }
  
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
  
  @keyframes left {
    0% {
      opacity: 0;
      width: 0;
    }
  
    100% {
      opacity: 1;
      padding: 20px 40px;
      width: 440px;
    }
  }
  
  </style>