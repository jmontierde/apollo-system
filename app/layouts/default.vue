<template>
	<v-app>
		<v-main>
			<!-- Use the imported AppHeader component -->
			<AppHeader />
			<slot />
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from "../component/AppHeader.vue"; // Correct import path

export default {
	name: 'DefaultLayout',
	components: {
		AppHeader, // Register the AppHeader component
	},
};
</script>
