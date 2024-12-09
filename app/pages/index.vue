<template>
	<v-container>
		<h2>
			<v-icon icon="mdi-vuetify" />
			Starter Template
		</h2>

		<div class="d-flex align-center justify-center mb-4">
			<v-select v-model="selectedYear" :items="availableYears" label="Filter by Year" clearable />

			<v-btn
				@click="sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'"
				class="ml-4"
				color="#fff"
			>
				Sort {{ sortDirection === 'asc' ? '↑' : '↓' }}
			</v-btn>
		</div>
		<div class="d-flex justify-space-between">
			<div>
				<h3 class="my-5">Launches</h3>
				<p>There are {{ launches?.length || 0 }} launches.</p>
			</div>
			<div>
				<nuxt-link to="/subscriptions" class="text-blue-500 hover: mr-3">
					<v-chip color="green">Subscriptions</v-chip>
				</nuxt-link>
				<nuxt-link to="/favorites" class="text-blue-500 hover:underline">
					<v-chip color="red">Favorites</v-chip>
				</nuxt-link>
			</div>
		</div>

		<v-data-table :headers="headers" :items="launches">
			<template #item.action="{ item }">
				<v-btn :to="'/rockets/' + item.id" style="background-color: #1b5e20; color: white">
					View Rocket
				</v-btn>
			</template>
		</v-data-table>
	</v-container>
</template>
<script lang="ts" setup>
import { useLaunches } from '~/composable/useLaunches'

const { launches, selectedYear, sortDirection } = useLaunches()
const headers = [
	{ title: 'Mission Name', key: 'mission_name' },
	{ title: 'Launch Date', key: 'launch_date_utc' },
	{ title: 'Launch Site', key: 'launch_site.site_name' },
	{ title: 'Rocket Name', key: 'rocket.rocket_name' },
	{ title: 'Details', key: 'details' },
	{ title: 'Action', key: 'action', sortable: false },
]

const availableYears = computed(() => {
	const years = new Set(launches.value.map((launch) => new Date(launch.launch_date_utc).getFullYear()))
	return Array.from(years).sort()
})
</script>
