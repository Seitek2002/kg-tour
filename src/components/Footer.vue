<template>  
    <footer class="footer">
        <div class="container">
            <div class="footer-wrapper">
                <img src="../assets/img/footer/big-logo.svg" alt="logo">
                <ul class="footer-list" >
                    <li><router-link to="/" >Башкы</router-link></li>
                    <li><router-link to="/catalog" >Экскурсиялар</router-link></li>
                    <li><router-link to="/user" >Жеке бөлмө</router-link></li>
                </ul>
                <ul class="footer_list" >
                    <li><a target="_blank" href="#" class="footer-social"><img src="../assets/img/footer/whatsupp.svg" alt="whatsupp"> +7 964 944 18 74</a></li>
                    <li><a target="_blank" href="#" class="footer-social"><img src="../assets/img/footer/telegram.svg" alt="telegram"> +7 918 919 98 28</a></li>
                    <li><a target="_blank" href="#" class="footer-social"><img src="../assets/img/footer/telegram.svg" alt="telegram"> Телеграм-бот PeroTravel</a></li>
                </ul>
                <div> 
                    <a href="#" target="_blank"><img src="../assets/img/footer/gmail.svg" alt="gmail"> 31unknown12@gmail.com</a>
                    <ul>
                        <li><a href="#" target="_blank"><img src="../assets/img/footer/wk.svg" alt="wk"></a></li>
                        <li><a href="#" target="_blank"><img src="../assets/img/footer/ims.svg" alt="instagram"></a></li>
                        <li><a href="#" target="_blank"><img src="../assets/img/footer/facebook.svg" alt="facebook"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/variables.scss';
@import '../assets/mixins.scss';
.footer {
    padding: 30px;
    &-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
            a {
                @include font (500, 14px, $textblack);
                margin-bottom: 25px;
                display: flex;
            }
            ul {
                display: flex;
                gap: 20px;
            }
        }
    }
    ul{
        li {
            margin-top: 10px;
            a {
                @include font (500, 14px, $textblack);
                transition: .3s;
                &:hover {
                    color: $yellow;
                }
            }
        }
    }
    
}
@media screen and (max-width:880px) {
    .footer {
        &-wrapper {
            flex-wrap: wrap;
            gap: 50px;
            justify-content: start;
            max-width: 500px;
        }
    }
}
@media screen and (max-width:400px) {
    .footer {
        &-wrapper {
            text-align: center;
            justify-content: center;
            max-width: 250px;
            margin: 0 auto;
            div {
                ul {
                    justify-content: centerБашкы
Экскурсиялар
Жеке бөлмө
                }
            }
        }
    }
}
</style>