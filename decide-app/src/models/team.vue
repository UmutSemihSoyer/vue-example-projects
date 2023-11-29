<script lang="ts" setup>
import { Person } from './person.vue';
export interface Destination {
  teamId: number;
  teamName: string;
  teamMembers: Array<Person> | undefined;
}

</script>