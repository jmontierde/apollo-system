<template>
    <div>
      <h3>{{ rocket.name }}</h3>
      <!-- <button @click="toggleFavorite">
        {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
      </button> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFavoritesStore } from '../stores/useFavoritesStore';
  import { computed } from 'vue';
  
  // Props for the component
  defineProps({
    rocket: {
      type: Object,
      required: true,
    },
  });
  
  const favoritesStore = useFavoritesStore();

    console.log(favoritesStore.favoriteRockets)


  // const isFavorite = computed(() =>
  //   favoritesStore.favoriteRockets.some(r => r.id === rocket.id)
  // );
  
  // const toggleFavorite = () => {
  //   if (isFavorite.value) {
  //     favoritesStore.removeFavorite(rocket.id);
  //   } else {
  //     favoritesStore.addFavorite(rocket);
  //   }
  // };
  </script>
  