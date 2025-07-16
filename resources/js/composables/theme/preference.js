import { reactive, ref, watch } from 'vue'

const darkModeState = reactive({
  isDark:
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches),
})

export const themeState = ref(darkModeState.isDark ? 'dark' : 'light')

watch(themeState, (val) => {
  darkModeState.isDark = val === 'dark'
  localStorage.setItem('theme', val)
  document.documentElement.classList.toggle('dark', val === 'dark')
  document.documentElement.classList.toggle('light', val === 'light')
})

document.documentElement.classList.toggle('dark', darkModeState.isDark)
document.documentElement.classList.toggle('light', !darkModeState.isDark)
