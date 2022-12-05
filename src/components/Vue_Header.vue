<template>
  <header>
    <div class="header-sections">
      <img class="sections-logo sections" alt="logo sleeps at home" src="../assets/LOGO.png" />
      <img class="sections-news sections"  alt="logo sleeps at home" src="../assets/NEWS.png" />  
      <img class="sections-ads sections" alt="logo sleeps at home" src="../assets/ADS.png" /> 
      <img class="sections-ads sections" alt="logo sleeps at home" src="../assets/MY_ADS.png" /> 
      <img class="sections-ads sections" alt="logo sleeps at home" src="../assets/PROFILE.png" /> 
    </div>
  </header>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<script>
export default {
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

header{
  background-color: $color4;
}

.header{
  &-sections{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-sections:last-child{
    margin:0 80px 0 0;
  }
}

.sections {
  width: 100px;

  &-logo {
    width: 250px;
    margin:5px 0 5px 10px;
  }
}

</style>