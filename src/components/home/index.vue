<template>
    <section>
        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <h2 class="mb-4">Hey!</h2>
                <h1 class="display-2 font-weight-bold mb-2">
                    I'm <span class="name">Ariene Rey</span>. <br />
                    a UI/UX Designer.
                </h1>
                <LineVector class="d-none d-sm-flex" style="margin-left: 10%;" />
                <p class="mt-4">
                    UX Designer based in Jakarta, Indonesia. <br />
                    I am designing with a minimal and beautiful design in mind.
                </p>
                <div class="my-8">
                    <span class="mr-2 mr-sm-4 follow">Follow Me</span>
                    <!-- <v-icon size="x-large" color="#676767" class="mx-2">mdi-instagram</v-icon>
                    <v-icon size="x-large" color="#676767" class="mx-2">mdi-youtube</v-icon>
                    <v-icon size="x-large" color="#676767" class="mx-2">mdi-twitter</v-icon> -->
                    <v-btn flat icon>
                        <v-icon :size="xs ? 'large' : 'x-large'" color="#676767">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn flat icon>
                        <v-icon :size="xs ? 'large' : 'x-large'" color="#676767">mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn flat icon>
                        <v-icon :size="xs ? 'large' : 'x-large'" color="#676767">mdi-linkedin</v-icon>
                    </v-btn>
                </div>
                <div :class="{ 'text-center': xs }">
                    <v-btn class="text-none mr-sm-3 mb-4 mb-sm-0 rounded-lg" :size="xs ? 'large' : 'x-large'" dark
                        prepend-icon="mdi-email-outline" variant="flat" color="#EEBF63" style="color: white">Mail Me</v-btn>
                    <v-btn class="text-none mx-sm-3 rounded-lg" :size="xs ? 'large' : 'x-large'" dark
                        prepend-icon="mdi-download" variant="outlined" style="border-color: #EEBF63;">Download CV</v-btn>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <v-img src="@/assets/home.png"></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import LineVector from './LineVector.vue'

import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'HomeSection',
    components: {
        LineVector,
    },
    setup() {
        const { xs } = useDisplay()
        return {
            xs
        }
    }
}
</script>

<style scoped>
section {
    padding-top: 1%;
}

h1 {
    color: #2F2F2F;
    font-weight: 600;
    font-size: 48px;
    font-family: 'Poppins';
    letter-spacing: 1px;
}

h2 {
    color: #828282;
    font-weight: 500;
    font-size: 24px;
}

p {
    color: #2F2F2F;
    font-weight: 400;
    font-size: 18px;
}

.follow {
    color: #828282;
    font-weight: 400;
    font-size: 18px;
}

.name {
    color: #EEBF63;
}

@media screen and (max-width: 600px) {

    /* .name {
        display: block;
    } */
    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 18px;
    }

    p {
        font-size: 16px;
    }

    .follow {
        font-size: 16px;
    }
}

@media screen and (max-width: 960px) {
    section {
        padding-top: 5%;
    }
    
}
</style>