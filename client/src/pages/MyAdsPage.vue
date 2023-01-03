<template>
  <div id="MyAdsPage" :class="userTheme">
    <div class="wrapper">
      <div class="create-ads__title">Создай свой пост</div>
      <form action="#" class="create-ads">
        <input 
          placeholder="Наименование задачи"
          v-model="post.name"
        >
        <input 
          placeholder="Подробное описание задачи"
          class="text-description"
          v-model="post.text"
        >
        <input @click="СreatePost" type="submit" value="Отправить">
      </form>
    </div>

    <div class="posts wrapper">
    <div v-for="post in posts" :key="post.id" class="posts_card">
      <div class="posts-left">
        <img :src="require(`../assets/POSTS/POST_${(post.id % 20)+1}.jpg`)" alt="">
      </div>
      <div class="posts-right">
        <h1 class="posts_title">{{ post.name }}</h1>
        <h1 class="posts_quest">{{ post.text }}</h1>
        <h1 class="posts_author">{{ post.author_id }}</h1>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'MyAdsPage',
  data() {
    return{
      posts: null, 
      dorm: this.$cookie.getCookie('user').dorm,
      post: {
        author_id: this.$cookie.getCookie('user').id,
        name: null,
        text: null,
        dorm: this.$cookie.getCookie('user').dorm,
      }
    }
  },
  methods: {
    async СreatePost () {
      try {
        await PostsService.createPost(this.post)
      } catch (err) {
        console.log(err)
      }
    } 
  },
  async mounted() {
    this.posts = (await PostsService.getAllPosts({dorm:this.dorm})).data
  }
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

.wrapper {
  max-width: 80vw;
  margin: 5vh auto 0 auto;
}

.create-ads {

  &__title {
    font-size: 5vw;
    font-family: $titles-font;
    color: var(--text-accent-2-color);
    margin-bottom: 8vh;
    text-align: center;
  }

  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.8vw;
  border-radius: 1vw;
  background-color: var(--background-color-secondary);

  & .text-description {
      flex: 3 1 30vw;
    }

  & > input {
    flex: 1 1 10vw;
    margin: 0.3vw;

    border: none;
    background: #ebebeb;
    border-radius: 0.25vw;
    padding: 1.45vh 1vw;

    &[type="submit"] {
      background: hotpink;
      color: white;
      box-shadow: 0 .75rem .5rem -.5rem hsl(0 50% 80%);
    }
  }
}

.posts{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80vw;
  margin: 0 auto;
  margin-top: 60px;

  &_card{
    text-align: center;
    display: flex;
    border: 1px solid #000;
    width: 48.5%;
    height: 200px;
    margin-bottom: 20px;
    background-color: #5976d0;
    color: #FFF;
  }

  &-left{
    width: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &-right{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}

</style>