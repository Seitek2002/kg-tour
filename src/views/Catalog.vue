<template>
    <div class="tours-bg">
    </div>
    <div class="container">
        <h1 class="tours-bg-name">БИЗДИН ЭКСКУРСИЯЛАР</h1>
    </div>
    <section class="sorting">
        <div class="container ">
            <div class="sorting-content">
                <ul>
                    <template v-for="(item, i) in store.state.sortingList" :key="item">
                        <li @click="handleActive(i, item); getCategoryFilter(item)" class="sorting-item"
                            :class="{ active: isActive === i }">{{ item }}</li>
                    </template>
                </ul>
                <div class="sorting-wrapper">
                    <div class="sorting-block">{{maps}} <img src="../assets/img/sorting/map.svg" alt="map"></div>
                    <div class="sorting-block">{{date}} <img src="../assets/img/sorting/calendar.svg"
                            alt="calendar"></div>
                    <div class="sorting-block">{{persons}} киши <img src="../assets/img/sorting/peaoples.svg" alt="peaoples">
                    </div>
                    <div class="sorting-block">{{minVal}} -  {{maxVal}} <img src="@/assets/img/catalog/money.svg" alt="peaoples">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class=" container">
        <div class="wrapper">
            <section class="filter">
                <h2 class="title filter-title">Чыпкалар</h2>
               <div class="filter-style-content">
                    <div class="filter-wrapper" :class="{ active: showFilterPrice }">
                        <div class="filter-wrapper-head">
                            <h4 class="filter-name">Баасы</h4>
                            <div @click="showFilterPrice = !showFilterPrice" class="filter-btn"
                                :class="{ active: showFilterPrice }">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="filter-price-change">
                            <div>{{ minVal }}</div>
                            <div> {{ maxVal }} </div>
                        </div>
                        <div class="filter-slide"></div>
                        <div class="filter-range-wrapp">
                            <input type="range" @input="setRangeslider" v-model="minVal"
                                class="filter-range filter-range-min" min="0" max="19000" step="100">
                            <input type="range" @input="setRangesliderMin" v-model="maxVal"
                                class="filter-range filter-range-max" min="1000" max="20000" step="100">
                        </div>
                    </div>
                    <div class="filter-wrapper" :class='{ active: showFilterPersons }'>
                        <div class="filter-wrapper-head">
                            <h4 class="filter-name">Адамдардын саны</h4>
                            <div @click="showFilterPersons = !showFilterPersons" class="filter-btn"
                                :class='{ active: showFilterPersons }'>
                                <span></span><span></span>
                            </div>
                        </div>
                        <div class="filter-content filter-content-persons">
                            <template v-for="(people, i) in store.state.personsCounter" :key="people">
                                <button @click="activePersons(i, people)" :class="{ active: inActive === i }"
                                    class="filter-peaple-btn">{{ people }} киши</button>
                            </template>

                        </div>
                    </div>
                    <div class="filter-wrapper filter-wrapper--content" :class="{ active: showFilterMap }">
                        <div class="filter-wrapper-head">
                            <h4 class="filter-name">жер</h4>
                            <div @click="showFilterMap = !showFilterMap" class="filter-btn"
                                :class="{ active: showFilterMap }">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="filter-content filter-radio-content">
                            <label  v-for="(item, i) in store.state.radioList" :key="item" >
                                <input  @click="radioFilter(item, i)" :checked="checkActive === i" type="radio" value="{{item}}">
                                {{item}}
                            </label>
                        </div>
                    </div>
                    <div class="filter-wrapper filter-wrapper--time" :class="{ active: showFilterTime }">
                        <div class="filter-wrapper-head">
                            <h4 class="filter-name">Узактыгы</h4>
                            <div @click="showFilterTime = !showFilterTime" class="filter-btn"
                                :class="{ active: showFilterTime }"><span></span><span></span></div>
                        </div>
                        <div class="filter-content filter-time-content">
                            <div class="filter-time">
                                <label>
                                    ден:
                                    <input type="number" v-model="minTime" class="filter-time-input" />
                                </label>
                                <label>
                                    чейин:
                                    <input type="number" v-model="maxTime"  class="filter-time-input" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filter-wrapper" :class="{ active: showDate}">
                        <div class="filter-wrapper-head">
                            <h4 class="filter-name">Дата</h4>
                            <div @click="showDate = !showDate" class="filter-btn" :class="{ active: showDate}">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="filter-content filter-content-date">
                            <input type="date" v-model="date" >
                        </div>
                    </div>
               </div>
               <div class="filter-use">
                <button @click="getOptionFilter({ maxVal, minVal })" class="filter-add">Показать</button>
                <span @click="resetFilter()" > <img src="@/assets/img/filter/x.svg" alt="X"> Сбросить фильтры</span>
               </div>
            </section>
            <section class="catalog">
                <h2 class="title">Биздин турлар</h2>
                <div class="catalog-wrapper">
                    <CatalogBlock />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import CatalogBlock from '../components/Catalog-Block.vue'
