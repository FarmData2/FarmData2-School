<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  ></div>
  <h1>Harvest</h1>

  <div class="form-container">
    <label for="entry-date">Date:</label>
    <input
      type="date"
      id="entry-date"
      value="2019-06-15"
    />

    <div id="crop-options">
      <label>Crop:</label>
      <select>
        <option value="radish">RADISH</option>
        <option value="arugula">ARUGULA</option>
        <option value="asparagus">ASPARAGUS</option>
        <option value="bean">BEAN</option>
      </select>
    </div>
    <table>
      <tr>
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name="row"
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
            name="row"
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
            name="row"
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
            name="row"
          />
        </td>
        <td>E</td>
        <td></td>
        <td>06/05/2019</td>
      </tr>
    </table>
    <div class="quantity-unit">
      <label for="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value="1"
      />
      <select id="unit">
        <option>BUNCH</option>
        <option>EACH</option>
        <option>POUND</option>
      </select>
    </div>

    <textarea
      id="comment"
      placeholder="Enter comments here..."
    ></textarea>
    <div class="button">
      <button
        class="submit-button"
        type="submit"
      >
        Submit
      </button>
      <button class="reset-button">Reset</button>
    </div>
  </div>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

.form-container {
  max-width: 700px;
  overflow: auto;
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
label {
  padding: 10px;
}
.submit-button {
  width: 300px;
  padding: 2px 40px;
  color: white;
  background-color: blue;
}
.reset-button {
  padding: 2px 5px;
  color: black;
  background-color: orange;
}
.quantity-unit {
  padding: 10px;
}
.quantity-unit input {
  margin-right: 10px;
}
textarea,
.button {
  width: 100%;
}
textarea {
  padding: 40px 0;
}
</style>
