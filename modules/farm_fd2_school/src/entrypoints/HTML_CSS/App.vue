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
      <option value="radish">RADISH</option>
      <option value="arugula">ARUGULA</option>
      <option value="asparagus">ASPARAGUS</option>
      <option value="bean">BEAN</option>
    </select>
  </p>

  <table>
    <tr>
      <th></th>
      <th>Location</th>
      <th>Bed</th>
      <th>Planted Date</th>
    </tr>
    <tr>
      <td></td>
      <td>D</td>
      <td></td>
      <td>04/02/2019</td>
    </tr>
    <tr>
      <td></td>
      <td>GHANA</td>
      <td>GHANA-2</td>
      <td>02/04/2019</td>
    </tr>
    <tr>
      <td></td>
      <td>GHANA</td>
      <td>GHANA-4</td>
      <td>02/04/2019</td>
    </tr>
    <tr>
      <td></td>
      <td>E</td>
      <td></td>
      <td>06/05/2019</td>
    </tr>
  </table>
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
  padding-right: 10px;
}

p,
select {
  padding: 2px 5px;
}

p,
table,
tr,
th {
  border: 2px solid black;
}

p,
table,
tr {
  border-bottom: 2px solid grey;
  border-right: 4px solid black;
  border-left: 4px solid black;
}
</style>