import { useStore } from 'vuex';
export default {
    components: { CatalogBlock },
    setup() {
        const store = useStore();
        const isActive = ref(0)
        const inActive = ref(0);
        const filterShow = ref(false);
        const showFilterPrice = ref(false);
        const showFilterPersons = ref(false);
        const showFilterMap = ref(false);
        const showFilterTime = ref(false);
        const showDate = ref(false);
        const checkActive = ref(0)
        const maxVal = ref(20000)
        const minVal = ref(0);
        const minTime = ref(0)
        const maxTime = ref(350)
        const date = ref("2022-11-07")
        const activeCategory = ref("БАРЫ")
        const persons = ref(1)
        const maps = ref("Кыргызстан")

        const handleActive = (index, category) => {
            isActive.value = index;         
            activeCategory.value = category
        }
        const radioFilter = (item, i) => {
            maps.value = item;
            checkActive.value = i;
        }

        const activePersons = (index, people) => {
            inActive.value = index;
            persons.value = people
        }

        const getCategoryFilter = (catalog) => {
            store.commit("getCategoryFilter", catalog);
        }

        const setRangeslider = () => {
            if (+minVal.value > +maxVal.value - 1000) {
                maxVal.value = +maxVal.value + 1000
            }
            if (+maxVal.value > 20000) {
                maxVal.value = 20000
            }
        }

        const setRangesliderMin = () => {
            if (+maxVal.value < +minVal.value + 1000) {
                minVal.value = +minVal.value - 1000
            }
            if (+minVal.value < 0) {
                minVal.value = 0
            }
        }

        const getOptionFilter = ({ maxVal, minVal}) => {
            const category = activeCategory.value;
            const pers = persons.value;
            const map = maps.value;
            const MaxTime = maxTime.value
            const MinTime = minTime.value
            store.commit("getOptionFilter", { maxVal, minVal, category, pers, map, MinTime, MaxTime})
            console.log(minTime.value, maxTime.value);
        }

        const resetFilter = () => {
            const category = activeCategory.value;
            persons.value = 1;
            maps.value = "Кыргызстан";
            maxTime.value = 350;
            minTime.value = 0;
            maxVal.value = 20000;
            minVal.value = 0;
            inActive.value = 0
            checkActive.value = 0
            date.value = "2022-11-07"
            const pers = persons.value;
            const map = maps.value;
            const MaxTime = maxTime.value
            const MinTime = minTime.value
            store.commit("resetFilter", { maxVal, minVal, category, pers, map, MinTime, MaxTime})
        }
        
        onMounted(() => {
            resetFilter()
        })

        return {
            store,
            isActive,
            inActive,
            persons,
            maps,
            checkActive,
            date,
            minTime,
            maxTime,
            handleActive,
            activePersons,
            getCategoryFilter,
            radioFilter,
            filterShow,
            showFilterPrice,
            showFilterPersons,
            showFilterMap,
            showFilterTime,
            showDate,
            minVal,
            maxVal,
            setRangeslider,
            setRangesliderMin,
            getOptionFilter,
            resetFilter,
        }
    }
    
}
</script>

<style lang="scss">
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.tours-bg {
    background: url(../assets/img/bg/img.png) no-repeat center center;
    background-size: cover;
    width: 100%;
    min-height: 304px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;


}

.tours-bg-name {
    @include font (700, 72px, $white);
    padding: 57px 0 59px;
}

