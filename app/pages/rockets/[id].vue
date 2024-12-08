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
            @click="toggleFavorite"
            style="background-color: #D50000; color: white;"
            
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

  const route = useRoute()
  const favoritesStore = useFavoritesStore()

  const store = useCounter()

  console.log("favoritesStore", favoritesStore.favoriteRockets)

  
  const rocket = useRocket();
  const index = Number(route.params.id);

  console.log("rocketrocketrocketrocket", rocket)


  const isFavorite = computed(() => 
  favoritesStore.favoriteRockets.some(r => r.id === rocket.rocket.value?.id)
);




  
  const toggleFavorite = () => {
  if (rocket.rocket.value) {
    if (isFavorite.value) {
      console.log("Rocket is already in favorites:", rocket.rocket.value);
    } else {
      console.log("Added to favorites:", rocket.rocket.value);
    }
  } else {
    console.error("No rocket value found!");
  }

  watch(
  () => favoritesStore.favoriteRockets,
  (newValue) => {
    console.log('favoriteRockets changed:', newValue);
  },
  { deep: true }
);

};


console.log("Updated favoriteRockets:", favoritesStore.favoriteRockets);
  </script>