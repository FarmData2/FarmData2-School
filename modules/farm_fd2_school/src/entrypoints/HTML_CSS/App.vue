<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>

    <label for="harvest-date">Date:</label>
    <input
      type="date"
      id="harvest-date"
      value="2019-06-15"
    />

    <label for="crop-select">Crop:</label>
    <select id="crop-select">
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

    <table class="harvest-table">
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
          <td>
            <input
              type="radio"
              name="location"
              value="D"
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
              name="location"
              value="GHANA-2"
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
              name="location"
              value="GHANA-4"
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
              name="location"
              value="E"
            />
          </td>
          <td>E</td>
          <td></td>
          <td>06/05/2019</td>
        </tr>
      </tbody>
    </table>

    <label for="quantity">Quantity:</label>
    <input
      type="number"
      id="quantity"
      value="1"
      min="1"
    />
    <select id="unit-select">
      <option value="BUNCH">BUNCH</option>
      <option value="EACH">EACH</option>
      <option value="POUND">POUND</option>
    </select>

    <textarea
      class="comment-box"
      placeholder="Enter a comment..."
    ></textarea>

    <button class="submit-btn">Submit</button>
    <button class="reset-btn">Reset</button>
  </div>
</template>
<script></script>
<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');
/* Add CSS for harvest form here */

#HTML-CSS {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

label {
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  font-weight: normal;
}

#harvest-date,
#crop-select {
  padding: 5px;
  margin-bottom: 10px;
}

.harvest-table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  border: 2px solid #000;
}

.harvest-table th,
.harvest-table td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}

.harvest-table thead {
  background-color: #f0f0f0;
}

.harvest-table input[type='radio'] {
  margin: 0;
}

#quantity {
  width: 80px;
  padding: 5px;
  margin-right: 10px;
}

#unit-select {
  padding: 5px;
}

.comment-box {
  width: 100%;
  height: 120px;
  margin: 20px 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: inherit;
}

.submit-btn {
  background-color: #0000ff;
  color: white;
  padding: 10px 80px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
}

.reset-btn {
  background-color: #ffa500;
  color: black;
  padding: 10px 80px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
</style>
