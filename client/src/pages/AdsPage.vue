<template>
    <div id="AdsPage" :class="userTheme">
  
    <div class="block wrapper">
      <!-- <div v-for="post in posts" :key="post.id" class="card">
        <h1 class="title">{{ post.name }}</h1>
        <h1 class="quest">{{ post.text }}</h1>
        <h1 class="author">{{ post.author_id }}</h1>
      </div> -->
    </div>
  </div>
  
  </template>
  
  <script>
  // import PostsService from '@/services/PostsService'
  
  export default {
    name: 'AdsPage',
    data() {
      return{
        posts: null
      }
    },
    // async mounted() {
    //   this.posts = (await PostsService.getAllPosts()).data
    // }
  }
  </script>
  
  <style lang="scss" scoped>
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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 60px;
  
    .card{
      text-align: center;
      border: 1px solid #000;
      width: 25%;
      height: 200px;
      margin-bottom: 20px;
      background-color: #5976d0;
      color: #FFF;
    }
  }
  
  
  </style>