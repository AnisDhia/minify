<template>
    <section>
        <v-card color="#EEBF63" class="rounded-xl" style="padding: 5%;" :style="{ 'padding-left': smAndDown ? '5%' : '8%' }">
            <v-row align="center" justify="center">
                <v-col cols="12" md="4" :class="{ 'text-center': smAndDown }">
                    <h1>Interested working <br class="d-none d-md-flex" /> with me?</h1>
                </v-col>
                <v-col cols="12" md="8" class="text-center">
                    <v-btn class="baton text-none mr-sm-3 mb-4 mb-sm-0 rounded-lg" size="x-large" dark
                        prepend-icon="mdi-email-outline" variant="flat" color="white">Email Me</v-btn>
                    <v-btn class="baton text-none mx-sm-3 rounded-lg" size="x-large" color="white" variant="outlined"
                        style="border: solid 2px white;">See More
                        Projects</v-btn>
                </v-col>
            </v-row>
        </v-card>
        <v-row class="logos-margin" align="center" justify="center">
            <Logos />
        </v-row>
    </section>
</template>

<script>
import Logos from './Logos.vue'

import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'ContactSection',
    components: {
        Logos
    },
    setup() {
        const { smAndDown } = useDisplay()
        return {
            smAndDown
        }
    }
}
</script>

<style scoped>
h1 {
    color: white;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 1px;
}

.logos-margin {
    margin-top: 10%;
    margin-bottom: 5%;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: 32px;
    }
}

.baton {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    height: 4.375rem;
}

@media screen and (max-width: 600px) {
    .baton {
        font-size: 1rem;
        height: 3rem;
        font-weight: 500;
    }

}
</style>