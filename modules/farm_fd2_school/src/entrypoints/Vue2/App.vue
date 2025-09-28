<template>
  <div
    id="Vue2"
    data-cy="Vue2"
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
      v-model="date"
    />
    <br />
    <label
      for="harvest-crop"
      class="label-margin"
    >
      Crop:
    </label>
    <select
      id="harvest-crop"
      v-model="selectedCrop"
    >
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
      <tr
        v-for="plant in plantList"
        v-bind:key="plant.id"
      >
        <td>
          <input
            type="radio"
            name="harvest-plant"
            v-model="selectedPlant"
            v-bind:value="index"
          />
        </td>
        <td>{{ plant.location }}</td>
        <td>{{ plant.bed || '' }}</td>
        <td>{{ plant.date }}</td>
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
      v-model.number="quantity"
      min="1"
      size="7"
      class="label-margin"
    />
    <select
      id="harvest-units"
      v-model="selectedUnit"
    >
      <option
        v-for="unit in unitList"
        v-bind:key="unit.id"
      >
        {{ unit }}
      </option>
    </select>

    <hr />

    <textarea
      id="harvest-comment"
      v-model="comment"
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
      selectedPlant: -1,
      comment: '',
      selectedUnit: 'BUNCH',
      quantity: 1,
      selectedCrop: 'RADISH',
      date: '2019-06-15',
      cropList: ['ARUGULA', 'ASPARAGUS', 'BEAN', 'RADISH'],
      plantList: [
        { id: 1, date: '04/02/2019', location: 'D', bed: '' },
        { id: 2, date: '04/02/2019', location: 'GHANA', bed: 'GHANA-2' },
        { id: 3, date: '04/02/2019', location: 'GHANA', bed: 'GHANA-4' },
        { id: 4, date: '06/05/2019', location: 'GHANA', bed: 'GHANA-4' },
      ],
      unitList: ['BUNCH', 'EACH', 'POUND'],
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
