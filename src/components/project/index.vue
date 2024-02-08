<template>
    <section>
        <v-row align="center mb-6 mx-1">
            <h1>Recent Projects</h1>
            <v-spacer></v-spacer>
            <v-btn class="d-none d-sm-flex rounded-lg text-none" size="large" variant="flat" color="#EEBF63"
                style="color: white">
                View More
            </v-btn>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <ProjectCard class="mr-md-1" :project="projects[0]" />
            </v-col>
            <v-col cols="12" md="6">
                <ProjectCard class="ml-md-1" :project="projects[1]" />
            </v-col>
        </v-row>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'

export default {
    name: 'ProjectSection',
    components: {
        ProjectCard
    },
    data: () => ({
        projects: [
            {
                title: 'UI Portofolio',
                image: 'project1.png'
            },
            {
                title: 'UI Portofolio',
                image: 'project2.jpg'
            }
        ]
    })
}
</script>

<style scoped>
h1 {
    color: #151517;
    font-weight: 600;
    font-size: 48px;
    letter-spacing: 1px;
}

@media (max-width: 600px) {
    h1 {
        font-size: 32px;
    }
}
</style>