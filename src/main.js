import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaPlay, GiPauseButton, IoPlaySkipForward, IoSettingsSharp } from "oh-vue-icons/icons";

addIcons(FaPlay, GiPauseButton, IoPlaySkipForward, IoSettingsSharp);

createApp(App).component("v-icon", OhVueIcon).mount('#app')