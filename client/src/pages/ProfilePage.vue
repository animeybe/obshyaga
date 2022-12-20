<template>
  <div id="ProfilePage" :class="userTheme">
      <div class="wrapper">
        <div class="left">
          <div class="left-image">
            <img src="../assets/LOGOUT_ICON.png" alt="">
          </div>
          <div class="left-settings">
            <a class="left-settings_btn">Сменить фото профиля</a>
            <a href="#settings" class="left-settings_btn">Изменить данные профиля</a>
          </div>
        </div>
        <div class="right">
          <p class="name title">{{ this.$cookie.getCookie('user').name }}</p>
          <div class="right-info">
            <p class="email">EMAIL : {{ this.$cookie.getCookie('user').email }}</p>
            <p class="dorm">DORM : {{ this.$cookie.getCookie('user').dorm }}</p>
            <p class="room">ROOM : {{ this.$cookie.getCookie('user').room }}</p>
            <p class="hometown">HOMETOWN : {{ this.$cookie.getCookie('user').hometown }}</p>
            <p class="birthdate">BIRTDATE : {{ this.$cookie.getCookie('user').bithdate }}</p>
          </div>
        </div>
      </div>
      <div id="settings" class="popup-settings">
        <div class="popup-settings__body">
          <a href="#" class="popup__close">X</a>
          <form action="#" class='form'>
          <p class='field required'>
            <label class='label required' for='name'>Full name</label>
            <input class='text-input' id='name' name='name' type='text' v-model="name">
          </p>
          <p class='field required half'>
            <label class='label' for='email'>E-mail</label>
            <input class='text-input' id='email' name='email' type='email' v-model="email">
          </p>
          <p class='field half required'>
            <label class='label' for='password'>Password</label>
            <input class='text-input' id='password' name='password' type='password' v-model="password">
          </p>
          <p class='field half'>
            <label class='label' for='hometown'>Hometowm</label>
            <input class='text-input' id='hometown' name='hometown' type='text' v-model="hometown">
          </p>
          <p class='field half'>
            <label class='label' for='bithdate'>Bithdate</label>
            <input class='text-input' id='bithdate' name='bithdate' type='text' v-model="bithdate">
          </p>
          <div class='field'>
            <label class='label'>Кампус</label>
            <ul class='options'>
              <li class='option'>
                <input class='option-input' id='option-0' name='option' type='radio' value='0'>
                <label class='option-label' for='option-0'>React</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-1' name='option' type='radio' value='1'>
                <label class='option-label' for='option-1'>Vue</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-2' name='option' type='radio' value='2'>
                <label class='option-label' for='option-2'>Angular</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-3' name='option' type='radio' value='3'>
                <label class='option-label' for='option-3'>Riot</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-4' name='option' type='radio' value='4'>
                <label class='option-label' for='option-4'>Polymer</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-5' name='option' type='radio' value='5'>
                <label class='option-label' for='option-5'>Ember</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-6' name='option' type='radio' value='6'>
                <label class='option-label' for='option-6'>Meteor</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-7' name='option' type='radio' value='7'>
                <label class='option-label' for='option-7'>Knockout</label>
              </li>
            </ul>
          </div>
          <div class='field'>
            <label class='label'>Городские общаги</label>
            <ul class='options'>
              <li class='option'>
                <input class='option-input' id='option-8' name='option' type='radio' value='8'>
                <label class='option-label' for='option-8'>React</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-9' name='option' type='radio' value='9'>
                <label class='option-label' for='option-9'>Vue</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-10' name='option' type='radio' value='10'>
                <label class='option-label' for='option-10'>Angular</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-11' name='option' type='radio' value='11'>
                <label class='option-label' for='option-11'>Riot</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-12' name='option' type='radio' value='12'>
                <label class='option-label' for='option-12'>Polymer</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-13' name='option' type='radio' value='13'>
                <label class='option-label' for='option-13'>Ember</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-14' name='option' type='radio' value='14'>
                <label class='option-label' for='option-14'>Meteor</label>
              </li>
              <li class='option'>
                <input class='option-input' id='option-15' name='option' type='radio' value='15'>
                <label class='option-label' for='option-15'>Knockout</label>
              </li>
            </ul>
          </div>
          <p class='field half'>
            <label class='label' for='login'>Room number</label>
            <input class='text-input' id='login' name='login' type='text' v-model="room">
          </p>
          <p class='field half'>
            <input @click="update" class='button' type='submit' value='Update'>
          </p>
        </form>
        </div>
      </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'ProfilePage',
  data() {
    return{
      name: '',
      dorm: '',
      email: '',
      password: '',
      hometown: '',
      bithdate: '',
      room: '',
      id: this.$cookie.getCookie('user').id
    }
  },
  methods: {
    async update() {
      try {
        const response = await AuthenticationService.update({
          name: this.name,
          dorm: this.dorm,
          email: this.email,
          password: this.password,
          hometown: this.hometown,
          bithdate: this.bithdate,
          room: this.room,
          id: this.id
        })
        this.$cookie.removeCookie('user')
        this.$cookie.removeCookie('token')
        this.$cookie.setCookie('user', response.data.user, 7);
        this.$cookie.setCookie('token', response.data.token, 7);
        
        setTimeout(function () {
          location.reload()
        }, 0.5 * 1000)

        this.$router.push('/profile')
      } catch (err) {
        this.error = err.response.data.error
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
  display: flex;
  border: 1.5vw solid var(--background-color-secondary);
}

.left {
  width: 47.95vw;
  height: 84.2vh;
  display: flex;
  flex-direction: column;

  &-image {
    height: calc(87vh / 2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1.5vw solid var(--background-color-secondary);
    border-right: 1.5vw solid var(--background-color-secondary);

    img {
      width: 200px;
    }
  }

  &-settings {
    height: calc((82.5vh) / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1.5vw solid var(--background-color-secondary);
    border-bottom: 1.5vw solid var(--background-color-secondary);

  }
}

.right {
  width: 47.95vw;
  height: 84.2vh;
  padding-top: 10vh;
  border-bottom: 1.5vw solid var(--background-color-secondary);

  &-info {
    margin: 0 auto;
    width: 80%;
  }

  & .title {
    font-size: 2vw;
    margin-bottom: 10vh;
    text-align: center;
  }

  & p {
    font-size: 1.4vw;
    margin-bottom: 3vh;
  }
}

.popup-settings{
  opacity: 0;
  visibility: hidden;

  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  .popup__close {
      position: absolute;
      right: 30px;
      top: 20px;
      font-size: 30px;
    }


  &:target {
    opacity: 1;
    visibility: visible;
  }
}

.form .button, .form .message, .customSelect, .form .select, .form .textarea, .form .text-input, .form .option-input + label, .form .checkbox-input + label, .form .label {
  padding: 0.75em 1em;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  line-height: normal;
  border-radius: 0;
  border: none;
  background: none;
  display: block;
}

.form .label {
  font-weight: bold;
  color: white;
  padding-top: 0;
  padding-left: 0;
  letter-spacing: 0.025em;
  font-size: 1.125em;
  line-height: 1.25;
  position: relative;
  z-index: 100;
}
.required .form .label:after, .form .required .label:after {
  content: " *";
  color: #E8474C;
  font-weight: normal;
  font-size: 0.75em;
  vertical-align: top;
}

.customSelect, .form .select, .form .textarea, .form .text-input, .form .option-input + label, .form .checkbox-input + label {
  font: inherit;
  line-height: normal;
  width: 100%;
  box-sizing: border-box;
  background: #222222;
  color: white;
  position: relative;
}
.customSelect:placeholder, .form .select:placeholder, .form .textarea:placeholder, .form .text-input:placeholder, .form .option-input + label:placeholder, .form .checkbox-input + label:placeholder {
  color: white;
}
.customSelect:-webkit-autofill, .form .select:-webkit-autofill, .form .textarea:-webkit-autofill, .form .text-input:-webkit-autofill, .form .option-input + label:-webkit-autofill, .form .checkbox-input + label:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #111111 inset;
  -webkit-text-fill-color: white;
  border-top-color: #111111;
  border-left-color: #111111;
  border-right-color: #111111;
}
.customSelect:not(:focus):not(:active).error, .form .select:not(:focus):not(:active).error, .form .textarea:not(:focus):not(:active).error, .form .text-input:not(:focus):not(:active).error, .form .option-input + label:not(:focus):not(:active).error, .form .checkbox-input + label:not(:focus):not(:active).error, .error .customSelect:not(:focus):not(:active), .error .form .select:not(:focus):not(:active), .form .error .select:not(:focus):not(:active), .error .form .textarea:not(:focus):not(:active), .form .error .textarea:not(:focus):not(:active), .error .form .text-input:not(:focus):not(:active), .form .error .text-input:not(:focus):not(:active), .error .form .option-input + label:not(:focus):not(:active), .form .error .option-input + label:not(:focus):not(:active), .error .form .checkbox-input + label:not(:focus):not(:active), .form .error .checkbox-input + label:not(:focus):not(:active) {
  background-size: 8px 8px;
  background-image: linear-gradient(135deg, rgba(232, 71, 76, 0.5), rgba(232, 71, 76, 0.5) 25%, transparent 25%, transparent 50%, rgba(232, 71, 76, 0.5) 50%, rgba(232, 71, 76, 0.5) 75%, transparent 75%, transparent);
  background-repeat: repeat;
}
.form:not(.has-magic-focus) .customSelect.customSelectFocus, .form:not(.has-magic-focus) .customSelect:active, .form:not(.has-magic-focus) .select:active, .form:not(.has-magic-focus) .textarea:active, .form:not(.has-magic-focus) .text-input:active, .form:not(.has-magic-focus) .option-input + label:active, .form:not(.has-magic-focus) .checkbox-input + label:active, .form:not(.has-magic-focus) .customSelect:focus, .form:not(.has-magic-focus) .select:focus, .form:not(.has-magic-focus) .textarea:focus, .form:not(.has-magic-focus) .text-input:focus, .form:not(.has-magic-focus) .option-input + label:focus, .form:not(.has-magic-focus) .checkbox-input + label:focus {
  background: #4E4E4E;
}

.form .message {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 100;
  font-size: 0.625em;
  color: white;
}

.form .option-input, .form .checkbox-input {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.form .option-input + label, .form .checkbox-input + label {
  display: inline-block;
  width: auto;
  color: #4E4E4E;
  position: relative;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  cursor: pointer;
}
.form .option-input:focus + label, .form .checkbox-input:focus + label, .form .option-input:active + label, .form .checkbox-input:active + label {
  color: #4E4E4E;
}
.form .option-input:checked + label, .form .checkbox-input:checked + label {
  color: white;
}

.form .button {
  font: inherit;
  line-height: normal;
  cursor: pointer;
  background: #E8474C;
  color: white;
  font-weight: bold;
  width: auto;
  margin-left: auto;
  font-weight: bold;
  padding-left: 2em;
  padding-right: 2em;
}
.form .button:hover, .form .button:focus, .form .button:active {
  color: white;
  border-color: white;
}
.form .button:active {
  position: relative;
  top: 1px;
  left: 1px;
}

.form {
  max-width: 40em;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
}
.form .field {
  width: 100%;
  margin: 0 0 1.5em 0;
}
@media screen and (min-width: 40em) {
  .form .field.half {
    width: calc(50% - 1px);
  }
}
.form .field.last {
  margin-left: auto;
}
.form .textarea {
  max-width: 100%;
}
.form .select::-ms-expand {
  display: none;
}
.form .checkboxes, .form .options {
  padding: 0;
  margin: 0;
  list-style-type: none;
  overflow: hidden;
}
.form .checkbox, .form .option {
  float: left;
  margin: 1px;
}
.customSelect {
  pointer-events: none;
}
.customSelect:after {
  content: "";
  pointer-events: none;
  width: 0.5em;
  height: 0.5em;
  border-style: solid;
  border-color: white;
  border-width: 0 3px 3px 0;
  position: absolute;
  top: 50%;
  margin-top: -0.625em;
  right: 1em;
  transform-origin: 0 0;
  transform: rotate(45deg);
}
.customSelect.customSelectFocus:after {
  border-color: white;
}
.magic-focus {
  position: absolute;
  z-index: 0;
  width: 0;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.15);
  transition: top 0.2s, left 0.2s, width 0.2s;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: top, left, width;
  transform-origin: 0 0;
}

</style>