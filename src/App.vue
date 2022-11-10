<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer.vue';

export default {
    components: { Header, Footer }
    }
      
</script>

<style  lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import "./assets/variables.scss";
@import "./assets/mixins.scss";
@import "./assets/font/mr_kindlyjasmineg.css";
body {
    margin: 0;
    font-family:"Montserrat";
    overflow: unset;
    &.active {
        overflow: hidden;
    }
}
.container {
    max-width: 1120px;
    margin: 0 auto;
}
h1,h2,h3,h4,h5,h6,p,ul {
    margin: 0;
    padding: 0;
}
button {
    border: none;
}
li {
    list-style: none;
}
a {
    text-decoration: none;
    color: initial;
}
.title {
    @include font (700, 24px, $blue)
}
.link {
    @include font (500, 12px,  #282828)
}
.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
}
@media screen and (max-width: 1150px) {
    .container {
        padding: 0 30px;
    }
    .wrapper {
        flex-wrap: wrap;
        justify-content: center;
    }
}
@media screen and (max-width: 900px) {
    .container {
        padding: 0 79px;
    }
}
@media screen and (max-width: 500px) {
    .container {
        padding: 0 24px;
    }
}
</style> 

