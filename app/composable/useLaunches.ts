import gql from 'graphql-tag';
import type { Launch, LaunchQueryResult } from '~/types/launch';
import { ref, computed } from 'vue';

export const useLaunches = () => {
  const selectedYear = ref<number | null>(null);
  const sortDirection = ref<'asc' | 'desc'>('desc');

  // Fetch the data with the query
  const { data } = useAsyncQuery<LaunchQueryResult>(gql`
    query GetLaunches {
      launches {
        id
        mission_name
        launch_date_utc
        launch_site {
          site_id
          site_name
          site_name_long
        }
        rocket { 
          rocket_name
          rocket { 
            id
          }
        }
        details
      }
    }
  `);

  // Computed property that makes launches reactive
  const launches = computed(() => {
    return data.value?.launches ?? [];
  });

  // Filter and sort the launches
  const filteredLaunches = computed(() => {
    let filtered = [...launches.value]; // Access .value here

    if (selectedYear.value) {
      filtered = filtered.filter(launch =>
        new Date(launch.launch_date_utc).getFullYear() === selectedYear.value
      );
    }

    // Sort by launch date
    return filtered.sort((a, b) => {
      const dateA = new Date(a.launch_date_utc).getTime();
      const dateB = new Date(b.launch_date_utc).getTime();
      return sortDirection.value === 'asc' ? dateA - dateB : dateB - dateA;
    });
  });

  console.log('filteredLaunches', filteredLaunches)

  return {
    launches: filteredLaunches,
    selectedYear,
    sortDirection,
  };
};





// export function useLaunches() {
//   const queryLaunches = gql`
//   query getLaunches {
//     launches {
//       id
//       mission_name
//       launch_date_utc
//       launch_site {
//         site_id
//         site_name
//         site_name_long
//       }
//       rocket { 
//         rocket_name
//       }
//       details
//     }
//   }
// `

// const date = useDate();

//   const { data:launchesData } = useAsyncQuery<{
//     launches: Launch[]
//   }>(queryLaunches)
//     const launches = computed(() => launchesData.value?.launches?? [])

//     console.log("launches", launches)
//     return launches
// }
  