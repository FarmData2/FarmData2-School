<template>
  <div
    id="FD2"
    data-cy="FD2"
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
      v-if="plantList.length > 0"
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
    <div
      id="harvest-no-plants"
      v-if="plantList.length === 0 && crop"
    >
      There are no {{ crop.attributes.name }} plants available for harvest.
    </div>
    <br />
    <input
      type="button"
      id="harvest-submit"
      value="Submit"
      class="label-margin"
      v-bind:disabled="!formValid"
      v-on:click="submitForm"
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
import * as farmosUtil from '@libs/farmosUtil/farmosUtil';
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
      unitList: [
        { id: 1, attributes: { name: 'BUNCH' } },
        { id: 2, attributes: { name: 'EACH' } },
        { id: 3, attributes: { name: 'POUND' } },
      ],
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
    async submitForm() {
      console.log('Submitting form.');
      const quantity = await farmosUtil.createStandardQuantity(
        'weight',
        this.quantity,
        'harvest',
        this.unit.attributes.name
      );
      console.log(quantity);
    },
  },
  watch: {
    async crop() {
      if (this.crop) {
        const plants = await farmosUtil.getPlantAssets(
          null,
          [],
          this.crop.attributes.name
        );
        if (Array.isArray(plants)) {
          this.plantList = plants;
        } else {
          this.plantList = [];
        }
      } else {
        this.plantList = [];
      }
    },
  },
  async created() {
    const cropsArray = await farmosUtil.getCrops();
    this.cropList = cropsArray;
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
