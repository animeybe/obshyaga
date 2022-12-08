<template>
    <div id="comp" :class="currentTheme">
        <div class="block">
          <img class="icy_bush" src="../../assets/ICY_BUSH.jpg" alt="">
          <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolorum ea. Minus aliquam ab, alias nulla odio ducimus quia est distinctio esse expedita quibusdam, repellendus non molestiae quas ipsum consequatur!</div>
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
  
  .block{
    display: flex;
    margin: 500px 160px 0 100px;
  }
  
  .icy_bush{
    max-width: 500px;
    border: 3px solid $color3;
  }
  
  .text{
    font-family: $font1;
    text-align: center;
    font-size: 18px;
  }
  
  </style>