<template>
    <section class="reviews">
        <div class="container reviews-info">
            <h2 class="title">Сын-пикирлер</h2>
            <a href="#" class="link">Баарын көрүү</a>
        </div>
        <div class="reviews-content">
            <swiper :slidesPerView="1" :centeredSlides="true" :spaceBetween="80" navigation :scrollbar="{ draggable: true }"
                :modules="modules"  
                :breakpoints="{
                    '1350': {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }">
                <swiper-slide  v-for="item in store.state.reviewsList" :key="item.id">
                        <div class="reviews-block">
                            <div class="reviews-block-img">
                                <img :src="item.img" alt="img">
                            </div>
                            <div>
                                <h3>{{ item.name }}, {{ item.age }} лет</h3>
                                <p>{{ item.reviews.slice(0, 300) + "..." }}</p>
                            </div>
                        </div>
                </swiper-slide>
            </swiper>

        </div>
    </section>

</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Scrollbar, Navigation } from "swiper";
import { useStore } from 'vuex';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const store = useStore()
        return {
            modules: [Scrollbar, Navigation],
            store
        };
    },
};
</script>
<style lang="scss" >
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.reviews {
    padding-left:160px;
    margin-bottom: 150px;
    &-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 90px;
        h2 {
            margin-left: -100px;
        }
    }

    &-block {
        padding: 38px 27px 39px 45px;
        box-sizing: border-box;
        background: $graytwo;
        border-radius: 10px;
        max-width: 740px;
        display: flex;
        justify-content: space-between;

        &-img {
            overflow: hidden;
            width: 245px;
            height: 245px;
            border-radius: 10px;
            margin-right: 30px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        div {
            h3 {
                @include font (700, 14px, $textblack);
                margin-bottom: 20px;
            }

            p {
                @include font (500, 14px, $textblack);
                max-width: 395px;
            }
        }
    }

    &-swiper {
        padding-bottom: 233px;
    }

    &-pagination {
        bottom: 150px !important;
    }

    &-btn-next {
        bottom: 130px;
        left: 254px;
        position: absolute;

        img {
            transform: rotate(180deg);
        }
    }

    &-btn-prev {
        bottom: 130px;
        left: 170px;
        position: absolute;
    }
}
@media screen and (max-width:1350px) {
    .swiper-slide {
        display: flex;
        justify-content: center;
    }
    .reviews {
        padding:0 20px;
        &-info {
            h2 {
                margin: 0;
            }
        }
    }
}
@media screen and (max-width:670px) {
    .reviews {
        &-block {
            flex-direction: column;
            &-img {
                width: 80px;
                height: 80px;
                margin-bottom: 20px;
            }
        }
    }
}
@media screen and (max-width:450px) {
    .reviews {
        &-block {
            padding: 15px;
        }
    }
}
</style>  