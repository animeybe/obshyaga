<template>
  <header id="main_header" :class="userTheme">
    <div class="header">
      <div class="header-sections">
        <button @click="$router.push('/home')">
          <img class="sections-logo" alt="logo sleeps at home" src="../assets/LOGO.png" />
        </button>
        <div class="sections-group">
          <button v-if="$store.state.token" @click="$router.push('/news')" class="sections-news sections">Новости</button>
          <button v-if="$store.state.token" @click="$router.push('/ads')" class="sections-ads sections">Доска <br> объявлений</button>
          <button v-if="$store.state.token" @click="$router.push('/myads')" class="sections-myads sections">Мои <br> объявления</button>
          <button v-if="$store.state.token" @click="$router.push('/profile')" class="sections-profile sections">Профиль</button>
          <button v-if="$store.state.token" @click="logout" class="sections-logout"><img src="../assets/LOGOUT_ICON.png" alt="выйти"></button>
          <button v-if="!$store.state.token" @click="$router.push('/register')" class="sections-profile sections">Создать аккаунт</button>
          <button v-if="!$store.state.token" @click="$router.push('/login')" class="sections-profile sections">Войти</button>
        </div>
        <div class="changeThemes">
          <input
          @change="toggleTheme"
          id="checkbox"
          type="checkbox"
          class="switch-checkbox"
          />
          <label for="checkbox" class="switch-label">
              <img src="../assets/MOON.png" alt="">
              <img src="../assets/SUN.png" alt="">
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
export default {
  name:'main_header',
    data() {
    return {
      userTheme: ''
    };
  },
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);

    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme")
      } else {
        this.setTheme("light-theme")
      }
    },
    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (hasDarkPreference) {
        return "dark-theme"
      } else {
        return "light-theme"
      }
    },
    getTheme() {
      return localStorage.getItem("user-theme")
    },
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  },
  watch: {
    darkMode: function () {
      let htmlElement = document.documentElemen
      localStorage.setItem("theme", this.darkMode)
      htmlElement.setAttribute('theme', (this.darkMode ? 'darkMode' : ''))
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
    padding: 0 10vw 0 5vw;
  }
}

.sections {
  width: 13vw;
  font-size: 1.6vw;
  text-align: center;

  &-group{
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &:hover {
    text-shadow: 1px 1px 3px $color2;
    font-size: 1.5vw;
  }

  &-logo {
    width: 16vw;
  }
  &-logout{
    width: 1.7vw;
    margin-right: 5vw;  
    
    img {
      width: 1.6vw;

      &:hover {
        width: 1.5vw;
      }
    }
  }
}

.switch-checkbox {
  display: none;
}

.switch-label {
  /* for width, use the standard element-size */
  width: 5vw; 

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: 3.2vh;

  align-items: center;
  background: var(--text-primary-color);
  cursor: pointer;
  display: flex;
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;

  img {
    width:1.5vw;
    margin:0px 0 0 0;
  }
} 

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: var(--element-size);
  top: 0.1vh;
  left: 0px;
  height: 3vh;
  width: 2.7vw;
  transform: translateX(0);
  transition: transform 0.5s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(2.25vw) !important;
}

</style>