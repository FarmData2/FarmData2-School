<template>
  <p>This wil be our DateInput Component</p>
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
  name: 'DateInput2',
  props: ['initDate'],
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
};
</script>

<style scoped></style>
