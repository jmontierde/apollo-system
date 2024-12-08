import { defineStore } from 'pinia';
import type { Rocket } from '~/types/launch';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favoriteRockets: [] as Rocket[],
  }),

  actions: {
    addFavorite(index: number, launches: Rocket[]) {
      const rocket = launches[index];
      if (rocket && !this.favoriteRockets.find(r => r.id === rocket.id)) {
        this.favoriteRockets.push(rocket);
      }
    },
    removeFavorite(rocketId: string) {
      this.favoriteRockets = this.favoriteRockets.filter(r => r.id !== rocketId);
    },
    clearFavorites() {
      this.favoriteRockets = [];
    },
  },
  persist: true,
});