.sorting {
    &-content {
        padding: 60px;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        margin: 40px 0;

        ul {
            display: flex;
            gap: 20px;
            align-items: center;
            border-bottom: 2px solid $gray;
            margin-bottom: 60px;
            margin: 0 auto;
            max-width: 484px;
            justify-content: center;

            li {
                cursor: pointer;
                position: relative;
                @include font (500, 14px, $textblack);

                &.active {
                    color: $blue;

                    &::before {
                        position: absolute;
                        content: "";
                        bottom: -2px;
                        height: 2px;
                        width: 100%;
                        background: $blue;
                    }
                }
            }
        }
    }

    &-wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 60px;

        div {
            display: flex;
            justify-content: space-between;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 15px 25px;
            width: 235px;
            @include font (500, 14px, $textblack)
        }

        button {
            border-radius: 10px;
            background: $aqualite;
            padding: 16px 82px;
            @include font (700, 14px, $white);
            cursor: pointer;
        }
    }
}

.filter {
    max-width: 300px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 25px 35px;
    box-sizing: border-box;

    &-title {
        font-size: 14px;
        margin-bottom: 30px;
    }

    &-wrapper-head {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &-price-change {
        display: flex;
        gap: 15px;

        div {
            padding: 8px 18px;
            border: 1px solid $graytwo;
            border-radius: 40px;
            width: 105px;
            box-sizing: border-box;
            text-align: center;
        }
    }

    &-slide {
        @include box(98%, 3px, $gray);
        border-radius: 3px;
        position: relative;
        margin-top: 30px;
        left: 2px;
    }

    &-progres {
        background: $blue;
        height: 3px;
        left: 0%;
        right: 0%;
        border-radius: 3px;
        position: absolute;
    }

    &-range-wrapp {
        position: relative;

        input {
            position: absolute;
            top: -5px;
            height: 5px;
            background: none;
            pointer-events: none;
            -webkit-appearance: none;
            width: 90%;

            &:nth-child(2) {
                right: 0;
            }

            &[type="range"]::-webkit-slider-thumb {
                @include box(17px, 17px, $blue);
                pointer-events: auto;
                -webkit-appearance: none;
                border-radius: 50%;
            }

            &[type="range"]::-moz-range-thumb {
                @include box(17px, 17px, $blue);
                border: none;
                pointer-events: auto;
                -moz-appearance: none;
                border-radius: 50%;
            }
        }
    }

    &-wrapper {
        overflow: hidden;
        height: 40px;
        transition: top 2s ease 0s;
        border-bottom: 1px solid $graytwo;
        margin-bottom: 40px;

        &.active {
            min-height: 160px;
            padding-bottom: 40px;
        }

        &.filter-wrapper--content.active {
            min-height: 205px !important;
            padding-bottom: 40px;
        }

        &.filter-wrapper--time.active {
            min-height: 75px !important;
            padding-bottom: 40px;
        }
    }
    &-content-date {
        input {
            border: none;
            outline: none;
            padding: 8px 18px;
            border: 1px solid #EDEDED;
            border-radius: 40px;
            width: 180px;
            box-sizing: border-box;
            text-align: center;
            text-align: center;
            margin-top: 50px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &-btn {
        width: 14px;
        height: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;

        span:nth-child(1) {
            @include box(100%, 2px, $blue);
            border-radius: 2px;
        }

        span:nth-child(2) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            @include box(2px, 100%, $blue);
            border-radius: 2px;
            transition: 0.2s;
        }

        &.active span:nth-child(2) {
            @include box(100%, 1px, $blue);
        }
    }
    &-radio-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        label {
            @include font (500, 12px, $textblack);
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
        }
    }
    &-use {
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        span {
            @include font (500, 12px, $textblack);
            display: flex;
            gap: 5px;
            align-items: center;
            cursor: pointer;
        }
    }
    &-content-persons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        button {
            margin-bottom: 7px;
            width: 73px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid $graytwo;
            background: $white;
            border-radius: 40px;
            @include font(500, 12px, $textblack);
            cursor: pointer;

            &:nth-child(11) {
                width: 150px;
            }

            &.active {
                border: 1px solid $blue;
                background: $blue;
                color: $white;
            }
        }
    }

    &-radio-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;

        label {
            @include font(500, 12px, $textblack);
        }
    }

    &-add {
        background: $aqualite;
        border-radius: 40px;
        padding: 12px 0;
        width: 100%;
        @include font(700, 14px, $white);
        margin-bottom: 12px;
    }

    &-time {
        display: flex;
        gap: 10px;
        align-items: center;

        label {
            display: flex;
            align-items: center;
            gap: 5px;

            input {
                border: none;
                outline: none;
                border: 1px solid #ededed;
                border-radius: 40px;
                @include font(500, 12px, $textblack);
                text-align: center;
                width: 100%;
                padding: 8px 0;

                &[type="number"]::-webkit-outer-spin-button,
                &[type="number"]::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }
        }
    }
}

