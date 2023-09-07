<template>
  <div v-if="loading" class="fixed left-0 top-0 h-screen w-full z-50 bg-slate-900" />
  <NavBar />
  <client-only>
    <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="particleOptions" />
  </client-only>
  <div class="py-12 sm:py-12">
    <slot />
  </div>
  <footer class="mt-auto text-slate-900">
    Stop
  </footer>
</template>
<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  console.log('hi')
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  console.log('lo')
  loading.value = false;
});
import { loadFull } from "tsparticles";
const particleOptions = {
  fpsLimit: 30,
  particles: {
    color: {
      value: '#334155'
    },
    links: {
      color: '#334155',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 500
      },
      value: 50
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
};

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log('loader off');
};

useHead({
  title: 'theguelly',
  meta: [
    { name: 'description', content: 'theguelly' }
  ],
  bodyAttrs: {
    class: 'flex flex-col min-h-screen text-slate-200 bg-slate-900'
  },
  htmlAttrs: {
    class: 'min-h-screen'
  },
  link: [
    {
      rel: 'style',
      href: '/css/inter.css',
      as: 'stylesheet',
    }
  ],
})
</script>
<style>
#tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    z-index: -1;
}
</style>