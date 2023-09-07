<script setup>
const route = useRoute()
const { data } = await useAsyncData(route.params.slug, () => queryContent('/' + route.params.slug).findOne())
console.log(data._value.body.toc)
let currentlyActiveToc = ref({});
let observer = ref();
const nuxtContent = ref(null);
const observerOptions = ref({
  root: nuxtContent,
  threshold: 50
});

onMounted(async () => {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        currentlyActiveToc.value[id] = true;
      } else {
        currentlyActiveToc.value[id] = false;
      }
    });
  }, observerOptions);

    // Track all sections that have an `id` applied
  document
    .querySelectorAll(".prose h2[id], .prose h3[id]")
    .forEach(section => {
      observer.observe(section);
    });
});

onBeforeUnmount(async () => {
  observer.disconnect();
})
</script>

<template>
  <ContentRenderer :value="data">
    <template #empty>
      <Error404 />
    </template>
    <div class="text-slate-200 mx-auto max-w-screen-2xl px-6 lg:px-8 py-12 sm:py-12 grid grid-cols-4 gap-4">
      <article class="max-w-full items-start justify-between grid-cols-8 col-span-3">
        <time :datetime="data.datetime" class="text-slate-600">Last updated: {{ data.date }}</time>
        <h1 class="text-4xl">{{ data.title }}</h1>
        <ContentRendererMarkdown :ref="nuxtContent" :value="data" class="mt-5 prose prose-slate prose-h1:text-slate-200  prose-h5:text-slate-600 prose-h2:scroll-mt-20 prose-h3:scroll-mt-20 prose-h4:scroll-mt-20 prose-p:text-slate-200 prose-a:text-slate-200 prose-strong:text-slate-400 prose-ol:text-slate-200 max-w-none" />
      </article>
      <section class="grid-cols-4">
        <div class="sticky top-24">
          <h2
            class="uppercase font-h2 text-lg tracking-wider"
          >
            Table of contents
          </h2>
          <nav class="mt-4">
            <ul>
              <li
                :class="{
                  'pl-4': link.depth === 3
                }"
                class="toc-list"
                v-for="link of data.body.toc.links"
                :key="link.id"
              >
                <a
                  role="button"
                  class="transition-colors duration-75 text-base mb-2 block"
                  :class="{
                    'text-sky-500 hover:text-sky-600 pl-2': currentlyActiveToc[link.id] === true,
                  }"
                  :href="`#${link.id}`"
                  >{{ link.text }}</a
                >
                <ul v-if="link.children">
                  <li
                    :class="{
                      'pl-4': sublink.depth === 3
                    }"
                    class="toc-list"
                    v-for="sublink of link.children"
                    :key="sublink.id"
                  >
                    <a
                      role="button"
                      class="transition-colors duration-75 text-base mb-2 block"
                      :class="{
                        'text-sky-500 hover:text-sky-600 pl-2': currentlyActiveToc[sublink.id] === true,
                      }"
                      :href="`#${sublink.id}`"
                      >{{ sublink.text }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  </ContentRenderer>
</template>