import { defineStore } from 'pinia';
import type { Rocket } from '~/types/launch';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteRockets: [] as Rocket[],
  }),

  actions: {
    addFavorite(rocket: Rocket) {
      if (!this.favoriteRockets.find(r => r.launchId === rocket.launchId)) {
        this.favoriteRockets.push(rocket);
      }
    },
    removeFavorite(rocketId: string) {
      this.favoriteRockets = this.favoriteRockets.filter(r => {
        return r.launchId !== rocketId;
      });
    
    },
    clearFavorites() {
      this.favoriteRockets = [];
    },
  },
  persist: true,
});
