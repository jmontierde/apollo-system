<template>
	<v-container>
		<v-row>
			<v-col>
				<h2>Subscribe to Notifications</h2>
			</v-col>
		</v-row>

		<v-form @submit.prevent="handleSubscription">
			<v-text-field v-model="email" label="Enter your email" required />
			<v-btn type="submit" color="primary">Subscribe</v-btn>
		</v-form>

		<v-row>
			<v-col>
				<h2>Current Subscriptions</h2>
				<div v-if="subscriptions.length > 0">
					<ul>
						<li v-for="(sub, index) in subscriptions" :key="index">{{ sub }}</li>
					</ul>
					<v-btn color="error" @click="clearSubscriptions">Clear Subscriptions</v-btn>
				</div>
				<div v-else>
					<p>No active subscriptions</p>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useSubscriptionStore } from '../../stores/useSubscriptionStore'

const email = ref('')
const subscriptionStore = useSubscriptionStore()

const subscriptions = computed(() => subscriptionStore.subscriptions)

watch(subscriptions, (newSubs) => {
	console.log('Subscriptions array updated:', newSubs)
})

const handleSubscription = () => {
	subscriptionStore.addSubscription(email.value)
	alert(`Subscription added for: ${email.value}`)
	email.value = ''
}

const clearSubscriptions = () => {
	subscriptionStore.clearSubscriptions()
	alert('Subscriptions cleared!')
	console.log('Subscriptions cleared:', subscriptionStore.subscriptions)
}
</script>
