<template>
  <p>This will be our DateInput Component.</p>
  <div>
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
    <br />
  </div>
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
  watch: {
    pickedDate() {
      this.$emit('date-changed', this.pickedDate);
    },
  },
};
</script>

<style scoped></style>
