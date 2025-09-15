<template>
  <head>
    <title>Harvest</title>
  </head>
  <p>
    <label for="start">Date:</label>

    <input
      type="date"
      id="start"
      name="crop-start"
      value="2019-06-15"
      min="2019-01-01"
      max="2019-12-31"
    />
  </p>
  <p>
    <label for="crop-select">Crop:</label>

    <select
      name="crops"
      id="Crop"
    >
      <option value="">Radish</option>
      <option value="arugula">Arugula</option>
    </select>
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

p,
label {
  font-family: sans-serif;
  font-size: 1rem;
  padding-right: 10px;
}
</style>
