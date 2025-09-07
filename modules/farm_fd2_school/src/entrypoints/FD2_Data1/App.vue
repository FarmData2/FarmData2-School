<template>
  <div
    id="FD2-Data1"
    data-cy="FD2-Data1"
  >
    <div id="harvest-header"><h1>Harvest</h1></div>

    <label
      for="harvest-date"
      class="label-margin"
      >Date:</label
    >
    <input
      type="date"
      id="harvest-date"
      value="2019-06-15"
    />
    <br />
    <label
      for="harvest-crop"
      class="label-margin"
    >
      Crop:
    </label>
    <select id="harvest-crop">
      <option
        v-for="crop in cropList"
        v-bind:key="crop"
      >
        {{ crop }}
      </option>
    </select>

    <hr />

    <table id="harvest-table">
      <tr id="harvest-table-header">
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
      <tr>
        <td>
          <input
            type="radio"
            name="harvest-plant"
            id="harvest-plant1"
            value="1"
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
            name="harvest-plant"
            id="harvest-plant2"
            value="2"
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
            name="harvest-plant"
            id="harvest-plant3"
            value="3"
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
            name="harvest-plant"
            id="harvest-plant4"
            value="4"
          />
        </td>
        <td>E</td>
        <td></td>
        <td>06/05/2019</td>
      </tr>
    </table>

    <label
      for="harvest-quantity"
      class="label-margin"
      >Quantity:</label
    >
    <input
      type="number"
      id="harvest-quantity"
      value="1"
      min="1"
      size="7"
      class="label-margin"
    />
    <select id="harvest-units">
      <option selected>BUNCH</option>
      <option>EACH</option>
      <option>POUND</option>
    </select>

    <hr />

    <textarea
      id="harvest-comment"
      rows="5"
      cols="35"
      placeholder="Enter a comment..."
    />
    <br />
    <input
      type="button"
      id="harvest-submit"
      value="Submit"
      class="label-margin"
    />
    <input
      type="button"
      id="harvest-reset"
      value="Reset"
    />

    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cropList: ['ARUGULA', 'ASPARAGUS', 'BEAN', 'RADISH'],
    };
  },
};
</script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

#harvest-header {
  text-align: center;
}

.label-margin {
  margin-right: 10px;
}

#harvest-date,
#harvest-comment {
  margin-bottom: 10px;
}

#harvest-table,
#harvest-table-header {
  border: 2px solid black;
  width: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

#harvest-submit {
  width: 250px;
  background: blue;
  border: 10px blue;
  color: white;
  font-weight: bold;
}

#harvest-reset {
  width: 120px;
  background: orange;
  border: 10px orange;
  color: black;
  font-weight: bold;
}

tr th {
  font-weight: bold !important;
}
</style>
