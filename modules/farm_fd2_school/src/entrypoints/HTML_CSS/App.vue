<template>
  <h1>Harvest</h1>
  <label for="date-input">Date:</label>
  <input
    type="date"
    value="2025-01-02"
  />
  <br />

  <label for="crop-select">Crop:</label>
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
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td>D</td>
        <td></td>
        <td>date</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Ghana</td>
        <td>Ghana-2</td>
        <td>date</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Ghana</td>
        <td>Ghana-2</td>
        <td>date</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>E</td>
        <td></td>
        <td>date</td>
      </tr>
    </tbody>
  </table>
  <br />
  <input type="number" />
  <label for="quantity-select">Quantity:</label>
  <select
    name="crops"
    id="quantity-select"
  >
    <option value="broccoli">Broccoli</option>
    <option
      value="radish"
      selected
    >
      BUNCH
    </option>
    <option value="squash">Squash</option>
  </select>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

table {
  border-collapse: collapse;
  width: 100%;
}

thread tr {
  background-color: white;
}

tbody tr {
  background-color: gray;
}

th,
td {
  padding: 10px;
  text-align: left;
}

tr {
  border-bottom: 1px solid #ccc;
}

th,
td {
  border: none;
}
</style>
