<template>
	<v-card-actions>
	  <v-btn color="deep-purple lighten-2" @click="clearFavorites">Clear</v-btn>
	</v-card-actions>
	<FavoriteRocketList 
	  :rockets="favorites.favoriteRockets" 
	  @delete="deleteFavorite"
	/>
  </template>
  
  <script lang="ts" setup>
  import FavoriteRocketList from '../../component/RocketList.vue';
  const favorites = useFavoritesStore();
  
  const clearFavorites = () => {
	favorites.clearFavorites();
  };
  
  const deleteFavorite = (id: string | undefined) => {
	if (id) {
	  favorites.removeFavorite(id);
	}
  };
  </script>
  