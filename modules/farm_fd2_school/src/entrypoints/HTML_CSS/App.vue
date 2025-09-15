<template>
  <head>
    <title>Harvest</title>
  </head>
  <p>
    <label for="start">Start date:</label>

    <input
      type="date"
      id="start"
      name="trip-start"
      value="2018-07-22"
      min="2018-01-01"
      max="2018-12-31"
    />
  </p>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

/* Add CSS for harvest form here */
p,
label {
  display: block;
}

p,
input {
  margin: 0.4rem 0;
}
</style>
