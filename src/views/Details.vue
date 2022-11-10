<template>
    <div class="wrapper-bg">

    </div>
    <section class="choice">
        <div class="container">
            <div class="choice-content">
                <span>{{ detailsItem.category }}</span>
                <h1>{{ detailsItem.name }}</h1>
                <div>
                    <router-link class="choice-link" to="/catalog">Башка экскурсияларга <img
                            src="../assets/img/global-img/line.svg" alt="#"></router-link>
                    <router-link to="/user">
                        <img src="@/assets/img/global-img/favotite.svg" alt="favorite">
                    </router-link>
                    
                </div>
            </div>
        </div>
    </section>
    <section class="description">
        <div class="container">
            <h2 class="title description-title">Экскурсиянын сүрөттөлүшү</h2>
            <div class="description-content">
                <p>
                    {{ detailsItem.descr }}
                </p>
                <div class="description-wrapper">
                    <div class="description-block">
                        <img class="description-baal" src="@/assets/img/expenses/ball.svg" alt="bala">
                        <div class="description-info">
                            <div class="description-inner">
                                <img src="@/assets/img/description/money.svg" alt="money">
                                {{ detailsItem.abultPrice }} coм
                            </div>
                            Чоңдорго билет
                        </div>
                    </div>
                    <div class="description-block">
                        <img class="description-baal" src="@/assets/img/expenses/ball.svg" alt="bala">
                        <div class="description-info">
                            <div class="description-inner">
                                <img src="@/assets/img/description/money.svg" alt="money">
                                {{ detailsItem.childPrice }} coм
                            </div>
                            Балдар билети
                        </div>
                    </div>
                    <div class="description-block">
                        <img class="description-baal" src="@/assets/img/expenses/ball.svg" alt="bala">
                        <span>
                            <img src="@/assets/img/description/time.svg" alt="time">
                            {{ detailsItem.time }} саат
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Calendar />

    <Route />
    
    <section class="expenses">
        <div class="container">
            <div>
                <h2 class="title">Кошумча чыгымдар (милдеттүү эмес)</h2>
                <div class="expenses-content">
                    <div class="expenses-block">
                        <img class="baal" src="@/assets/img/expenses/ball.svg" alt="img">
                        <div class="expenses-wrapper">
                            <div class="expenses-descr">
                                <img src="@/assets/img/excursion/money.svg" alt="monqy">
                                200 сом
                            </div>
                            Сталиндин дачасы
                        </div>
                    </div>
                    <div class="expenses-block">
                        <img class="baal" src="@/assets/img/expenses/ball.svg" alt="img">
                        <div class="expenses-wrapper">
                            <div class="expenses-descr">
                                <img src="@/assets/img/excursion/money.svg" alt="monqy">
                                200 сом
                            </div>
                            сүттүү шаркыратма
                        </div>
                    </div>
                    <div class="expenses-block">
                        <img class="baal" src="@/assets/img/expenses/ball.svg" alt="img">
                        <div class="expenses-wrapper">
                            <div class="expenses-descr">
                                <img src="@/assets/img/excursion/money.svg" alt="monqy">
                                500 сом
                            </div>
                            Жаңы Афина үңкүрү
                        </div>
                    </div>
                    <div class="expenses-block">
                        <img class="baal" src="@/assets/img/expenses/ball.svg" alt="img">
                        <div class="expenses-wrapper">
                            <div class="expenses-descr">
                                <img src="@/assets/img/excursion/money.svg" alt="monqy">
                                500 сом
                            </div>
                            Жылуулук булагы
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
 
    <section class="information">
        <div class="container">
            <h2 class="title information-title">Mаанилүү маалымат</h2>
            <div class="information-wrapper">
                <div class="information-content">
                    <span>Чек араны кесип өткөндө (Кыргызстан - башка мамлекет) сиз менен бирге болушу керек:</span>
                    <div class="information-info">
                        <img src="@/assets/img/information/id.svg" alt="id">
                        <h3>Сиздин өлкөнүн жаранынын паспорту</h3>
                    </div>
                    <div class="information-info">
                        <img src="@/assets/img/information/id.svg" alt="id">
                        <div>
                            <h3>14 жашка чейинки жарандар туулгандыгы тууралуу күбөлүк</h3>
                            <p>Жашы жете элек балдар чек арадан ата-энелеринин коштоосунда, алардын коштоосунда өтүшөт
                                 мыйзамдуу өкүл ( экспорт өлкөнү көрсөтүү менен нотариалдык жактан күбөлөндүрүлгөн ишеним кат
                                 бала).</p>
                        </div>
                    </div>
                </div>
                <div class="information-content">
                    <div class="information-block">
                        <img src="@/assets/img/information/gg.svg" alt="!">
                        Украинанын жарандарынан башка чет өлкөлүк жарандардын Кыргызстанга кирүү<strong>чектөө</strong>
                         ДХР жана ЛХР республикаларынын.
                    </div>
                    <div class="information-block">
                        <img src="@/assets/img/information/gg.svg" alt="!">
                        Кыргызстандан Украинага кайтып келе жатканда ПЦР тестин тапшыруунун кереги жок, карантинге кирбеңиз
                         болот
                         (Россия Федерациясынын Өкмөтүнүн 08.01.2020-ж. 1996-Р токтому).
                    </div>
                </div>
            </div>

        </div>
    </section>

    <Gallery />
    
    <Reviews />

    <section class="booking">
        <img class="booking-bg" src="@/assets/img/boooking/image.png" alt="image">
        <div class="booking-wrapper">
            <h2 class="title">Забронировать тур</h2>
            <div class="booking-content">
                <span>Забронировать тур</span>
                <img src="@/assets/img/boooking/date.svg" alt="date">
            </div>
            <div class="booking-content">
                <span>{{detailsItem.person}}</span>
                <img src="@/assets/img/boooking/persons.svg" alt="persons">
            </div>
            <div class="booking-content">
                <span>{{detailsItem.area}}</span>
                <img class="booking-img-kg" src="https://cdn-icons-png.flaticon.com/512/5959/5959846.png" alt="persons">
            </div>
            <div class="booking-booking">
                <button><router-link to="/user" >Забронировать</router-link></button>
                <router-link to="/user"><img src="@/assets/img/global-img/favotite.svg" alt="favorite"></router-link>
            </div>
        </div>
    </section>

