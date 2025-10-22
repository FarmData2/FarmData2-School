<template>
  <div
    id="FD1"
    data-cy="FD1"
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
      v-model="crop"
    >
      <option
        v-for="crop in cropList"
        v-bind:key="crop.id"
        v-bind:value="crop"
      >
        {{ crop.attributes.name }}
      </option>
    </select>

    <hr />

    <div
      id="harvest-table-quantity-unit"
      v-if="crop"
    >
      <table id="harvest-table">
        <tr id="harvest-table-header">
          <th></th>
          <th>Location</th>
          <th>Bed</th>
          <th>Planted Date</th>
        </tr>
        <tr
          v-for="plant in sortedPlantList"
          v-bind:key="plant.id"
        >
          <td>
            <input
              type="radio"
              name="harvest-plant"
              v-bind:value="plant"
              v-model="pickedPlant"
            />
          </td>
          <td>{{ plant.location }}</td>
          <td>{{ plant.beds || '' }}</td>
          <td>{{ plant.timestamp }}</td>
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
        min="1"
        size="7"
        class="label-margin"
        v-model="quantity"
      />
      <select
        id="harvest-units"
        v-model="unit"
      >
        <option
          v-for="unit in unitList"
          v-bind:key="unit.id"
          v-bind:value="unit"
        >
          {{ unit.attributes.name }}
        </option>
      </select>

      <hr />

      <textarea
        id="harvest-comment"
        rows="5"
        cols="35"
        placeholder="Enter a comment..."
        v-model.trim.lazy="comment"
      />
    </div>
    <br />
    <input
      type="button"
      id="harvest-submit"
      value="Submit"
      class="label-margin"
      v-bind:disabled="!formValid"
      v-on:click="console.log('Submit button clicked.')"
    />
    <input
      type="button"
      id="harvest-reset"
      value="Reset"
      v-on:click="resetForm"
    />

    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '2019-06-15',
      crop: null,
      pickedPlant: null,
      quantity: 1,
      unit: null,
      comment: '',
      cropList: [],
      plantList: [],
      unitList: [],
      // cropList: [
      //   { id: 1, attributes: { name: 'ARUGULA' } },
      //   { id: 2, attributes: { name: 'ASPARAGUS' } },
      //   { id: 3, attributes: { name: 'BEAN' } },
      //   { id: 4, attributes: { name: 'RADISH' } },
      // ],
      // plantList: [
      //   { id: 1, timestamp: '04/12/2019', location: 'D', beds: '' },
      //   { id: 2, timestamp: '04/02/2019', location: 'GHANA', beds: 'GHANA-2' },
      //   { id: 3, timestamp: '06/22/2019', location: 'GHANA', beds: 'GHANA-4' },
      //   { id: 4, timestamp: '05/15/2019', location: 'GHANA', beds: 'GHANA-4' },
      // ],
      // unitList: [
      //   { id: 1, attributes: { name: 'BUNCH' } },
      //   { id: 2, attributes: { name: 'EACH' } },
      //   { id: 3, attributes: { name: 'POUND' } },
      // ],
    };
  },
  computed: {
    formValid() {
      return (
        this.date != '' &&
        this.crop != null &&
        this.pickedPlant != null &&
        this.quantity > 0 &&
        this.unit != null
      );
    },
    sortedPlantList() {
      return [...this.plantList].sort(
        (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
      );
    },
  },
  methods: {
    resetForm() {
      this.date = '2019-06-15';
      this.crop = null;
      this.pickedPlant = null;
      this.quantity = 1;
      this.unit = null;
      this.comment = '';
    },
  },
  created() {
    fetch('http://farmos/api/taxonomy_term/plant_type')
      .then((response) => response.json())
      .then((data) => {
        this.cropList = data.data;
      })
      .catch((error) => {
        console.error('error in fetching:', error);
      });
  },
  watch: {
    crop(newCrop) {
      const cropName = newCrop.attributes.name;
      const url = 'http://farmos/api/fd2_plant_assets?crop=' + cropName;
      console.log('fetching', url);

      fetch(url)
        .then((response) => response.json())
        .then((plants) => {
          console.log('fetched', plants);
          this.plantList = plants;
        });
    },
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
