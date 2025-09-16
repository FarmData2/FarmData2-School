<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>
  </div>
  <body>
    <form action="action_page.php">
      <label for="date">Date:</label>
      <input
        type="date"
        value="2019-06-15"
        label="date"
        name="date"
      />
    </form>

    <form for="crop">Crop:</form>
    <select
      name="crops"
      id="crops"
      value="RADISH"
      autofocus
    >
      <option value="ARUGULA">ARUGULA</option>
      <option value="ASPARAGUS">ASPARAGUS</option>
      <option value="BEAN">BEAN</option>
      <option
        value="RADISH"
        selected
      >
        RADISH
      </option>
    </select>
  </body>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

h1 {
  text-align: center;
}
</style>
