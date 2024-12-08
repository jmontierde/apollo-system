import type { Rocket } from '~/types/launch';
import { useRoute } from 'vue-router';

export const useRocket = () => {
  const route = useRoute();
  const rocketId = route.params.id; // This is your launchId.

  const query = gql`
    query Rocket($launchId: ID!) {
      launch(id: $launchId) {
        rocket {
          rocket {
            id
            name
            first_flight
            height {
              feet
              meters
            }
            diameter {
              feet
              meters
            }
            mass {
              kg
              lb
            }
            stages
          }
        }
      }
    }
  `;

  // Use the correct variable name in `useAsyncQuery`.
  const { data } = useAsyncQuery<{ launch: { rocket: { rocket: Rocket } } }>(query, {
    launchId: rocketId, // Match the variable name `launchId`.
  });

  console.log('data', data);

  // Update the computed property to access the correct nested structure.
  const rocket = computed(() => data.value?.launch?.rocket?.rocket || null);

  console.log('rocketId', rocketId);
  console.log('ROCKETTT', rocket);

  return { rocket };
};
