<template>
    <v-row>
        <v-col cols="4" md="4">
	<v-card class="mx-auto my-12" max-width="374" v-for="(item, index) in favorites.favoriteRockets">
		<template progress>
			<v-progress-linear color="deep-purple" height="10" indeterminate />
		</template>


        <v-card-title>{{ item.name }}</v-card-title>

		<v-card-text>
			<div class="">{{ item.description }}</div>
			<div class="">First flight date: {{ item.first_flight }}</div>
			<div class=""><text-h3>Height: </text-h3> {{ item.height.feet }}ft  and {{ item.height?.meters }}m</div>
			<div class=""><text-h3>Diameter: </text-h3>{{ item.diameter.feet }}ft  and {{ item.diameter?.meters }}m</div>
			<div class=""><text-h3>Mass: </text-h3>{{ item.mass.kg }}kg {{ item.mass.lb }}lb</div>
			<div class=""><text-h3>Stages: </text-h3>{{ item.stages }}</div>

	
		</v-card-text>

		<v-card-actions>
			<v-btn color="deep-purple lighten-2" @click="deleteFavorite(item.id)">Delete</v-btn>
		</v-card-actions>
	</v-card>
</v-col>
</v-row>

</template>

<script lang="ts" setup>
const favorites = useFavoritesStore()

const deleteFavorite = (id: string) => { 
  favorites.removeFavorite(id); // Call the store's action to remove the favorite by ID
  console.log('Removed from favorites:', id);
};

console.log('favotire', favorites.favoriteRockets)
</script>
