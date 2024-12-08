import type { Rocket } from '~/types/launch';
import { useRoute } from 'vue-router';

export const useRocket = () => {
  const route = useRoute();
  const launchId = typeof route.params.id === 'string' ? route.params.id : '';

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

  const { data } = useAsyncQuery<{ launch: { rocket: { rocket: Rocket } } }>(query, {
    launchId: launchId, 
  });


  const rocket = computed(() => {
    if (data.value?.launch?.rocket?.rocket) {
      return {
        ...data.value.launch.rocket.rocket,
        launchId,
      };
    }
    return null;
  });

  console.log("Rocket with launchId attached:", rocket);

  return { rocket };
};
