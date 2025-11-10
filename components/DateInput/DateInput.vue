<!-- <template>
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
  props: ['date'],
  emits: ['update:date'],
  data() {
    return {
      pickedDate: this.date,
    };
  },
  watch: {
    pickedDate() {
      this.$emit('update:date', this.pickedDate);
    },
  },
};
</script>

<style scoped></style> -->
