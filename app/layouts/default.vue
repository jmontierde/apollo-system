<template>
	<v-app>
		<v-main>
			<AppHeader />
			<slot />
			<AppFooter />
		</v-main>
	</v-app>
</template>

<script>
import AppHeader from '../component/AppHeader.vue'
import AppFooter from '../component/AppFooter.vue'

export default {
	name: 'DefaultLayout',
	components: {
		AppHeader,
		AppFooter,
	},
}
</script>
