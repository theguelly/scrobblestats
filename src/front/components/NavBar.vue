<template>
  <client-only>
    <Disclosure as="nav" class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-slate-900/75" v-slot="{ open, close }">
      <div class="max-w-screen-2xl mx-auto">
        <div class="relative flex h-16 items-center justify-between py-4 lg:px-10 mx-5 lg:mx-0">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <NuxtLink to="/" class="inline-block">
                <PlayCircleIcon class="h-8 w-auto rounded-full inline-block" />
                <span class="inline-block ml-2 text-sm">TheGuelly</span>
              </NuxtLink>
            </div>
            <div class="hidden md:ml-6 md:block">
              <div class="flex space-x-4">
                <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[isActive(item) ? 'bg-sky-400/10 text-white' : 'text-gray-300 hover:bg-sky-400/10 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="isActive(item) ? 'page' : undefined">{{ item.name }}</NuxtLink>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://github.com/theguelly.png?size=200" alt="theguelly" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{COMING_SOON}</a>
                  </MenuItem>
                  <!-- <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem> -->
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel class="md:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton @click="close" v-for="item in navigation" :key="item.name" :as="NuxtLink" :to="item.href" :class="[isActive(item) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="isActive(item) ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <template #fallback>
      <nav class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 border-b border-slate-50/[0.06] supports-backdrop-blur:bg-white/95 bg-slate-900/75">
        <div class="max-w-screen-2xl mx-auto">
          <div class="relative flex h-16 items-center justify-between py-4 lg:px-10 mx-5 lg:mx-0">
            <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <NuxtLink to="/" class="inline-block">
                  <PlayCircleIcon class="h-8 w-auto rounded-full inline-block" />
                  <span class="inline-block ml-2 text-sm">theguelly</span>
                </NuxtLink>
              </div>
              <div class="hidden md:ml-6 md:block">
                <div class="flex space-x-4">
                  <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[isActive(item) ? 'bg-sky-400/10 text-white' : 'text-gray-300 hover:bg-sky-400/10 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="isActive(item) ? 'page' : undefined">{{ item.name }}</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </template>
  </client-only>
</template>
  
<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, XMarkIcon, PlayCircleIcon } from '@heroicons/vue/24/outline'
  const NuxtLink = resolveComponent('nuxt-link');

  let route = useRoute()
  
  let navigation = [
    { name: 'Blogs', href: '/blogs' },
    { name: 'About', href: '/about' },
  ]

  function isActive(item) {
    return route.href === item.href
  }
</script>