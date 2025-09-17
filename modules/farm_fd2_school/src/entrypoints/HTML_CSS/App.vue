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
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Column A</th>
        <th>Column B</th>
        <th>Column C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Data A1</td>
        <td>Data B1</td>
        <td>Data C1</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Data A2</td>
        <td>Data B2</td>
        <td>Data C2</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Data A3</td>
        <td>Data B3</td>
        <td>Data C3</td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>Data A4</td>
        <td>Data B4</td>
        <td>Data C4</td>
      </tr>
    </tbody>
  </table>
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
