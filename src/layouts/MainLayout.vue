<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <div class="q-px-lg q-my-md row justify-between items-center w-100">
          <div class="text-h3">ToDo</div>
          <div class="text-subtitle1">{{ todaysDate }}</div>
        </div>
        <q-img src="../statics/bg.jpg" class="header-image absolute-top" />
      </q-toolbar>
    </q-header>

    <!-- ?? se pueden poner variables SCSS en el breakpoint? -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="768"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <!-- ?? qué hace 'exact'? -->
          <q-item :to="{ name: 'home' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section> ToDo </q-item-section>
          </q-item>

          <q-item :to="{ name: 'add' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>
            <q-item-section> Add tasks </q-item-section>
          </q-item>

          <q-item :to="{ name: 'help' }" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section> Help </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Arturo Rubio</div>
          <div>@arubio</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <!-- <keep-alive></keep-alive> -->
      <!-- ?? qué hace esto exactamente -->
      <!-- -> mantiene los cambios cuando nos movemos entre las páginas -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { date } from "quasar";
import EssentialLink from "components/EssentialLink.vue";

// ?? xk se puede poner 'const'?
// -> se puede poner 'const' xk es un ref, osea un obj
const leftDrawerOpen = ref(false);

const timeStamp = Date.now();
// ?? xk un 'computed property'?
const todaysDate = computed(() => {
  return date.formatDate(timeStamp, "DD MMM");
});
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
.w-100 {
  width: 100%;
}
</style>
