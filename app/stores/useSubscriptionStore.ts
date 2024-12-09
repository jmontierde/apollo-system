import { defineStore } from 'pinia';

export const useSubscriptionStore = defineStore('subscriptions', {
    state: () => ({
        subscriptions: [] as string[], 
    }),
    actions: {
        addSubscription(email: string) {
            console.log('Attempting to add subscription:', email);
            if (!this.subscriptions.includes(email)) {
                this.subscriptions.push(email);
                console.log('Added subscription:', this.subscriptions);
            } else {
                console.log('Subscription already exists:', this.subscriptions);
            }
        },

        clearSubscriptions() {
            console.log('Clearing subscriptions...');
            this.subscriptions = [];

        },
    },
    persist: true,
});
