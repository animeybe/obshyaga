<template>
  <div id="MyAdsPage" :class="userTheme">
    <div class="wrapper">
      <div class="create-ads__title">Создай свой клич</div>
      <div v-if="error" v-html="error" class="alert alert-danger"></div>
      <form action="#" @submit.prevent="СreatePost" class="create-ads">
        <input 
          placeholder="Логин Telegram"
          v-model="post_for_create.author_t"
          required
          disabled
        >
        <input 
          placeholder="Подробное описание задачи"
          class="text-description"
          v-model="post_for_create.text"
          required
        >
        <input type="submit" value="Отправить">
      </form>
    </div>

    <div v-if="!this.$cookie.getCookie('user').telegram" class="empty">Для отображения ваших кличей нужно указать логин Telegram в профиле!</div>

    <div class="posts wrapper">
    <div v-for="post in posts" :key="post.id" class="posts_card">
      <div class="posts-left">
        <img :src="require(`../assets/POSTS/POST_${(post.id % 20)+1}.jpg`)" alt="">
      </div>
      <div class="posts-right">
        <h1 class="posts_text">{{ post.text }}</h1>
        <a href="/myads" @click="deletePost(post.id)" class="posts_del">Удалить</a>
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
      error: null,
      options: {
        dorm: this.$cookie.getCookie('user').dorm,
        telegram: this.$cookie.getCookie('user').telegram
      },
      post_for_create: {
        author_t: this.$cookie.getCookie('user').telegram,
        text: null,
        dorm: this.$cookie.getCookie('user').dorm,
      }
    }
  },
  methods: {
    async СreatePost () {
      try {
        await PostsService.createPost(this.post_for_create)

        setTimeout(function () {
          location.reload()
        }, 100)

        this.$router.push('/myads')
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async deletePost(id) {
      try {
        await PostsService.deletePost({id: id})
        
        setTimeout(function () {
          location.reload()
        }, 100)

        this.$router.push('/myads')

      } catch (err) {
        console.log(err)
      }
    },
    vif() {
      if (this.posts === null) {
        return true
      }
    }
  },
  async mounted() {
    this.posts = (await PostsService.getPosts(this.options)).data
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
    width: 48.5%;
    height: 200px;
    margin-bottom: 20px;
    background-color: #5976d0;
    color: #FFF;
    border-radius: 1vw;
  }

  &-left{
    width: 50%;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.9vw 0 0 0.9vw;
    }
  }
  &-right{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  &_text {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &_del{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 15vw;
    height: 4vw;

    &:hover {
      color: #27228f;
    }
    &::before {
      content: "";
      width: 3vh;
      height: 3vh;
      margin-right: 0.5vw;
      background-image: url('../assets/TRASH.png');

      background-size: 100%;
    }
    &::after {
      content: "";
      width: 3vh;
      height: 3vh;
      margin-left: 0.5vw;
      background-image: url('../assets/TRASH.png');

      background-size: 100%;
    }
  }
}

</style>