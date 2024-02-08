<template>
    <v-card class="text-center" flat>
        <v-img :src="require('@/assets/' + skill.img)" class="rounded-xl mb-6" cover :aspect-ratio=".8"></v-img>
        <h1 class="mb-2"> {{ skill.title }} </h1>
        <p> {{ skill.text }}</p>
    </v-card>
</template>

<script>
export default {
    name: 'SkillCard',
    props: {
        skill: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped> h1 {
     color: #2F2F2F;
     font-weight: 500;
     font-size: 24px;
 }

 p {
     color: #828282;
     font-weight: 400;
     font-size: 18px;
     line-height: 1.5;
 }
</style>

