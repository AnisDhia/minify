<template>
    <v-navigation-drawer v-model="drawer" app temporary class="elevation-0 mb-0">
        <v-container>
            <h1 @click="goTo(0, scrollOptions)">Ariene Rey</h1>
            <v-divider class="my-4" />
            <v-list dense>
                <v-list-subheader>LINKS</v-list-subheader>
                <v-list-item v-for="(item, i) in items" :key="i" link @click="goTo(item.link)" class="unactive-link"
                    :class="{ 'active-link': item.link.match(active) }">
                    <template v-slot:prepend>
                        <v-icon>{{ item.icon }}</v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-container>
    </v-navigation-drawer>

    <v-app-bar app :color="color" :flat="flat" class="app-bar" :class="{ shrink: !flat }">
        <h1 @click="goTo(0)">Ariene Rey</h1>
        <v-spacer />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="xs" class="ma-0"/>
        <div v-else v-for="(item, index) in items" :key="index">
            <v-btn class="unactive-link text-none" @click="goTo(item.link, scrollOptions)"
                :class="{ 'active-link': item.link.match(active) && flat, 'active-link-expanded': item.link.match(active) && !flat }">{{
                    item.title
                }}</v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify';
import { useGoTo } from 'vuetify';

export default {
    name: 'NavigationBar',
    data: () => ({
        drawer: null,
        isXs: false,
        items: [
            { title: 'Home', icon: 'mdi-home', link: '#home' },
            { title: 'About', icon: 'mdi-information', link: '#about' },
            { title: 'Project', icon: 'mdi-briefcase', link: '#project' },
            { title: 'Contact', icon: 'mdi-email', link: '#contact' },
        ],
        scrollOptions: {
            duration: 1000,
            easing: 'easeInOutCubic',
            offset: -20,
        },

    }),
    props: {
        color: String,
        flat: Boolean,
        active: String,
    },
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        },
    },
    setup() {
        const goTo = useGoTo();
        const { xs } = useDisplay();
        return { xs, goTo };
    },

    watch: {
        isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
}
</script>

<style scoped>
h1 {
    color: #151517;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 1px;
}

.v-toolbar {
    transition: 0.6s;
}

.app-bar {
    padding: 1% 10%;
}

.shrink {
    padding: 0.2% 10%;
}

.unactive-link {
    transition: all 0.3s ease-in-out;
}

.active-link {
    color: #EEBF63;
}

.active-link-expanded {
    color: white;
}
</style>