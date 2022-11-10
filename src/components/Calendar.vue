<template>
   <section class="calendar">
        <div>
            <img class="calendar-bg" src="@/assets/img/calendar/image.png" alt="#">
            <img src="@/assets/img/calendar/calendar.png" alt="calendar" class="calendar-calendar">
        </div>
        <h2 class="calendar-title  title">Саякат календары</h2>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
@import "../assets/variables.scss";
@import "../assets/mixins.scss";

.calendar {
    padding-right: calc((100% - 1120px) / 2);
    display: flex;
    justify-content: space-between;
    &-bg {
        max-width: 100%;
    }
    &-title {
        margin-top: 150px;
        background: $white;
        position: absolute;
        right: 160px;
    }
    div {
        position: relative;
    }
    &-calendar {
        position: absolute;
        top: 270px;
        right: -500px;
        z-index: 1;
    }

}
@media screen and (max-width:1330px) {
    .calendar {
        &-calendar {
            right: 15%;
        }
    }
}
@media screen and (max-width:1150px) {
    .calendar {
        &-title {
            right: 35%;
        }
        &-calendar {
            width: 50%;
        }
    }
}
@media screen and (max-width:820px) {
    .calendar {
        &-title {
            right: 30%;
            margin-top: 30px;
        }
        &-calendar {
            left: 220px;
            top: 85px;
        }
    }
}
@media screen and (max-width:666px) {
    .calendar {
        &-title {
            left: 50%;
            background: unset;
            transform: translate(-100%, 0px);
            margin-top: 30px;
        }
        &-calendar {
            left: 25%;
            top: 85px;
        }
    }
}
@media screen and (max-width:450px) {
    .calendar {
        &-title {
            font-size: 12px;
            transform: translate(-50%, 0px);
        }
        &-calendar {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
        }
    }
}
</style>