<template>
    <header class="header">
        <div class="container">
                <div class="header__content">
                    <router-link to="/"><img src="@/assets/img/global-img/logo.svg" alt="logo" class="header__logo"></router-link>
                    <ul class="header__list">
                        <li><router-link to="/">Башкы</router-link></li>
                        <li><router-link to="/catalog">Экскурсиялар</router-link></li>
                        <li><router-link to="/user">Жеке бөлмө</router-link></li>
                    </ul>
                    <burger />
                </div>
        </div>
    </header>
</template>

<script>
import Burger from "../Header/Burger.vue"

export default {
  components: { Burger }

}
</script>

<style lang="scss">
@import '../../assets/variables.scss';
@import '../../assets/mixins.scss';

.header {
    padding-top: 27px;
    z-index: 2;
    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__list {
        display: flex;
        align-items: center;
        gap: 20px;
            a {
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                color: $white;
                &:hover {
                    color: yellow;
                    transition: .3s;
                }
            }
    }
}
@media screen and (max-width:668px) {
    .header__list {
        display: none;
    }
}
</style>