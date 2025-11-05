<template>
  <p>This will be our DateInput component.</p>
  <label
    for="harvest-date"
    class="label-margin"
    >Date:</label
  >
  <input
    type="date"
    id="harvest-date"
    v-model="date"
  />
</template>
<script>
export default {
  name: 'DateInput',
  props: ['initDate'],
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
};
</script>
<style scoped></style>
