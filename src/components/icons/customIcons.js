import { h } from "vue";
// import { IconSet, IconProps } from "vuetify";

import Dribble from '@/components/icons/Dribble.vue'
import StarFull from '@/components/icons/StarFull.vue'
import StarHalf from '@/components/icons/StarHalf.vue'
import Download from '@/components/icons/Download.vue'
import ArrowUp from '@/components/icons/ArrowUp.vue'

const customSvgNameToComponent = {
    dribble: Dribble,
    'star-full': StarFull,
    'star-half': StarHalf,
    download: Download,
    'arrow-up': ArrowUp
};

const customIcons = {
    component: (props) => h(props.tag, [h(customSvgNameToComponent[props.icon], {class: 'v-icon__svg'})]),
};

export { customIcons /* aliases */ };