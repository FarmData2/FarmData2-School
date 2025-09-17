<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>
    <label for="start">Date: </label>
    <input
      type="date"
      id="start"
      value="2019-06-15"
    />
    <br />

    <label for="crop">Crop: </label>
    <select id="crop">
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
      <tr class="top">
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
      <tr class="side">
        <td><input type="radio" /></td>
        <td>D</td>
        <td></td>
        <td>04/02/2019</td>
      </tr>
      <tr class="side">
        <td><input type="radio" /></td>
        <td>GHANA</td>
        <td>GHANA-2</td>
        <td>02/04/2019</td>
      </tr>
      <tr class="side">
        <td><input type="radio" /></td>
        <td>GHANA</td>
        <td>GHANA-4</td>
        <td>02/04/2019</td>
      </tr>
      <tr class="side">
        <td><input type="radio" /></td>
        <td>E</td>
        <td></td>
        <td>06/05/2019</td>
      </tr>
    </table>
    <div class="quantity">
      <label for="quantity">Quantity: </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value="1"
        min="1"
      />
      <br />

      <select>
        <option>BUNCH</option>
        <option>EACH</option>
        <option>POUND</option>
      </select>
    </div>

    <label for="comment"></label>
    <textarea
      rows="5"
      cols="33"
      placeholder="Enter a comment..."
    ></textarea>
    <div class="quantity">
      <button id="submit">Submit</button>
      <button id="reset">Reset</button>
    </div>
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

label {
  margin-right: 5px;
}

table {
  width: 100%;
  border-bottom: 3px solid black;
  border-collapse: collapse;
  max-width: 600px;
}

.top {
  border: 1px solid black;
}

.side {
  border-left: 3px solid black;
  border-right: 3px solid black;
}

.side td {
  border-bottom: 1px solid gray;
}

td {
  border-left: none;
  border-right: none;
}

.quantity {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

textarea::placeholder {
  color: gray;
}

#submit {
  padding: 5px 85px;
  color: white;
  background-color: blue;
  font-weight: bold;
}

#reset {
  padding: 5px 25px;
  color: black;
  background-color: orange;
  font-weight: bold;
}
</style>
