<template>
    <v-footer>
        <v-row justify="center" align="center">
            <v-col cols="12" md="4" :class="{ 'text-center': smAndDown }">
                <h1>Let's Connect</h1>
            </v-col>
            <v-col cols="12" md="4" class="text-center">
                <div>
                    <v-btn class="mx-1" flat icon>
                        <v-icon size="x-large" color="#676767">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn class="mx-1" flat icon>
                        <v-icon size="x-large" color="#676767">mdi-youtube</v-icon>
                    </v-btn>
                    <v-btn class="mx-1" flat icon>
                        <v-icon size="x-large" color="#676767">mdi-linkedin</v-icon>
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="12" md="4" :class="{ 'text-center': smAndDown, 'text-end': !smAndDown }">
                <v-btn @click="scrollToTop" variant="text" append-icon="mdi-arrow-up" class="top-btn text-none">Back to
                    Top</v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
import { useGoTo } from 'vuetify/lib/framework.mjs';
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'FooterSection',
    setup() {
        const goTo = useGoTo();
        const { smAndDown } = useDisplay();
        return {
            goTo,
            smAndDown
        }
    },
    methods: {
        scrollToTop() {
            this.goTo(0, {
                duration: 1000,
                easing: 'easeInOutCubic',
            },);
        }
    }
}
</script>

<style scoped>
h1 {
    color: #2F2F2F;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1px;
}

.top-btn {
    color: #2F2F2F;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1px;
}

@media screen and (max-width: 600px) {
    .footer {
        padding: 10% 10%;
    }

    h1 {
        font-size: 24px;
    }

    .top-btn {
        font-size: 18px;
    }

}
</style>