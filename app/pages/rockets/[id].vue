<template>
    <div class="pa-4">
      <v-card v-if="rocket">
        <v-card-title>{{ rocket.rocket.value?.name }}</v-card-title>
        <v-card-text>
          <p>{{ rocket.rocket.value?.description }}</p>
          <p>{{ rocket.rocket.value?.description }}</p>
          <v-list>
            <v-list-item>
              <v-list-item-title>First Flight</v-list-item-title>
              <v-list-item-subtitle>
                {{ rocket.rocket.value?.first_flight }}
              </v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Height</v-list-item-title>
              <v-list-item-subtitle>{{ rocket.rocket.value?.height?.meters }}m</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Diameter</v-list-item-title>
              <v-list-item-subtitle>{{ rocket.rocket.value?.diameter?.meters }}m</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Mass</v-list-item-title>
              <v-list-item-subtitle>{{ rocket.rocket.value?.mass.kg }}kg</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Stages</v-list-item-title>
              <v-list-item-subtitle>{{ rocket.rocket.value?.stages }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn
            style="background-color: #D50000; color: white;"
            @click="toggleFavorite"
          >
            Add to Favorites
            <!-- {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }} -->
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRocket } from '~/composable/useRocket';
  import { useFavoritesStore } from '../../stores/useFavoritesStore';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const rocket = useRocket();
  const favoritesStore = useFavoritesStore();

  console.log("rocket", rocket)

  console.log("favoritesStore", favoritesStore.favoriteRockets)
  
  const isFavorite = computed(() =>
    favoritesStore.favoriteRockets.some(r => r.launchId === route.params.id)
  );

  
  const toggleFavorite = () => {
  if (rocket.rocket.value) {
    if (isFavorite.value) {
      favoritesStore.removeFavorite(rocket.rocket.value.id)
    } else {
      favoritesStore.addFavorite(rocket.rocket.value)
    }
  }
}

  console.log("Updated favoriteRockets:", favoritesStore.favoriteRockets);
  </script>
  