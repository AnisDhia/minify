<template>
    <v-responsive :aspect-ration=".7">
        <v-card class="rounded-xl rounded-te-0 pa-2 pa-sm-6" flat>
            <v-card-text style="overflow-y: auto; height:150px">
                <p class="review mb-8 mb-md-16">
                    {{ review.review }}
                </p>
            </v-card-text>
            <v-card-actions class="mt-10">
                <v-row align="center" class="">
                    <!-- AVATAR & NAME -->
                    <!-- <v-col cols="12" md=""> -->
                    <v-row align="center" class="ml-4 ml-sm-1">
                        <v-avatar class="mr-4">
                            <v-img :src="require(`@/assets/${review.avatar}`)" :aspect-ratio="1" />
                        </v-avatar>
                        <div>
                            <p class="name">
                                {{ review.name }}
                            </p>
                            <p class="role">
                                {{ review.role }}
                            </p>
                        </div>
                    </v-row>
                    <!-- STARS -->
                    <div class="d-flex my-6  px-6">
                        <p class=" rating-text mr-3"> {{ review.rating }}</p>
                        <v-rating readonly class="" :model-value="review.rating" half-increments>
                            <template v-slot:item="props">
                                <v-icon class="mx-1" :color="props.isFilled || props.isHalf ? '#F5BF75' : '#C4C4C4'"
                                    size="large" @click="props.onClick">
                                    {{ props.isHalf ? 'custom:star-half' : 'custom:star-full' }}
                                </v-icon>
                            </template>
                        </v-rating>
                    </div>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-responsive>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';
// import Rating from '../about/Rating.vue';

export default {
    name: 'ReviewCard',
    components: {
        // Rating,
    },
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    setup() {
        const { xs, smAndDown } = useDisplay();
        return {
            xs, smAndDown
        }
    }
}
</script>

<style scoped>
.review {
    color: #151517;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.5rem;
}

.name {
    color: #2F2F2F;
    font-weight: 600;
    font-size: 1rem;
    /* line-height: 1.75rem; */
}

.role {
    color: #676767;
    font-size: 0.88rem;
    font-weight: 400;
    /* line-height: 1.5rem; */
}

.rating-text {
    color: #2F2F2F;
    font-size: 1rem;
    font-weight: 600;
    line-height: 2rem;
}

@media screen and (max-width: 960px) {
    .review {
        font-size: 1.2rem;
        line-height: 1.75rem;
    }

    /* .name {
        font-size: 0.88rem;
    }

    .role {
        font-size: 0.75rem;
    } */

}

@media screen and (max-width: 600px) {
    .review {
        font-size: 1.25rem;
        line-height: 1.75rem;
        /* white-space: nowrap; */
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .name {
        font-size: 0.88rem;
    }

    .role {
        font-size: 0.75rem;
    }
}
</style>