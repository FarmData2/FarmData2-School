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
  emits: ['date-changed'],
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
  watch: {
    pickedDate() {
      this.$emit('date-changed', this.pickedDate);
    },
  },
};
</script>

<style scoped></style>
