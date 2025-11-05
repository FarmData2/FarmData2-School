<template>
  <p>This will be our DateInput Component.</p>

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
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
};
</script>
<style scoped></style>
