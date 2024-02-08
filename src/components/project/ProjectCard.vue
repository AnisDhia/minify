<template>
    <v-card flat>
        <v-img :src="require('@/assets/' + project.image)" :aspect-ratio=".7" cover class="rounded-xl" />
        <h1 class="mt-4">UI Portofolio</h1>
        <v-btn class="text-none pa-1" variant="text" prepend-icon="mdi-layers"
            :size="smAndUp ? 'large' : 'small'">
            View Case Study
        </v-btn>
        <v-btn class="text-none pa-1 ml-sm-4" variant="text" prepend-icon="mdi-eye-outline" 
            :size="smAndUp ? 'large' : 'small'">
            Live Preview
        </v-btn>
    </v-card>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    setup() {
        const { smAndUp } = useDisplay();
        return {
            smAndUp
        }
    }
}
</script>

<style scoped>
h1 {
    color: #1C1C1C;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
}
</style>