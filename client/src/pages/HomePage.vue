<template>
  <div id="homePage" :class="userTheme">
      <section class="parallax">
        <div class="parallax__body">
          <div class="parallax__container _container">
            <div class="parallax__label">Привет</div>
            <h1 class="parallax__title">это -<div class="special">obshyaga</div></h1>
          </div>
          <div class="parallax__images images-parallax">
            <div class="images-parallax__item">
              <div class="images-parallax__sky"></div>
            </div>
            <div class="images-parallax__item">
              <div class="images-parallax__back"></div>
            </div>
            <div class="images-parallax__item">
              <div class="images-parallax__girl"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="_content">
        <div class="_content__container _container odd">
          <h2 class="_content__title">В первый раз здесь?</h2>
          <div class="_content__text">
            Здесь ты можешь почувствовать себя как дома. Мы стараемся сделать всё возможное, чтобы сплотить студентов и предоставить им место, где они могут в любой момент попросить помощи. Мы считаем, что каждый в общежитии – это частичка большой семьи, где все поддерживают друг друга. Ведь в момент, когда ты далеко от дома, рядом должны быть те, кто не бросят тебя в час нужды.	
          </div>
        </div>  
        <div class="_content__container _container even">
          <h2 class="_content__title">Что мы даём вам?</h2>
          <div class="_content__text">
            Здесь ты можешь почувствовать себя как дома. Мы стараемся сделать всё возможное, чтобы сплотить студентов и предоставить им место, где они могут в любой момент попросить помощи. Мы считаем, что каждый в общежитии – это частичка большой семьи, где все поддерживают друг друга. Ведь в момент, когда ты далеко от дома, рядом должны быть те, кто не бросят тебя в час нужды.	
          </div>
        </div>

        <div class="_content__authors_title">Авторы проекта</div>
        <div class="_content__authors _container">
          <div class="_content__authors_first authors">
            <div class="_content__authors_text">
              <div class="_content__authors_name">Оболонский Дмитрий</div>
              <div class="_content__authors_role">Студент ДВФУ</div>
            </div>
            <div class="_content__authors_image"></div>
          </div>
          <div class="_content__authors_second authors">
            <div class="_content__authors_text">
              <div class="_content__authors_name">Тэрэбуркэ Даниил</div>
              <div class="_content__authors_role">Студент ДВФУ</div>
            </div>
            <div class="_content__authors_image"></div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>

export default {
  name: 'homePage',
  data() {
    return{
    }
  },
  mounted() {
    const parallax = document.querySelector('.parallax');
    var setMouseParallaxStyle;

    if (parallax) {
      // const content = document.querySelector('.parallax__container');
      const sky = document.querySelector('.images-parallax__sky');
      const back = document.querySelector('.images-parallax__back');
      const girl = document.querySelector('.images-parallax__girl');

      //Коэффициенты
      const forSky = 40;
      const forBack = 20;
      const forGirl = 10;

      //Скорость анимации
      const speed = 0.05

      //Объявление переменных
      let positionX = 0, positionY = 0;
      let coordXprocent = 0, coordYprocent = 0;

      setMouseParallaxStyle = function() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        //Передаём стили
        sky.style.cssText = `transform: translate(${positionX / forSky}%, ${positionY / forSky}%);`;
        back.style.cssText = `transform: translate(${positionX / forBack}%, ${positionY / forBack}%);`;
        girl.style.cssText = `transform: translate(${positionX / forGirl}%, ${positionY / forGirl}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function(e){
        //Получение ширины и высоты блока
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        //Ноль по середине
        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        //Получаем проценты
        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
      })
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

._container {
  max-width: 70vw;
  margin: 0 auto;
  padding: 50px 0;
}
.parallax {
  min-height: 100vh;
  &__body {
    position: fixed;
    width: 100%;
    height: 100%;
    top: $height-header;
    left: 0;
    z-index: -1;
  }
  &__container {
    top: 50px;
    text-transform: uppercase;
    position: relative;
    z-index: 1;
  }
  &__label {
    color: #fbd784;
    text-shadow: 1px 1px 1px #121416;
    display: flex;
    font-size: 2vw;
    letter-spacing: 6px;
    margin:0 0 30px 10px;
    align-items: center;
    &:after {
      flex: 0 0 70px;
      content: "";
      margin:0 0 0 20px;
      background-color: #fbd784;
      box-shadow: 0.1vw 0.1vw 0.1vw #121416;
      height: 2px;
    }
  }
  &__title {
    color: #ebebeb;
    font-size: 6vw;
    text-shadow: 0.3vw 0.3vw 0.3vw #121416;
    margin-left: 3vw;
    font-family: $home-title-font;
    .special {
      font-size: 9vw;
      margin-left: -3vw;
    }
  }
  &__images {
    position: absolute;
    width: 130%;
    height: 130%;
    top: -25%;
    left: -25%;
    z-index: 0;
  }
}

.images-parallax {
  &__item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &__sky {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: url("../assets/home_parallax/SKY.png") top / cover no-repeat;
    top: 0;
    z-index: 0;
  }
  &__back {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: url("../assets/home_parallax/BACK.png") top / cover no-repeat;
    z-index: 1;
  }
  &__girl {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: url("../assets/home_parallax/GIRL.png") top / cover no-repeat;
    z-index: 3;
  }
}

._content {
  background-color: var(--background-color-secondary);
  color: var(--text-accent-color);
  position: relative;

  &__container {
    max-width: 50vw;
  }

  &:before {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    transform:  translate(0px, -100%);
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 5%, var(--background-color-secondary) 100%);
  }

  &__title {
    font-size: 2vw;
    margin:0 0 30px 0;
    font-family: $titles-font;
  }
  &__text {
    font-size: 1vw;
    line-height: 150%;
    letter-spacing: 1px;
    text-indent: 20px;
  }
  
  .odd {
    text-align: left;

    & ._content__title {
      margin-left: 50px;
    }
  }
  .even {
    text-align: right;

    & ._content__title {
      margin-right: 50px;
    }
  }
}

._content__authors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 60vw;

  &_first {
    ._content__authors_image{
      width: 18vw;
      height: 18vw;
      margin-top: 5vh;
      background: url(../assets/authors/DMITRII.jpg) top / cover no-repeat;
      border-radius: 50%;
      border: 5px solid var(--shadow-text-color);
      box-shadow: 0 0 1vw var(--shadow-color);
    }
  }

  &_second {

    ._content__authors_image{
      width: 18vw;
      height: 18vw;
      margin-top: 5vh;
      background: url(../assets/authors/DANIL.jpg) top / cover no-repeat;
      border-radius: 50%;
      border: 5px solid var(--shadow-text-color);
      box-shadow: 0 0 1vw var(--shadow-color);
    }
  }

  &_name{
    font-size: 2.2vw;
    padding: 10px;
    text-shadow: 0.1vw 0.1vw 1.5vw var(--shadow-color);
  }
  &_text {
    font-size: 1.5vw;
    text-align: center;
    text-shadow: 0.1vw 0.1vw 1.5vw var(--shadow-color);
  }

  &_title {
    text-align: center;
    font-size: 2vw;
    margin:30vh 0 0 0;
    font-family: $titles-font;
  }
}

.authors {
  font-family: $authors-font;
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  </style>