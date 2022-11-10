<template>
    <section class="excursion">
        <div class="container">
            <div class="excursion-wrapper">
                <h2 class="excursion-title">Популярдуу экскурсиялар</h2>
                <router-link to="/catalog" class="excursion-link">Баарын көрүү</router-link>
            </div>
        </div>

        <Swiper :modules="modules" :slides-per-view="1" :space-between="20" navigation :breakpoints="{
            '530': {
                slidesPerView: 1.7,
                spaceBetween: 20,
            },
            '680': {
                slidesPerView: 2.2,
                spaceBetween: 20,
            },
            '830': {
                slidesPerView: 2.7,
                spaceBetween: 20,
            },
            '1200': {
                slidesPerView: 3.4,
                spaceBetween: 20,
            },
        }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
            <SwiperSlide v-for="item in $store.state.catalog" :key="item.id">
                <div class="excursion-box">
                    <img class="excursion-fon" :src="item.img" alt="image">
                    <div class="excursion-content">
                        <h5 class="excursion-name">{{ item.category }}</h5>
                        <h3 class="excursion-title">{{ item.name }}</h3>
                        <div class="excursion-info">
                            <span> <img src="@/assets//img/excursion/time.svg" alt="time"> {{ item.time }} саат</span>
                            <span> <img src="@/assets/img/excursion/money.svg" alt="money">{{ item.abultPrice }}
                                cом</span>
                        </div>
                        <p class="excursion-desciption">
                            {{ item.descr.slice(0, 200) + "..." }}
                        </p>
                        <router-link :to="`/details/${item.id}`" class="catalog-link">Дагы</router-link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>

</template>
<script>

const store = useStore()
// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useStore } from 'vuex';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
        store
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Scrollbar, A11y],
        };
    },
};
</script>
<style lang="scss" >
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.excursion {
    margin-top: 150px;
    padding-left: 160px;

    &-swiper {
        padding-bottom: 233px;
    }

    &-swiper-wrapper {
        display: flex;
        gap: 20px;
        overflow: hidden;
    }

    &-box {
        max-width: 360px;
        height: 220px;
        overflow: hidden;
        position: relative;
        padding: 210px 16px 42px 16px;
        border-radius: 10px;
    }

    &-fon {
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    &-info {
        display: flex;
        align-items: center;
        gap: 15px;

        span {
            display: flex;
            align-items: center;
            @include font(500, 12px, $white);

            img {
                width: 15px;
                margin-right: 5px;
            }
        }
    }

    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 90px;

        h2 {
            @include font(700, 24px, $blue);
            margin-left: -100px;
        }

        a {
            @include font(500, 12px, $textblack);
        }
    }

    &-content {
        h5 {
            @include font(500, 12px, $white);
        }

        h3 {
            @include font(700, 14px, $yellow);
            margin-bottom: 10px;
        }

        p {
            @include font(500, 12px, $white);
            margin: 20px 0 35px;
        }

        a {
            border-radius: 40px;
            background: $aqualite;
            padding: 12px 43px;
            @include font(700, 12px, $white);
        }
    }
}

.swiper {
    &-wrapper {
        padding-bottom: 90px;
    }

    .swiper-horizontal>.swiper-scrollbar,
    .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 80%;
        left: auto;
        right: 0;
        bottom: 25px;
    }

    &-scrollbar-drag {
        background: $blue;
    }

    &-button-prev,
    &-button-next {
        bottom: 5px;
        top: auto;
        left: 0;
    }

    &-button-next {
        left: 65px
    }
}

@media screen and (max-width:1320px) {
    .excursion {
        padding-left: 20px;
        &-wrapper {
            h2 {
                margin-left: -20px;
            }
        }
    }
}

@media screen and (max-width:1200px) {
    .excursion {
        padding-left: 20px;
    }
}

@media screen and (max-width:1000px) {

    .swiper .swiper-horizontal>.swiper-scrollbar,
    .swiper .swiper-scrollbar.swiper-scrollbar-horizontal {
        width: 65%;
    }
}

@media screen and (max-width:680px) {   
    .excursion {
        padding: 0 20px;

        &-box {
            padding: 200px 16px 42px 16px;
        }
        &-wrapper  {
            h2 {
                max-width: 165px;
                font-size: 16px;
            }
        }
    }

    .swiper-backface-hidden .swiper-slide {
        display: flex;
        justify-content: center;
    }
}

@media screen and (max-width:370px) {
    .excursion-box {
        padding: 145px 16px 42px 16px;
    }
    .swiper-button-next {
        left: 50px;
    }
}
</style>