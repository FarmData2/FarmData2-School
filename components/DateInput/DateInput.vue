<template>
  <label
    for="harvest-date"
    class="label-margin"
    >Date:</label
  >
  <input
    type="date"
    id="harvest-date"
    v-model="pickedDate"
  />
</template>

<script>
export default {
  name: 'DateInput',
  props: ['initDate'],
  emits: ['date-changed'],
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
};
</script>

<style scoped></style>
