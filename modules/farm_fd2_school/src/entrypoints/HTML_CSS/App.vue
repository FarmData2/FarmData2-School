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
    <table class="harvest-table">
      <tr id="header">
        <th></th>
        <th><b>Location</b></th>
        <th><b>Bed</b></th>
        <th><b>Planted Date</b></th>
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
    <label
      for="quantity"
      class="input-rectangle"
      id="num-box"
      >Quantity:
    </label>
    <input
      type="number"
      value="1"
      min="1"
      id="number"
    />
    <select
      name="measurement"
      margin-left="10px"
    >
      <option>BUNCH</option>
      <option>EACH</option>
      <option>POUND</option>
    </select>
  </div>
  <hr />
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

/* Add CSS for harvest form here */
h1 {
  text-align: center;
}

.harvest-table {
  width: 55%;
  padding-left: 10px;
  border: 2px solid black;
}

.input-rectangle {
  padding: 10px;
}

#header {
  border: 1px solid black;
}

#number {
  width: 100px;
}
</style>
