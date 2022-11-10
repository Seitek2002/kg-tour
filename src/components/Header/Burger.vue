<template>
    <div class="burger">
        <div @click="burgerActive = !burgerActive" class="burger__menu"  :class="{active: burgerActive}">
            <span class="burger__line"></span>
            <span class="burger__line"></span>
            <span class="burger__line"></span>
        </div>

        <div class="burger__wrapper" :class="{ active: burgerActive}">
            <ul class="burger__list">
                <li>
                    <router-link @click="burgerActive = !burgerActive" to="/">Башкы</router-link>
                </li>
                <li>
                    <router-link @click="burgerActive = !burgerActive" to="/catalog">Экскурсиялар</router-link>
                </li>
                <li>
                    <router-link @click="burgerActive = !burgerActive" to="/user">Жеке бөлмө</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
    const burgerActive = ref(false)

        return {
            burgerActive,
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/variables.scss';
@import '../../assets/mixins.scss';

.burger {
    display: none;
    &__menu {
        display: flex;
        flex-direction: column;
        width: 40px;
        position: relative;
        gap: 5px;
        z-index: 2;
        &.active .burger__line:nth-child(2) {
            display: none;
        }
        &.active .burger__line:nth-child(1) {
            position: absolute;
            transform: rotate(45deg);
        }
        &.active .burger__line:nth-child(3) {
            position: absolute;
            transform: rotate(-45deg);
        }
        &.active .burger__wrapper {
            height: 100vh;
        }
    }
    &__wrapper {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 0;
        background: gray;
        transition: 0.3s;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        &.active {
            height: 100vh;  
        }
    }
    &__line {
        background: $white;
        border-radius: 10px;
        width: 40px;
        transition: 0.3s;
        height: 5px;
    }
    &__list {
        gap: 20px;
        display: flex;
        flex-direction: column;
        a {
            color: $white;
            &:hover {
                color: $yellow;
            }
        }
    }
}
@media screen and (max-width: 668px) {
    .burger {
        display: block;
    }
}
</style>