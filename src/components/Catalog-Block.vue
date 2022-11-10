<template>
    <div v-for="item in store.state.filteredCatalog" :key="item.id" class="catalog-block">
        <img class="catalog-placat" :src="item.img" alt="img">
        <div class="catalog-info">
            <span>{{ item.category }}</span>
            <h3 class="catalog-name">{{ item.name }}</h3>
            <ul>
                <li>
                    <div><img src="@/assets/img/catalog/money.svg" alt="money">{{ item.abultPrice }} сом</div>
                    Чоңдорго билет
                </li>
                <li>
                    <div><img src="@/assets/img/catalog/money.svg" alt="money">{{ item.childPrice }} сом</div>
                    Бала билет
                </li>
                <li>
                    <div><img src="@/assets/img/catalog/time.svg" alt="time">{{ item.time }} часа</div>
                </li>
            </ul>
            <p>{{ item.descr.slice(0, 100) + "..." }}</p>
            <div>
                <router-link :to="`/details/${item.id}`" class="catalog-link">Подробнее</router-link>

                <div v-if="store.state.login" class="catalog-img-wrapp">
                    <img class="img-favorite" src="../assets/img/global-img/favotite.svg" alt="favorites">
                </div>
                <router-link v-else to="/user" class="catalog-img-wrapp"> 
                    <img class="img-favorite" src="../assets/img/global-img/favotite.svg" alt="favorites">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'
import { ref } from 'vue';
export default {
    setup() {
        const store = useStore();
        onMounted(() => {
            store.commit("getCategoryFilter", "ВСЕ");
        })

        return {
            store,
        }
    }

}
</script>

<style>

</style>