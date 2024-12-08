<template>
  <v-row>
    <v-col cols="4" md="4" v-for="(item, index) in rockets" :key="index">
      <v-card class="mx-auto my-12" max-width="374">
        <template progress>
          <v-progress-linear color="deep-purple" height="10" indeterminate />
        </template>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>
          <div>{{ item.launchId }}</div>
          <div>{{ item.description }}</div>
          <div>First flight date: {{ item.first_flight }}</div>
          <div>Height: {{ item.height.feet }}ft and {{ item.height.meters }}m</div>
          <div>Diameter: {{ item.diameter.feet }}ft and {{ item.diameter.meters }}m</div>
          <div>Mass: {{ item.mass.kg }}kg and {{ item.mass.lb }}lb</div>
          <div>Stages: {{ item.stages }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" @click="deleteRocket(item.launchId)">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface Rocket {
  name: string;
  launchId: string;
  description: string;
  first_flight: string;
  height: { feet: number; meters?: number };
  diameter: { feet: number; meters?: number };
  mass: { kg: number; lb: number };
  stages: number;
}

defineProps({
  rockets: {
    type: Array as () => Rocket[],
    required: true,
  },
});

const emit = defineEmits(['delete']);

const deleteRocket = (id: string | undefined) => {
  if (id) {
    emit('delete', id);
  }
};
</script>

