<template>
    <section>
        <v-row align="center" justify="center">
            <h1 class="mb-6 mb-md-10">
                Why hire me ?
            </h1>
        </v-row>
        <v-row>
            <!-- <v-col v-for="skill in skills" :key="skill.title" cols="12" sm="6" md="3">
                <SkillCard :skill="skill" />
            </v-col> -->
            <v-col cols="12" sm="6" md="3">
                <SkillCard class="mr-md-6 mr-sm-2" :skill="skills[0]" />
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <SkillCard class="ml-md-2 mr-md-4 ml-sm-2" :skill="skills[1]" />
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <SkillCard class=" ml-md-4 mr-md-2 mr-sm-2" :skill="skills[2]" />
            </v-col>
            <v-col cols="12" sm="6" md="3">
                <SkillCard class="ml-md-6 ml-sm-2" :skill="skills[3]" />
            </v-col>
        </v-row>
    </section>
</template>

<script>
import SkillCard from './SkillCard.vue'

export default {
    name: 'HireMeSection',
    components: {
        SkillCard
    },
    data() {
        return {
            skills: [
                {
                    img: 'hireme1.jpg',
                    title: 'Communicative',
                    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
                },
                {
                    img: 'hireme2.jpg',
                    title: 'Professional',
                    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
                },
                {
                    img: 'hireme3.jpg',
                    title: 'Collaborative​',
                    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
                },
                {
                    img: 'hireme4.jpg',
                    title: 'Client’s Favourite',
                    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. '
                },
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    color: #151517;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: 1px;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: 32px;
    }

}
</style>