.catalog {
    width: 100%;
    margin-bottom: 90px;

    &-wrapper {
        margin-top: 40px;
    }

    &-placat {
        width: 238px;
        min-height: 303px;
    }

    &-block {
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        max-width: 780px;
        max-height: 303px;
        margin-bottom: 30px;
    }

    &-info {
        padding: 27px 43px 27px 47px;

        span {
            @include font(500, 12px, $yellow);
        }

        h3 {
            @include font(700, 18px, $textblack);
            margin-bottom: 20px;
        }

        ul {
            display: flex;
            gap: 15px;

            li {
                @include font(500, 10px, $textblack);

                div {
                    display: flex;
                    gap: 6px;
                    @include font(700, 18px, $blue);

                    img {
                        max-width: 22px;
                    }
                }

                &:nth-child(3) {
                    margin-left: 25px;
                }
            }
        }

        p {
            @include font(500, 12px, $textblack);
            padding-left: 20px;
            position: relative;
            margin: 20px 0;

            &::after {
                content: "";
                position: absolute;
                @include box(2px, 100%, $blue);
                left: 0;
                top: 0;
            }
        }

        div {
            display: flex;
            align-items: center;
            gap: 10px;

            

            img {
                width: 40px;
                height: 40px;
            }
        }
    }
    &-link {
        background: $aqualite;
        padding: 12px 43px;
        border-radius: 40px;
        @include font(700, 12px, $white);
    }
}
@media screen and (max-width: 1150px) {
.catalog {
    h2 {
        text-align: center;
    }
    &-wrapper {
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }
}

.filter {
    width: 100%;
    max-width: none;
    margin: 130px 0 150px;
    &-style-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &-wrapper {
        width: 400px;
    }
    &-use {
        span {
            display: flex;
            align-items: center;
            gap: 6px;
        }
        button {
        max-width: 225px;
        }
    }
    
}
}
@media screen and (max-width: 1050px) {
.sorting {
    margin: 100px 0 ;
    &-wrapper {
        flex-direction: column;
    }
    &-content {
        max-width: 500px;
        margin: 0 auto;
    }
}
}
@media screen and (max-width: 970px) {
.filter {
    max-width: 610px;
    h2 {
        text-align: center;
    }
    &-style-content {
        justify-content: center;
    }
}
}
@media screen and (max-width: 905px) {
.sorting {
    margin-top: 325px;
}
.catalog {
    &-block {
        flex-wrap: wrap;
        max-width: 450px;
        max-height: 650px;

        ul {
            li {
                div {
                    font-size: 15px;
                }
                &:nth-child(3) {
                    margin: 0;
                }

            }
        }
    }
    .catalog-placat {
        width: 450px;
        max-height: 350px;
    }
}
.tours-bg {
    min-height: 510px;
    transition: .3s;
    background: url(../assets/img/bg/secondImg.png)no-repeat center center;
    background-size: cover;
}
.tours-bg-name {
    font-size: 48px;
    padding: 0;
    margin-top: 142px;
}
}
@media screen and (max-width:780px) {
    .sorting {
        ul {
            flex-wrap: wrap;
            border: none;
            li {
                border-bottom: 2px solid $gray;
            }
        }
    }
}
@media screen and (max-width:585px) {
    .catalog {
        ul {
            flex-wrap: wrap;
        }
        &-placat {
        width: 100%;
        height: 240px;
        }
    }
    .filter {
        margin: 70px 0 90px;
    }
}
@media screen and (max-width:500px)  {
    .tours-bg-name {
        font-size: 32px;
        margin-top: 81px;
    }
    .tours-bg {
        min-height: 370px;
    }
    
}
@media screen and (max-width:410px)  {
    .catalog {
        &-info {
            padding: 15px 15px 30px ;
        }
    }
    .sorting {
        &-content {
            padding: 35px;
        }
        &-wrapper {
            div {
                width: 100%;
            }
        }
    }
}

</style>