<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>

    <label
      for="date"
      class="input-rectangle"
      >Date:</label
    >
    <input
      type="date"
      id="date"
      value="2019-06-15"
    />

    <br />

    <label
      for="crop"
      class="input-rectangle"
      >Crop:</label
    >
    <select
      name="crop"
      id="crop"
    >
      <option>ARUGULA</option>
      <option>ASPARAGUS</option>
      <option>BEAN</option>
      <option selected>RADISH</option>
    </select>
    <p>Testing commit</p>
  </div>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

/* Add CSS for harvest form here */
h1 {
  text-align: center;
}

.input-rectangle {
  padding: 10px;
}
</style>
