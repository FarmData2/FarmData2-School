<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>
    <form action="">
      <label for="harvest-date">Date: </label>
      <input
        type="date"
        name="harvest-date"
        id="harvest-date"
        value="2019-06-15"
      />
      <br />
      <label
        for="crop-dropdown"
        class="crop-label"
        >Crop:</label
      >
      <select
        name="crop-dropdown"
        id="crop-dropdown"
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
      <table>
        <tr class="header-row">
          <th></th>
          <th>Location</th>
          <th>Bed</th>
          <th>Planted date</th>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="rowSelect"
              value="row1"
            />
          </td>
          <td>D</td>
          <td></td>
          <td>04/02/2019</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="rowSelect"
              value="row2"
            />
          </td>
          <td>GHANA</td>
          <td>GHANA-2</td>
          <td>02/04/2019</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="rowSelect"
              value="row3"
            />
          </td>
          <td>GHANA</td>
          <td>GHANA-4</td>
          <td>02/04/2019</td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              name="rowSelect"
              value="row4"
            />
          </td>
          <td>E</td>
          <td></td>
          <td>06/05/2019</td>
        </tr>
      </table>
      <label for="quant">Quantity:</label>
      <input
        type="number"
        name="quant"
        id="quant"
        value="1"
        min="1"
      />
      <select
        name="quant-dropdown"
        id="quant-dropdown"
      >
        <option value="BUNCH">BUNCH</option>
        <option value="POUND">POUND</option>
        <option value="EACH">EACH</option>
      </select>
      <br />
      <textarea
        name="comment-box"
        id="comment-box"
        placeholder="Enter a comment..."
      ></textarea>
      <br />
      <button id="submit">Submit</button>
      <button id="reset">Reset</button>
    </form>
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
#harvest-date {
  margin: 10px;
}

label {
  padding: 0 5px;
}

.crop-label {
  padding: 0 10px;
}

table {
  border: 2px black solid;
  text-align: center;
}

.header-row,
th {
  font-weight: bold;
  font-size: 1.3em;
}

.header-row {
  border: 1px black solid;
}

label,
#quant,
#quant-dropdown {
  margin: 8px;
  font-size: 1.1em;
}

#comment-box {
  width: 50%;
  margin: 5px;
}

#submit {
  background-color: blue;
  color: white;
  width: 20%;
  border: 1px solid;
  font-size: 1.2em;
  padding: 8px 12px;
  margin: 4px;
  font-weight: bolder;
}

#reset {
  background-color: orange;
  font-weight: bolder;
  padding: 8px 12px;
  font-size: 1.2em;
}
</style>
