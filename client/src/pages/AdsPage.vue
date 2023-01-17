<template>
  <div id="AdsPage" :class="userTheme">
    <div class="title">Все кличи</div>

    <div v-if="!this.$cookie.getCookie('user').dorm" class="empty">Для начал укажите номер общежития в профиле!</div>

    <div class="posts wrapper">
      <div v-for="post in posts" :key="post.id" class="posts_card">
        <div class="posts-left">
          <img :src="require(`../assets/POSTS/POST_${(post.id % 20)+1}.jpg`)" alt="">
        </div>
        <div class="posts-right">
          <h1 class="posts_quest">Создатель клича:<br>{{ post.author_t }}</h1>
          <h1 class="posts_quest">{{ post.text }}</h1>
          <a :href="'tg://resolve?domain=' + post.author_t">Написать в телеграм</a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'AdsPage',
  data() {
    return{
      posts: null,
      dorm: this.$cookie.getCookie('user').dorm
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

.title{
  font-family: $titles-font;
  font-size: 5vw;
  color: var(--text-accent-2-color);
  width: 30vw;
  margin: 5vh auto;
  text-align: center;
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

    a {
      text-decoration: underline;

      &:hover {
        color: #27228f;
      }
    }
  }
}


</style>