</template>

<script>
import Gallery from '@/components/Gallery.vue';
import Calendar from '@/components/Calendar.vue';
import { useStore } from 'vuex';
import Reviews from '@/components/Reviews.vue';
import Route from '@/components/Route.vue';

export default {
    components: { Gallery, Reviews, Calendar, Route },
    props: ["id"],
    setup(props) {
        const store = useStore()
        const detailsItem = store.getters.GET_SINGLE_ITEM(props.id)
        return {
            store,
            detailsItem
        }
    }
}
</script>

<style lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.wrapper-bg {
    background: url(@/assets/img/bg/bg.png) no-repeat center center;
    background-size: cover;
    padding: 260px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

.choice {
    margin-top: 128px;

    &-content {
        max-width: 761px;

        span {
            @include font (700, 24px, $yellow);
            margin-bottom: 10px;
        }

        h1 {
            @include font (700, 48px, $white);
            margin-bottom: 40px;
        }

        div {
            display: flex;
            align-items: center;
            gap: 15px;
        }
    }

    &-link {
        @include font (700, 14px, $white);
        background: $aqualite;
        padding: 16px 40px;
        display: flex;
        align-items: center;
        gap: 5px;
        border-radius: 60px;
    }
}

.description {
    margin: 300px 0 150px;

    &-content {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
        align-items: center;

        p {
            max-width: 382px;
            @include font(500, 14px, $textblack);
        }
    }

    &-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 75px;
    }

    &-block {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        width: 175px;
        height: 100px;
        text-align: center;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            @include font (700, 24px, $blue);
            display: flex;
            gap: 15px;
        }
    }

    &-baal {
        position: absolute;
        left: -17px;
        top: -17px;
        z-index: -1;
    }

    &-inner {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        @include font (700, 24px, $blue)
    }

    &-info {
        @include font (500, 14px, $textblack);
    }
}

