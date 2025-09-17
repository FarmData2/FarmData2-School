<template>
  <h1>Harvest</h1>
  <label for="date-input">Date:</label>
  <input
    type="date"
    value="2025-01-02"
  />
  <br />

  <select
    name="crops"
    id="crop-select"
  >
    <option value="broccoli">Broccoli</option>
    <option
      value="radish"
      selected
    >
      Radish
    </option>
    <option value="squash">Squash</option>
  </select>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

/* Add CSS for harvest form here */
</style>
