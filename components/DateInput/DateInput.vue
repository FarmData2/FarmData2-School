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
  data() {
    return {
      pickedDate: this.initDate,
    };
  },
};
</script>

<style scoped></style>