.expenses {
    &-block {
        margin-top: 100px;
        position: relative;
        padding: 24px;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        max-width: 220px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .baal {
            position: absolute;
            top: -17px;
            left: -16px;
            z-index: -1;
        }
    }

    &-descr {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0 auto;
        justify-content: center;
    }

    &-content {
        display: flex;
        align-items: center;
        gap: 41px;
        flex-wrap: wrap;
    }
}

.information {
    margin-top: 150px;

    &-wrapper {
        display: flex;
        justify-content: space-between;
    }

    &-title {
        margin-bottom: 90px;
    }

    &-content {
        span {
            @include font(500, 18px, $black);
            max-width: 550px;
        }

        div {
            margin-top: 45px;

            h3 {
                @include font(700, 18px, $blue);
                max-width: 455px;
            }

            p {
                @include font(500, 14px, $textblack);
                max-width: 455px;
                margin-top: 20px;
            }
        }
    }

    &-info {
        display: flex;
        gap: 30px;
    }

    &-block {
        @include font(500, 14px, $textblack);
        padding: 23px 58px 23px 25px;
        max-width: 358px;
        box-sizing: border-box;
        position: relative;
        background: $graytwo;
        border-radius: 10px;

        img {
            position: absolute;
            top: 6px;
            right: 27px;
        }
    }
}

.booking {
    display: flex;
    align-items: center;
    gap: 120px;

    &-wrapper {
        h2 {
            margin-bottom: 90px;
        }
    }
    &-bg {
        max-width: 100%;
    }
    &-img-kg {
        width: 24px;
    }

    &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 360px;
        height: 50px;
        padding: 0 30px;
        margin-bottom: 20px;
        a {
            img {
                max-width: 24px;
            }
        }
    }

    &-booking {
        display: flex;
        margin-top: 40px;
        gap: 45px;

        button {
            padding: 17px 73px;
            background: $aqualite;
            border-radius: 60px;
            a {
                @include font (700, 14px, $white);
            }
        }
    }
}
@media screen and (max-width:1365px) {
    .booking{
        gap: 80px;
        &-bg {
            max-width: 45%;
        }

    }    
}
@media screen and (max-width:1150px) {
    .description {
        &-content {
            gap: 60px;
            justify-content: center;
            flex-wrap: wrap;
            
        }
        &-title {
            text-align: center;
        }
        &-wrapper {
            justify-content: center;
        }
    }
}
@media screen and (max-width:1025px) {
    .expenses {
        &-content {
            flex-wrap: wrap;
            gap: 20px;
        }
    }
}
@media screen and (max-width:950px) {
    .information {
        &-wrapper {
            flex-wrap: wrap;
            text-align: center;
            justify-content: center;
        }
        .information-content div {
            flex-wrap: wrap;
            max-width: 370px;
        }
        &-info {
            margin-top: 45px;
            flex-wrap: wrap;
            text-align: center;
            max-width: 370px;
            justify-content: center;
            margin: 45px auto 0;
        }
        &-title {
            text-align: center;
        }
    }
    .booking {
        flex-wrap: wrap;
        justify-content: center;
        &-booking {
            justify-content: center;
        }
        &-bg {
            margin-bottom: -40px;
        }
        h2 {
            text-align: center;
        }
    }
}
@media screen and (max-width:660px) {
    .expenses {
        &-content {
            justify-content: center;text-align: center;
        }
    }
}
@media screen and (max-width:620px) {
    .wrapper-bg {
        height: 260px;
    }
    .choice {
        h1 {
            font-size: 36px;
            margin-bottom: 70px;
        }
        &-content {
            div {
                flex-wrap: wrap;
            }
        }
    }
    .description {
        margin-top: 510px;
    }
}
@media screen and (max-width:450px) {
    .booking {
        &-bg {
            max-width: 100%;
        }
        &-content {
            width: 250px;
            margin: 0 auto 20px ;
        }
        &-booking {
            flex-wrap: wrap;
            justify-content: center;
        }
        &-booking button {
            padding: 17px 50px;
        }
        
    }
}
</style>