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
  </div>
</template>

<script>
import PostsService from '../services/PostsService'

export default {
  name: 'MyAdsPage',
  data() {
    return{
      post: {
        author_id: this.$cookie.getCookie('user').id,
        name: null,
        text: null,
        dorm: this.$cookie.getCookie('user').dorm
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
  margin: 10vh auto 0 auto;
}

.create-ads {

  &__title {
    font-size: 4vw;
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

</style>