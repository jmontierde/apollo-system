<template>
	<v-card-actions class="mx-12 mt-6">
		<v-btn style="background-color: red; color: white" @click="clearFavorites">Clear</v-btn>
	</v-card-actions>
	<FavoriteRocketList
		:rockets="favorites.favoriteRockets"
		@delete="deleteFavorite"
		@clear="clearFavorites"
	/>
</template>

<script lang="ts" setup>
import FavoriteRocketList from '../../component/RocketList.vue'
const favorites = useFavoritesStore()

const clearFavorites = () => {
	favorites.clearFavorites()
}

const deleteFavorite = (id: string | undefined) => {
	if (id) {
		favorites.removeFavorite(id)
	}
}
</script>
