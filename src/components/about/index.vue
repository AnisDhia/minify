<template>
    <section>
        <v-card color="#E9E9E9" class="rounded-xl pa-4 pa-sm-16" flat>
            <v-row>
                <v-col cols="12" md="4">
                    <v-img class="rounded-xl" src="@/assets/about.jpg" :aspect-ratio=".75" cover></v-img>
                </v-col>
                <v-col cols="12" md="8" class="pl-md-12">
                    <v-row align="start" class="mb-4 mb-sm-8">
                        <v-col cols="12" sm="6">
                            <h1>120<span class="plus">+</span></h1>
                            <p>Completed Projects</p>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <h1 class="ablus">A+
                                <Rating />
                            </h1>
                            <p>Positive Reviews</p>
                        </v-col>
                    </v-row>
                    <h2> Glad to Help You!</h2>
                    <p class="paragraph mt-4">
                        As a full-service digital designer, I work closely with my clients to define, design and develop
                        transformative user experiences across all platforms and brand’s touchpoints.
                    </p>
                </v-col>
            </v-row>
        </v-card>
    </section>
</template>

<script>
import Rating from './Rating.vue'

export default {
    name: 'AboutSection',
    components: {
        Rating
    }
}
</script>

<style scoped>
h1 {
    color: #2F2F2F;
    font-weight: 600;
    font-size: 72px;
    font-family: 'Poppins';
    letter-spacing: 1px;
    line-height: 72px;
}

.plus {
    color: #8ED2A9;
}

.ablus {
    color: #2F2F2F;
    font-weight: 600;
    font-size: 48px;
}

h2 {
    color: #2F2F2F;
    font-weight: 600;
    font-size: 48px;
    font-family: 'Poppins';
    letter-spacing: 1px;
}

p {
    color: #828282;
    font-weight: 400;
    font-size: 24px;
    font-family: 'Poppins';
    letter-spacing: 1px;
    line-height: 1.7;
}

.paragraph {
    color: black;
    font-weight: 400;
    font-size: 24px;
    line-height: 45px;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: 36px;
        line-height: 36px;
    }

    .ablus {
        font-size: 36px;
    }

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }

    .paragraph {
        font-size: 14px;
        line-height: 1.5;
    }

}</style>