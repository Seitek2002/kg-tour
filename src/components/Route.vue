<template>
    <div class="container"><h2 class="title">Маршруттун сүрөттөлүшү</h2></div>
    <section class="route">
        <div class="route-descr">
            <ul>
                <li>orod Gagra, Colonnade, ресторан "Гагрипш", Ольденбург князынын паркы;</li>
                <li>«Коштошуу Родина», «Чабгарский» карнизи, «Бзйб» дарыясындагы асма кепуре;</li>
                <li>Сыр, бал, шарап, чача (турдун баасына киргизилген), Көк көл, Юпшарский каньоны («Таш кап»), «Рица» көлү, «Кыз жана адамдын көз жашы» шаркыратмасы.</li>
            </ul>
            <span>Тандоо үчүн кийинки:</span>
            <ul>
                <li>"Жаңы Атос" монастыры, Жаңы Атос үңкүрү, "Адам жасаган" шаркыратма, "Зелот Симон" храмы, Ак куу көлү.</li>
                <li>Айылдагы термалдык булак. Приморское.</li>
            </ul>
        </div>
        <div class="route-slide">
            <swiper
                :slidesPerView="1.2"
                :spaceBetween="30"
                :centeredSlides="true"
                navigation
                :scrollbar="{ draggable: true }"
                :modules="modules"
                @swiper="onSwiper" 
                @slideChange="onSlideChange"
                class="swiper-route"
            >
            <swiper-slide v-for="i in 7" :key="i">
                <div class="route-img">
                    <img src="@/assets/img/route/img.png" alt="img">
                    <span>{{i}}</span>
                </div>
            </swiper-slide>
            </swiper>
        </div>
    </section>

  </template>
  <script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  import 'swiper/css/navigation';
  import 'swiper/css/scrollbar';
  
  // import required modules
  import {  Navigation, Scrollbar,} from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation,  Scrollbar,],
      };
    },
  };
  </script>
  
<style lang="scss" scoped>
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

h2 {
    margin-top: 150px;
}
.route {
    padding-left: calc((100% - 1120px) / 2);
    margin-bottom:150px;
    display: flex;
    justify-content: space-between;
    &-descr {
        margin-top: 70px;
        max-width: 512px;
        span {
            margin: 0 0 20px 38px;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: $textblack;
        }
        ul {
            margin-left: 38px;
            li {
                @include font(500, 14px, $textblack);
                margin-top: 21px;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background: $yellow;
                    border-radius: 50%;
                    left: -38px;
                }
            }
            margin-bottom: 40px;
        }
    }
    &-slide {
        max-width: 600px;
        padding-left: 10px;
    }
    &-img {
        position: relative;
        width: 413px;
        height: 570px;
        img {
            width: 100%;
            height: 100%;
        }
        span {
            position: absolute;
            left: 23px;
            bottom: 22px;
            @include font (500, 14px, $yellow);
        }
    }
    &-swiper {
        padding-bottom: 233px ;
    }
    &-btn-next {
        transform: rotate(180deg);
        position: absolute;
        bottom: 120px;
        left: 105px;
    }
}
@media screen and (max-width:960px) {
    h2 {
        text-align: center;
    }
    .route {
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
        .route-slide  {
            max-width: 97%;
        }
    }
}
@media screen and (max-width:440px) {
    .route {
        &-img {
            height: 390px;
        }
    }
}
</style>