<template>
    <section class="gallery">
        <div class="container">
            <div class="gallery-info">
                <h2 class="title">Галерея</h2>
                <router-link to="#" class="link">Баарын көрүү</router-link>
            </div>
        </div>
        <div class="gallery-wrapper">
            <div class="gallery-left">
                <img src="@/assets/img/gallery/1.png" alt="img">
                <div class="gallery-content">
                    <img src="@/assets/img/gallery/5.png" alt="img">
                    <div class="gallery-inner">
                        <img src="@/assets/img/gallery/6.png" alt="img">
                        <img src="@/assets/img/gallery/7.png" alt="img">
                    </div>
                </div>
            </div>
            <img class="gallery-center" src="@/assets/img/gallery/2.png" alt="img">
            <div class="gallery-right">
                <div class="gallery-content">
                    <img src="@/assets/img/gallery/3.png" alt="img">
                    <img src="@/assets/img/gallery/4.png" alt="img">
                    <img src="@/assets/img/gallery/1.png" alt="img">
                </div>
                <img src="@/assets/img/gallery/8.png" alt="img">
            </div>
        </div>
        <div class="gallery-wrapper">

        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.gallery {
    margin: 150px 15px; 
    img {
        max-width: 100%;
    }
    &-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 90px;
    }
    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        &:nth-child(3) {
            display: none;
        }
    }    
    &-left,
    &-right {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    &-content {
        display: flex;
        gap: 20px;
        img {
            &:nth-child(3) {
                display: none;
            }
        }
    }
    &-inner {
        display: flex;
        flex-direction:column;
        gap: 20px;
    }
    @media screen and (max-width:1430px) {
        .gallery {
            &-left {
                display: none;
            }
        }
    }
    @media screen and (max-width:920px) {
        .gallery {
            &-center {
                display: none;  
            }
        }
    }
    @media screen and (max-width:550px) {
        .gallery {
            &-content {
                img {
                    display: none;
                    &:nth-child(3) {
                        display: block;
                    }
                }
            }
        }
    }
}
</style>