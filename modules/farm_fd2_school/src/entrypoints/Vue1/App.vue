<template>
  <div
    id="Vue1"
    data-cy="Vue1"
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
        v-for="crop in crops"
        v-bind:key="crop"
        v-bind:value="crop"
      >
        {{ crop.label }}
      </option>
    </select>

    <hr />

    <table>
      <tr>
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Date</th>
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
        <td
          v-for="plant1 in plant1"
          v-bind:key="plant1"
          v-bind:value="location"
        >
          {{ plant1.location }}
        </td>
        <td
          v-for="plant1 in plant1"
          v-bind:key="plant1"
          v-bind:value="bed"
        >
          {{ plant1.bed }}
        </td>
        <td
          v-for="plant1 in plant1"
          v-bind:key="plant1"
          v-bind:value="date"
        >
          {{ plant1.date }}
        </td>
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
        <td
          v-for="plant2 in plant2"
          v-bind:key="plant2"
          v-bind:value="location"
        >
          {{ plant2.location }}
        </td>
        <td
          v-for="plant2 in plant2"
          v-bind:key="plant2"
          v-bind:value="bed"
        >
          {{ plant2.bed }}
        </td>
        <td
          v-for="plant2 in plant2"
          v-bind:key="plant2"
          v-bind:value="date"
        >
          {{ plant2.date }}
        </td>
      </tr>
    </table>
    <!-- <table id="harvest-table">
      <tr id="harvest-table-header">
        <th></th>
        <th>Location</th>
        <th>Bed</th>
        <th>Planted Date</th>
      </tr>
      <tr>
        <td>
          <input
            v-for="location in locations"
            v-bind:key="location"
            v-bind:value="location"
          />
          {{ location.label }}
          />
        </td>
        <input
          v-for="bed in beds"
          v-bind:key="bed"
          v-bind:value="bed"
        />
        {{
          bed.label
        }}
        <input
          v-for="date in dates"
          v-bind:key="date"
          v-bind:value="date"
        />
        {{
          date.label
        }}
        />
      </tr>
    </table> -->

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
      crops: [
        { id: 1, label: 'ARUGULA' },
        { id: 2, label: 'ASPARAGUS' },
        { id: 3, label: 'BEAN' },
        { id: 4, label: 'RADISH' },
      ],
      plant1: [{ location: 'D', bed: '', date: '4/02/2019' }],
      plant2: [{ location: 'GHANA', bed: 'GHANA-2', date: '02/04/2019' }],
      plant3: [{ location: 'GHANA', bed: 'GHANA-4', date: '02/04/2019' }],
      plant4: [{ location: 'E', bed: '', date: '06/05/2019' }],
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
