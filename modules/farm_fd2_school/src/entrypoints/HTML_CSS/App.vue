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
  </div>
  <hr />

  <div>
    <table>
      <tr>
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>D</td>
        <td></td>
        <td>04/02/2019</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>GHANA</td>
        <td>GHANA-2</td>
        <td>02/04/2019</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>GHANA</td>
        <td>GHANA-4</td>
        <td>02/04/2019</td>
      </tr>
      <tr>
        <td><input type="radio" /></td>
        <td>E</td>
        <td></td>
        <td>06/05/2019</td>
      </tr>
    </table>
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
