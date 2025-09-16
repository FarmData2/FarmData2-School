<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <p>Harvest</p>
    <label for="start">Date: </label>
    <input
      type="date"
      id="start"
      name="trip-start"
      value="2019-06-15"
      min="2019-01-01"
      max="2019-12-31"
    />
    <br />

    <label for="crop">Crop: </label>
    <select>
      <option>RADISH</option>
      <option>ARUGULA</option>
      <option>ASPARAGUS</option>
      <option>BEAN</option>
    </select>

    <table>
      <tr>
        <th scope="col"></th>
        <th scope="col">Location</th>
        <th scope="col">Bed</th>
        <th scope="col">Planted Date</th>
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

p {
  text-align: center;
  font-size: 2em;
}

label {
  margin-right: 5px;
}

table {
  width: auto;
  border-collapse: collapse;
  border: 3px solid black;
  max-width: 600px;
}
th,
td {
  border: 1px solid gray;
  padding: 5px;
  word-wrap: break-word;
  white-space: normal;
}

th[scope='col'] {
  font-weight: bold;
  border-bottom: 3px solid black;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

textarea::placeholder {
  color: gray;
}

#submit {
  color: white;
  background-color: blue;
  font-weight: bold;
  padding: 5px 90px;
}

#reset {
  color: black;
  background-color: orange;
  font-weight: bold;
  padding: 5px 25px;
}
</style>
