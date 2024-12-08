<template>
	<v-container>
		<h2>
			<v-icon icon="mdi-vuetify" />
			Starter Template
		</h2>
		<h5>Nuxt 3 / Vuetify / Graphql / Pinia</h5>
		<h3 class="my-5">
			Example Pinia
			<v-chip color="blue">useCounter</v-chip>
		</h3>
		<v-card class="mx-auto my-12" max-width="374">
			<v-card-title class="text-blue">Pinia useCounter()</v-card-title>
			<v-card-item>
				<v-card-text>
					<v-chip>count:</v-chip>
					{{ store.count }}
				</v-card-text>
				<v-card-text>
					<v-chip>doubleCount:</v-chip>
					{{ store.doubleCount }}
				</v-card-text>
			</v-card-item>

			<v-card-actions><v-btn color="blue" @click="store.increment()">Increment</v-btn></v-card-actions>
		</v-card>

		<h3 class="my-5">
			Example Vuetify
			<v-chip color="blue">Card</v-chip>
		</h3>
		<v-card class="mx-auto my-12" max-width="374">
			<template progress>
				<v-progress-linear color="deep-purple" height="10" indeterminate />
			</template>

			<v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />

			<v-card-title>Cafe Badilico</v-card-title>

			<v-card-text>
				<v-row align="center" class="mx-0">
					<ClientOnly>
						<v-rating :value="4.5" color="amber" dense half-increments readonly size="14" />
						<div class="grey--text ms-4">4.5 (413)</div>
					</ClientOnly>
				</v-row>

				<div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

				<div>
					Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio
					seating.
				</div>
			</v-card-text>

			<v-divider class="mx-4" />

			<v-card-title>Tonight's availability</v-card-title>

			<v-card-text>
				<v-chip-group v-model="selection" active-class="deep-purple accent-4 white--text" column>
					<v-chip>5:30PM</v-chip>

					<v-chip>7:30PM</v-chip>

					<v-chip>8:00PM</v-chip>

					<v-chip>9:00PM</v-chip>
				</v-chip-group>
			</v-card-text>

			<v-card-actions>
				<v-btn color="deep-purple lighten-2">Reserve</v-btn>
			</v-card-actions>
		</v-card>

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
				<h3 class="my-5">
					Example Vuetify
					<v-chip color="blue">SimpleTable</v-chip>
					<v-chip color="orange">Data from spaceX graphql</v-chip>
				</h3>
				<p>There are {{ launches?.length || 0 }} launches.</p>
			</div>
			<div>
				<nuxt-link to="/favorites" class="text-blue-500 hover:underline">Favorites</nuxt-link>
			</div>
		</div>

		<v-table>
			<thead>
				<tr>
					<th class="text-left">Mission Name</th>
					<th class="text-left">Launch Date</th>
					<th class="text-left">Launch site name</th>
					<th class="text-left">Rocket name</th>
					<th class="text-left">Details</th>
					<th class="text-left">Action</th>
					<th class="text-left">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(launch, index ) in launches" :key="launch.id + '-' + index">
					<td>{{ launch.mission_name }}</td>
					<td>{{ launch.mission_name }}</td>
					<td>{{ launch.launch_date_utc }}</td>
					<td>{{ launch.launch_site?.site_name }}</td>
					<td>{{ launch.rocket.rocket_name }}</td>
					<td>{{ launch.details }}</td>
					<td>{{ launch.rocket }}</td>
					<td>
						<v-card-actions>
							<v-btn
								:to="'/rockets/' + launch.id"
								style="background-color: #1b5e20; color: white"
							>
								View
							</v-btn>
						</v-card-actions>
					</td>
				</tr>
			</tbody>
		</v-table>
	</v-container>
</template>
<script lang="ts" setup>
import { useLaunches } from '~/composable/useLaunches'

const store = useCounter()

console.log('store count', store)

const selection = ref(0)
const query = gql`
	query getShips {
		ships {
			id
			name
			roles
			model
			type
			missions {
				flight
			}
			active
		}
	}
`
const { data } = useAsyncQuery<{
	ships: {
		id: string
		name: string
		roles: string
		model: string
		type: string
		missions: {
			flight: string
		}
		active: boolean
	}[]
}>(query)
const ships = computed(() => data.value?.ships ?? [])

console.log('ships data', ships)

const { launches, selectedYear, sortDirection } = useLaunches()

const availableYears = computed(() => {
	const years = new Set(launches.value.map((launch) => new Date(launch.launch_date_utc).getFullYear()))
	return Array.from(years).sort()
})

console.log('launches return', launches)
</script>
