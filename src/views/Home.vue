<template>
    <div id="vidoe-player" class="vidoe-player">
        <video :src="video" autoplay muted class="video"></video>
    </div>

    <section class="hero">
        <div class="container">
            <div class="hero__content">
                <div class="hero__wrapper">
                    <h1 class="hero__title">САЯКАТ<br>
                        <div>бирге</div>
                        <span class="hero__title--another">PERO TRAVEL</span>
                    </h1>
                    <router-link to="/catalog" class="hero__link">Экскурсияларга<img src="@/assets/img/hero/line.svg"
                            alt="line"></router-link>
                </div>
                <ul class="hero__social">
                    <li><a target="_blank" href="#"><img class="hero__item" src="@/assets/img/hero/wk.svg"
                                alt="ison-social"></a></li>
                    <li><a target="_blank" href="#"><img class="hero__item" src="@/assets/img/hero/insta.svg"
                                alt="ison-social"></a></li>
                    <li><a target="_blank" href="#"><img class="hero__item" src="@/assets/img/hero/facebook.svg"
                                alt="ison-social"></a></li>
                </ul>
            </div>
        </div>
    </section>

    <div class="slider">
        <div class="video-swiper">
            <swiper :slidesPerView="1.1" :spaceBetween="30" :centeredSlides="true" :pagination="{
                clickable: true,
            }" :modules="modules" :breakpoints="{
    '450': {
        slidesPerView: 1.5,
        spaceBetween: 30,
    },
    '900': {
        slidesPerView: 2.5,
        spaceBetween: 30,
    },
    '1150': {
        slidesPerView: 4,
        spaceBetween: 30,
    },
}">
                <swiper-slide v-for="item in store.state.classes" :key="item.class">
                    <div class="slider-box">
                        <img :src="item.img" alt="image">
                        <div class='slider-hover' @click="chengeVideo(item.class)" :class="item.class">
                            <img src="@/assets/img/slider/play.svg" alt="play-btn">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>

    <Excursion />

    <section class="featured">
        <div class="featured-box">
            <h2 class="title">Биз жөнүндө</h2>
            <p>PeroTravel - кезексиз жана операторлорсуз экскурсияларды брондоо үчүн биринчи онлайн кызматы.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. </p>
            <br><br>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.</p>
        </div>
    </section>
    <section class="info">
        <div class="container">
            <h2 class="info-title">Экскурсиялардын түрлөрү</h2>
            <div class="info-wrapper">
                <div class="info-block" v-for="item in infoRendering" :key="item.id">
                    <img :src="item.img" alt="img">
                    <div class="info-content">
                        <h3 class="info-name">{{ item.name }}</h3>
                        <p class="info-descr">
                            {{ item.descr }}
                        </p>
                    </div>
                </div>
            </div>
            <p class="info-text">Биздин веб-сайттан сизге ылайыктуу экскурсияны тандап, онлайн катталыңыз
                кезексиз, жөнөкөй жана тез!</p>
            <router-link to="/catalog" class="info-link">Экскурсияларга<img src="../assets/img/global-img/line.svg"
                    alt1="arrow"></router-link>
        </div>
    </section>
    <Gallery />
    <Reviews />
    <section class="question">
        <div class="container question-wrapper">
            <div class="question-block">
                <h2 class="question-title">Суроолоруңуз барбы?</h2>
                <span class="question-name">Сураныч калтырыңыз, биз жооп беребиз</span>
                <div class="question-content">
                    <input type="text" placeholder="Ат">
                    <input type="number" placeholder="Телефон">
                    <input type="email" placeholder="Почта">
                </div>
                <button class="question-btn">Өтүнмөңүздү тапшырыңыз</button>
            </div>
        </div>
    </section>
</template>

<script>
import { useStore } from 'vuex';
import Gallery from '@/components/Gallery.vue';
import { ref } from 'vue';
import Excursion from '@/components/Excursion.vue';
import Reviews from '@/components/Reviews.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

export default {
    components: { Gallery, Excursion, Reviews, Swiper, SwiperSlide },
    setup() {
        const store = useStore()
        const infoList = store.state.infoList;
        const infoRendering = ref();
        infoRendering.value = infoList;
        let video = ref("/video/bishkek.mp4")

        const chengeVideo = (item) => {
            switch (item) {
                case "slider-hover-one":
                    video.value = "/video/bishkek.mp4"
                    break;
                case "slider-hover-two":
                    video.value = "/video/ik.mp4"
                    break;
                case "slider-hover-three":
                    video.value = "/video/jalabat.mp4"
                    break;
                case "slider-hover-four":
                    video.value = "/video/osh.mp4"
                    break;
                case "slider-hover-five":
                    video.value = "/video/talas.mp4"
                    break;
                default:
                    video.value = "/video/batken.mp4"
            }
            console.log(item, video.value);
        }

        return {
            store,
            infoRendering,
            video,
            chengeVideo,
        }
    }
}
</script>

<style lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.vidoe-player {
    overflow: hidden;
    width: 100%;
    height: 713px;
    position: absolute;
    top: 0;
    z-index: -9;

    .video {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
    }
}

