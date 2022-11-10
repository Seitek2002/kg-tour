import { createStore } from "vuex";
import bus from "../assets/img/info/bus.svg";
import car from "../assets/img/info/car.svg";
import yacht from "../assets/img/info/yacht.svg";
import volcano from "../assets/img/info/volcano.svg";
export default createStore({
    state: {
        login:false,
        classes:[
            {
                class:"slider-hover-one",
                img: "https://www.advantour.com/img/kyrgyzstan/bishkek/bishkek1.jpg"
            },
            {
                class: "slider-hover-two",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85RTm13YhrF5O9onLatTR9Ny6kkb5iKIJRg&usqp=CAU"
            },
            {
                class: "slider-hover-three",
                img: "https://wikiway.com/upload/hl-photo/51e/b76/dzhalal-abad_4.jpg"
            },
            {
                class: "slider-hover-four",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ljsSIWUdzVb_6NlfrU1eZnThz8XL2SGGMA&usqp=CAU"
            },
            {
                class: "slider-hover-five",
                img: "https://sputnik.kg/img/102605/15/1026051588_0:214:3067:1939_1920x0_80_0_0_c2b1efc89b3ad363dbdf7aa00fa51c43.jpg"
            },
            {
                class: "slider-hover-six",
                img: "https://st-1.akipress.org/st_gallery/80/992480.8c6bcfe5b93c82518907ffd12c13b7e2.jpg"
            }
        ],
        infoList: [
            {
                img: bus,
                name: "Автобус-туру",
                descr: "Эс алуунун эң күчтүү, жеткиликтүү жана популярдуу түрлөрүнүн бири. Бир сапарда сиз бир эле учурда бир нече шаардын кооз жерлерин көрө аласыз жана бул мейманканаларда түнөгөн классикалык экскурсиялык турдан дээрлик бир нече эсе арзаныраак болот.",
            },
            {
                img: car,
                name: "Джиппинг",
                descr: "Бул табигый тоскоолдуктарды жеңүү менен жолсуз унаалар менен саякат, бул экстремалдык спорт жана эс алуу, бул автотранспортто туристтик маршруттун жолсуз жолдон өтүүсү.",
            },
            {
                img: yacht,
                name: "Яхтинг",
                descr: "Бул лайнердеги круиздик же паромдо сейилдөө менен бирдей, яхтада гана көбүрөөк эркиндик бар, кеменин көлөмү бир нече эсе кичине, тажатма экипаж жок, өзүңүздү капитандай сезе аласыз. ээлик кылуу, рулда туруу. Бул жерде сиз Черногория деңизинин эң чоң кеңдигин сезесиз.",
            },
            {
                img: volcano,
                name: "Каньонинг",
                descr: "Бул эс алуунун экстремалдык спорттук түрү, ал альпинизм жана башка жабдуулардын жардамы менен капчыгайларды (суу баскан же жок) басып өтүүдөн, ал эми кээде суудан өтүүдөн турат, бирок кайык же башка суу кемелери жок.",
            },
        ],
        sortingList: [
            "БАРЫ",
            "АВТОБУС-ТУРУ",
            "ДЖИППИНГ",
            "ЯХТИНГ",
            "КАНЬОНИНГ",
        ],
        reviewsList:[
            {
                id:0,
                name: "Иван Иванов",
                age: "25",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSRtwfIvzzGolKguytSkFq_ZPzYeVza72og&usqp=CAU",
                reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                id:1,
                name: "Иван Иванов",
                age: "25",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSRtwfIvzzGolKguytSkFq_ZPzYeVza72og&usqp=CAU",
                reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                id:2,
                name: "Иван Иванов",
                age: "25",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSRtwfIvzzGolKguytSkFq_ZPzYeVza72og&usqp=CAU",
                reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
          ],
        catalog: [
            {
                id: 0,
                img: "https://asiamountains.net/assets/cache_image/assets/lib/resized/65/1600x2400_0x0_d0b.jpg",
                category: "КАНЬОНИНГ",
                name: "Кемин!",
                abultPrice: 1990,
                childPrice: 1300,
                time: 8,
                descr: `Табиятка толук чөмүлүү жана кооз Чоң Кемин капчыгайында 3-4 саат ат минүү!

                🌉Илмектүү көпүрө + шаркыратма
                Чуңкурчак капчыгайына жарым күндүк тур!`,
                favorites: false,
                person: 3,
                area: "Чуй",
            },
            {
                id: 1,
                img: "https://st-1.akipress.org/st_runews/.storage/limon3/images/MAY2021/aeabf525af1e81356e4b66d602f118ed.jpg",
                category: "ЯХТИНГ",
                name: " САРЫ-ЧЕЛЕК",
                abultPrice: 6500,
                childPrice: 5300,
                time: 72,
                descr: `7 көлдүн сөз жеткис көрүнүшү ачылган САРЫ-ЧЕЛЕК коругунун бардык кооздугун ушул жума күнү акыркы жолу көрүүгө болот!

                Көптөгөн жерлерге баруу менен үч күндүк тур, мисалы:
               
                Төө-Ашуу ашуусу,
                Суусамыр өрөөнү,
                Чычкан капчыгайы,
                Токтогул суу сактагычы,
                Нарын дарыясы жана албетте,
               
                Сары Челек коругунун өзү, ал жерде 7 көлгө барабыз☝🏻`,
                favotites: false,
                person: 32,
                area: "Нарын",
            },
            {
                id: 2,
                img: "https://24.kg/files/media/230/230545.jpg",
                category: "АВТОБУС-ТУРУ",
                name: "ОШ ШААРЫ",
                abultPrice: 5500,
                childPrice: 4000,
                time: 36,
                descr: `Мына бул - биздин УКТАЛГАН АВТОБУС🚍.

                Толук жатып алып, алыскы сапарга чыгып, эс ала турганыңызды билбедиңиз беле?
               
                Сиздерге айтабыз, сизди ОШ шаарына жана кайра алып кете турган супер ынгайлуу жана ыңгайлуу УКТАЛУУЧУ 🚍 АВТОБУС бар.
               
                Үй-бүлөлүк саякаттар үчүн идеалдуу - ымыркайлардан биздин сүйүктүү чоң ата-чоң энебизге чейин.`,
                favotites: false,
                person: 12,
                area: "Ош",
            },
            {
                id: 3,
                img: "https://loo7.ru/ssl/u/e5/dea3d4959e11ecb84ce1c47b1b390f/-/26.jpg",
                category: "ДЖИППИНГ",
                name: "ТЯНЬ-ШАНЬ ТООСУ",
                abultPrice: 4500,
                childPrice: 2500,
                time: 12,
                descr: `Кыргызстандын берметтери Памир жана Тянь-Шань тоолорунда бийик катылган жана кар баскан бийик дубалдар менен ишенимдүү тосулган. Сизди карап чыгууга чакырабыз`,
                favotites: false,
                person: 6,
                area: "Иссык-Куль",
            },
            {
                id: 4,
                img: "https://www.travelkyrgyzstan.kg/wp-content/uploads/2020/09/horseback_tours_kyrgyzstan-min.jpg",
                category: "КАНЬОНИНГ",
                name: "ысык булактар + Иссык-Куль!",
                abultPrice: 1300,
                childPrice: 1000,
                time: 12,
                descr: `Ысык-Көл жай мезгилинде гана эмес!
                Ысык-Көл облусунун жаратылышынан ырахат алганы барабыз🌊
                
                Көк Мойнок каньондоруна барабыз, ысык булактарга барабыз, жээкте пикник кылабыз
                📌 Толук маалымат жана турга катталуу үчүн байланышыңыз`,
                favotites: false,
                person: 8,
                area: "Иссык-Куль",
            },
            {
                id: 5,
                img: "https://fotooboivimala.ru/image/cache/catalog/product/berezovaya-roshcha-07291-295x295.jpg",
                category: "КАНЬОНИНГ",
                name: "Берч торо",
                abultPrice: 1700,
                childPrice: 1400,
                time: 6,
                descr: `Кто ждал сезон березовой рощи? Это время пришло!
                Урочище Бойрок окрашивается желтыми красками и уже ждёт Нас😍 Берёзовая роща + водопад Эдельвейс!`,
                favotites: false,
                person: 7,
                area: "Чуй",
            },
            {
                id: 6,
                img: "https://asia-travel.uz/images/kyrgyzstan/Dostoprimechatelnosti-Kyrgyzstana/son-kul.jpg",
                category: "ЯХТИНГ",
                name: "Тянь-Шань көлу",
                abultPrice: 1700,
                childPrice: 1400,
                time: 72,
                descr: `Деңиз деңгээлинен 1900 метр бийиктикте чөккөн токой, Тянь-Шань альп көлдөрү, 3 каньон жана коло дооруна таандык аска сүрөттөрү ...

                Бул биздин Кыргызстандагы жаңы турубуздун сүрөттөлүшү😍
                Кыргыз облусунун эң көрүнүктүү жерлерине үч күндүк саякат`,
                favotites: false,
                person: 7,
                area: "Иссык-Куль",
            },
            {
                id: 7,
                img: "https://img-fotki.yandex.ru/get/9150/50083820.380/0_ed8a4_99b1f945_XL.jpg",
                category: "АВТОБУС-ТУРУ",
                name: "«Вокруг Иссык-Куля»",
                abultPrice: 7000,
                childPrice: 5900,
                time: 48,
                descr: `Дем алыш күндөрүн биздин бермет Ысык-Көлдүн жаратылышында ырахаттанып өткөрүүгө даярсызбы?

                Программа эки банкка барууну жана төмөнкүдөй жерлерди камтыйт:
                - Барскоон капчыгайы
                - Жети-Өгүз капчыгайы
                - Көк Жайык капчыгайы
                - Жомок каньоны😍
                ал эле эмес!
                
                ❗️Орындар чектелүү❗️`,
                favotites: false,
                person: 5,
                area: "Иссык-Куль",
            },
            {
                id: 8,
                img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f1/f5/6a/caption.jpg?w=1200&h=1200&s=1",
                category: "ДЖИППИНГ",
                name: "Алтын Арашан",
                abultPrice: 5500,
                childPrice: 4700,
                time: 72,
                descr: `Алтын Арашанга барабыз!

                Деңиз деңгээлинен 2600 метр бийиктиктеги атактуу шыпаалуу ысык булактарга барабыз,
                жолдо көптөгөн жерлерди көрөбүз,
                жана боз үйлөрдө түнөөк😍
                буга төмөнкүлөр кирет:
                - өткөрүп берүү
                - Spec. транспорт
                - Боз үйлөргө жайгаштыруу
                - Тамактануу (1 кечки тамак, 1 эртең мененки тамак, 1 түшкү тамак)
                сезондун аягына чейин жетүү үчүн шектенбесек болот!
                
                Эки күндү уникалдуу ысык булактары бар Кыргызстандын эң кооз жерлеринин биринде өткөрөбүз🔥
                
                + Келгиле, берметибиз Ысык-Көлдү кыдырып чыгалы!`,
                favotites: false,
                person: 5,
                area: "Иссык-Куль",
            },
            {
                id: 9,
                img: "https://icdn.lenta.ru/images/2022/02/07/18/20220207181847244/pwa_list_sq_1024_webp_58eb7e710d21529ce6539be17f5bd426.webp",
                category: "АВТОБУС-ТУРУ",
                name: "Тажиктер менен согуш",
                abultPrice: 0,
                childPrice: 0,
                time:120,
                descr: `Данный конфликт является самым масштабным и кровопролитным за всю историю киргизско-таджикских конфликтов на границе. Данные боестолкновения охарактеризовались массовым использованием таджикской стороной реактивных систем залпового огня (РЗСО Град, Ураган) по Ошской и Баткенской областям Киргизии, ракетными ударами по областному центру Баткенской области город Баткен[3]. По данным властей Киргизии во время конфликта с киргизской стороны погибло 63 человек и около 140 тысяч человек было эвакуировано[4]. По данным МИД РТ с таджикской стороны погибло 59 человека[5][6]. «Радио Озоди» опубликовало поименный список из 83 погибших с таджикской стороны[7]. По данным властей Киргизии в боях было убито больше 200 таджикских военнослужащих, около 400 ранены[8].`,
                favotites: false,
                person: 150,
                area: "Баткен",
            },
        ],
        personsCounter:[
           "1",
           "2",
           "3",
           "4",
           "5",
           "6",
           "7",
           "8",
           "9",
            "10",
            "10дон коп"
        ],
        radioList:[
            "Кыргызстан",
            "Чуй",
            "Иссык-Куль",
            "Талас",
            "Нарын",
            "Джалал-Абад",
            "Ош",
            "Баткен",
        ],

        filteredCatalog: [],
        newfilteredCatalog: []
    },
    getters: {
        GET_SINGLE_ITEM: (state) => (id) => {
            return state.catalog.find(item => +item.id === +id)
        },
    },
    mutations: {
        getCatalog(state) {
            state.filteredCatalog = state.catalog
        },
        getCategoryFilter(state, category) {
            category === 'БАРЫ' ? state.filteredCatalog = state.catalog : state.filteredCatalog = state.catalog.filter(item => item.category === category)
        },
        getOptionFilter(state, {maxVal, minVal, category = "БАРЫ", pers, map, MinTime, MaxTime}) {
            state.filteredCatalog = state.catalog.filter((item) => 
            +item.abultPrice <= +maxVal && +item.abultPrice >= +minVal)
            .filter((item) => category === "БАРЫ" ? item : item.category === category)
            .filter((item) => pers === "10дон коп" ? item.person > 10 : item.person >= +pers)
            .filter((item) => map === "Кыргызстан" ? item.area : item.area === map)
            .filter((item) => item.time >= +MinTime && item.time <= +MaxTime)
        },
        resetFilter(state, {maxVal, minVal, category = "БАРЫ", pers, map, MinTime, MaxTime}) {
            state.filteredCatalog = state.catalog.filter((item) => category === "БАРЫ" ? item : item.category === category)
        }
    },
    actions: {},
    modules: {},
});
