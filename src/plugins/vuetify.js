// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

// Icons
import { mdi } from 'vuetify/iconsets/mdi'
import { customIcons } from '@/components/icons/customIcons'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {
    // https://vuetifyjs.com/en/features/theme/#theme-generator
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#EEBF63',
          secondary: '#90C0E8',
          accent: '#6FC2C5',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          bongo: '#FFC107'
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      sets: {
        mdi,
        custom: customIcons
      }
    }
  }
)