.hero {
    margin-top: 155px;

    &__title {
        margin-bottom: 60px;
        position: relative;
        font-weight: 700;
        font-size: 72px;
        color: $white;
        max-width: 750px;

        &--another {
            font-family: sans-serif;
            font-weight: 900;
            font-size: 96px;
            color: transparent;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #fff;
        }

        div {
            font-family: 'mr_KindlyJasmineG';
            font-weight: 400;
            font-size: 64px;
            color: #FFC700;
            position: absolute;
            right: 35px;
            top: 55px;
        }
    }

    &__link {
        background: $aqualite;
        border-radius: 60px;
        padding: 17px 53px;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: $white;

        img {
            margin-left: 5px;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__item {
        margin: 5px;
    }
}

.slider {
    z-index: 1;
    margin-top: 80px;

    &-box {
        width: 360px;
        height: 227px;
        background: aqua;
        position: relative;
        border-radius: 10px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }

        div {

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 65px;
            height: 65px;
            border: 1px solid #ffc700;
            filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25)) drop-shadow(0px 0px 4px #ffc700);
            border-radius: 50%;
            display: none;
            align-items: center;
            justify-content: center;
        }

        &:hover .slider-hover {
            display: flex;
        }
    }

}

.featured {
    background: url(../assets/img/featured/bg.png) no-repeat left;
    min-height: 750px;
    max-width: 1071px;
    position: relative;
    margin-top: 150px;

    div {
        padding: 61px 75px 105px 85px;
        box-sizing: border-box;
        background: $graytwo;
        border-radius: 10px;
        position: absolute;
        max-width: 476px;
        top: 50%;
        right: -25%;
        transform: translate(-0%, -50%);

        h2 {
            @include font (700, 24px, $blue);
            margin-bottom: 40px;
        }

        p {
            @include font (500, 14px, $textblack);
            max-width: 383px;
        }
    }
}

.info {
    margin-top: 150px;

    &-title {
        @include font (700, 24px, $blue);
        margin-bottom: 50px;
    }

    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    &-block {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        margin-top: 40px;
    }

    &-name {
        @include font (700, 18px, $blue);
        margin-bottom: 10px;
    }

    &-descr {
        max-width: 455px;
        @include font (500, 14px, $textblack)
    }

    &-text {
        max-width: 550px;
        margin-top: 60px;
        margin-bottom: 40px;
        margin: 60px auto 40px;
        text-align: center;
    }

    &-link {
        padding: 17px 53px;
        display: flex;
        align-items: center;
        gap: 5px;
        @include font (700, 14px, $white);
        background: $aqualite;
        margin: 0 auto;
        border-radius: 60px;
        justify-content: center;
        max-width: 231px;
        box-sizing: border-box;
    }
}

.question {
    background: url(../assets/img/question/lol.png) center center no-repeat;
    min-height: 640px;
    background-size: cover;


    &-wrapper {
        position: relative;
    }

    &-block {
        position: absolute;
        right: 0;
        background: rgba(0, 0, 0, 0.3);
        padding: 132px 95px 132px 105px;

        h2 {
            @include font (700, 24px, $white);
        }

        span {
            @include font (500, 14px, $yellow);
            margin-top: 10px;
        }

        input {
            border: none;
            background: rgba(255, 255, 0, 0);
            border-bottom: 1px solid $white;
            @include font (500, 12px, $white);
            outline: none;
            margin-top: 47px;
        }

        input::placeholder {
            @include font (500, 12px, $white)
        }

        div {
            display: flex;
            flex-direction: column;
        }

        button {
            @include font (700, 14px, $white);
            padding: 16px 52px;
            background: $aqualite;
            border-radius: 60px;
            margin-top: 85px;
        }
    }

}


@media screen and (max-width:1470px) {
    .featured {
        div {
            right: 50%;
            transform: translate(50%, -50%);
            width: 476px;

        }
    }
}

@media screen and (max-width:1230px) {
    .hero {
        h1 {
            max-width: 600px;
            font-size: 48px;

            span {
                font-size: 64px;
            }

            div {
                right: -3px;
                top: 35px;
            }
        }
    }

    .vidoe-player {
        height: 1024px;

        video {
            width: 165%;
        }
    }
}

@media screen and (max-width:1150px) {
    .info {
        &-title {
            text-align: center;
        }

        &-wrapper {
            justify-content: center;
        }
    }

    .question {
        &-block {
            left: 50%;
            transform: translate(-50%, 0);
        }
    }

    .vidoe-player .video {
        width: 125%;
    }
}

@media screen and (max-width:925px) {
    .question {
        &-block {
            padding: 132px 30px;
            text-align: center;
            width: 80%;
            transform: translate(-50%, 0);

            h2 {
                font-size: 20px;
            }
        }

        // &-wrapper.container {
        //     padding: 0;
        // }
    }
}

@media screen and (max-width:780px) {
    .hero {
        margin-top: 110px;

        h1 {
            max-width: 333px;
            font-size: 36px;

            span {
                font-size: 72px;
            }
        }
    }

    .hero h1 div {
        right: 21px;
        top: 120px;
    }

    .vidoe-player {
        height: 1024px;
    }

    .vidoe-player .video {
        width: 180%;
    }
}

@media screen and (max-width:660px) {
    .vidoe-player .video {
        width: 210%;
    }
}

@media screen and (max-width:540px) {
    .vidoe-player .video {
        width: 345%;
    }
    .hero h1 {
        max-width: 333px;
        font-size: 28px;
    }

    .hero h1 span {
        font-size: 62px;
    }

    .hero h1 div {
        font-size: 42px;
        right: 72px;
        top: 110px;
    }
    .hero__content {
        flex-wrap: wrap;
        gap: 90px;
    }
    .hero__social {
        margin-left: auto;
    }
}

@media screen and (max-width:470px) {
    .featured {
        div {
            padding: 43px;
            width: 100%;

            h2 {
                margin-bottom: 20px;
            }

            p {
                font-size: 13px;
            }
        }
    }

    .info {
        &-descr {
            font-size: 12px;
        }

        &-text {
            font-size: 12px;
        }
    }
}
@media screen and (max-width:430px) {
    .vidoe-player .video {
        width: 410%;
    }
}
@media screen and (max-width:370px) {
    .vidoe-player .video {
        width: 500%;
    }
}
</style>