<template>
  <header id="main_header" :class="userTheme">
    <div class="header">
      <div class="header-sections">
        <button @click="$router.push('/home')">
          <img class="sections-logo" alt="logo sleeps at home" src="../assets/LOGO.png" />
        </button>
        <div class="sections-group">
          <button v-if="$store.getters.getUser.loggedIn" @click="$router.push('/news')" class="sections-news sections">Новости</button>
          <button v-if="$store.getters.getUser.loggedIn" @click="$router.push('/ads')" class="sections-ads sections">Доска <br> объявлений</button>
          <button v-if="$store.getters.getUser.loggedIn" @click="$router.push('/myads')" class="sections-myads sections">Мои <br> объявления</button>
          <button v-if="$store.getters.getUser.loggedIn" @click="$router.push('/profile')" class="sections-profile sections">Профиль</button>
          <button v-if="!$store.getters.getUser.loggedIn" @click="$router.push('/register')" class="sections-profile sections">Создать аккаунт</button>
          <button v-if="!$store.getters.getUser.loggedIn" @click="$router.push('/login')" class="sections-profile sections">Войти</button>
        </div>
        <div class="changeThemes">
          <input
          @change="toggleTheme"
          id="checkbox"
          type="checkbox"
          class="switch-checkbox"
          />
          <label for="checkbox" class="switch-label">
            <span><img src="../assets/MOON.png" alt="" width="26"></span>
            <span><img src="../assets/SUN.png" alt="" width="26"></span>
            <div
              class="switch-toggle"
              :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name:'main_header',
    data() {
    return {
      userTheme: "light-theme",
    };
  },
  computed: {
    ...mapGetters([
      'getLoggedIn',
    ])
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);

    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme");
    },
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElemen
      localStorage.setItem("theme", this.darkMode);
      htmlElement.setAttribute('theme', (this.darkMode ? 'darkMode' : ''));
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

.header{
  &-sections{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 120px 0 100px;
  }
}

.sections {
  min-width: 155px;
  font-size: 20px;
  text-align: center;

  &-group{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 140px 0 90px;
  }

  &:hover {
    text-shadow: 1px 1px 3px $color2;
    font-size: 22px;
  }

  &-logo {
    width: 200px;
  }
}

.switch-checkbox {
  display: none;
}

.switch-label {
  /* for width, use the standard element-size */
  width: 94px; 

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: 30px;

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: var(--element-size);
  top: 1px;
  left: 0px;
  height: 28px;
  width: 50px;
  transform: translateX(0);
  transition: transform 0.5s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(42px) !important;
}

</style>