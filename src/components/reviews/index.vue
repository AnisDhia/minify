<template>
    <section style="background-color: #6FC2C5;">
        <v-row align="center" justify="center">
            <v-col class="text-center">
                <h1 class="mb-6 mt-6 mt-md-0">
                    We Are Loved By Users <br /> And Clients Worldwide
                </h1>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <swiper :modules="modules" :slides-per-view="xs ? 1 : 2" :space-between="50" :onSwiper="onSwiper"
                    :onSlideChange="onSlideChange" :pagination="{ clickable: true }" autoplay class="mySwiper">
                    <swiper-slide v-for="review in reviews" :key="review.name">
                        <ReviewCard :review="review" />
                    </swiper-slide>
                </swiper>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import ReviewCard from './ReviewCard.vue'

import { useDisplay } from 'vuetify/lib/framework.mjs'

export default {
    name: 'ReviewsSection',
    components: {
        ReviewCard,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            reviews: [
                {
                    avatar: 'avatar-1.jpeg',
                    name: 'Ronald Richards',
                    role: 'UI/UX Designer',
                    rating: 4.5,
                    review: 'One of the best additions to our feedback loop has been the company-wide adoption of Fellow.'
                },
                {
                    avatar: 'avatar-2.jpeg',
                    name: 'Marianne Williamson',
                    role: 'Product Manager',
                    rating: 5,
                    review: 'Fellow has been a game-changer for our team. It’s helped us stay aligned and connected.'
                },
                {
                    avatar: 'avatar-3.jpeg',
                    name: 'Dale Murphy',
                    role: 'Software Engineer',
                    rating: 4,
                    review: 'Fellow has been a game-changer for our team. It’s helped us stay aligned and connected.'
                },
                {
                    avatar: 'avatar-4.jpeg',
                    name: 'Marianne Williamson',
                    role: 'Product Manager',
                    rating: 5,
                    review: 'Fellow has been a game-changer for our team. It’s helped us stay aligned and connected.'
                },
                {
                    avatar: 'avatar-5.jpeg',
                    name: 'Dale Murphy',
                    role: 'Software Engineer',
                    rating: 4,
                    review: 'Fellow has been a game-changer for our team. It’s helped us stay aligned and connected.'
                },
                {
                    avatar: 'avatar-6.jpeg',
                    name: 'Marianne Williamson',
                    role: 'Product Manager',
                    rating: 5,
                    review: 'Fellow has been a game-changer for our team. It’s helped us stay aligned and connected.'
                }
            ]
        }
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper)
        };
        const onSlideChange = () => {
            // console.log('slide change')
        };
        const { xs } = useDisplay()
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Autoplay],
            xs,
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: 1px;
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 36px;
    }
}
</style>