<template>
  <div
    id="FD3"
    data-cy="FD3"
  >
    <div id="harvest-header"><h1>Harvest</h1></div>

    <DateSelector
      v-bind:required="true"
      v-bind:showValidityStyling="true"
      v-model:date="date"
    />
    <br />
    <label
      for="harvest-crop"
      class="label-margin"
    ></label>
    <CropSelector
      v-bind:required="true"
      v-bind:showValidityStyling="true"
      v-model:selected="crop"
    />

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
          <td>{{ plant.beds.join(', ') }}</td>
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
        v-if="unitList.length > 1"
      >
        <option
          v-for="unit in unitList"
          v-bind:key="unit.id"
          v-bind:value="unit"
        >
          {{ unit.attributes.name }}
        </option>
      </select>
      <span v-if="unitList.length === 1">{{ unit.attributes.name }}</span>
      <hr />
      <CommentBox
        id="harvest-comment"
        data-cy="harvest-comment"
        v-model:comment="comment"
      />
    </div>

    <div
      id="harvest-no-plants"
      v-if="plantList.length === 0 && crop"
    >
      There are no {{ crop }} plants available for harvest.
    </div>
    <br />
    <SubmitResetButtons
      v-bind:enableSubmit="formValid"
      v-bind:enableReset="true"
      v-on:submit="submitForm"
      v-on:reset="resetForm"
    />

    <hr />
  </div>
</template>

<script>
import DateSelector from '@comps/DateSelector/DateSelector.vue';
import CommentBox from '@comps/CommentBox/CommentBox.vue';
import SubmitResetButtons from '@comps/SubmitResetButtons/SubmitResetButtons.vue';
import CropSelector from '@comps/CropSelector/CropSelector.vue';
import * as farmosUtil from '@libs/farmosUtil/farmosUtil';

export default {
  components: {
    DateSelector,
    CommentBox,
    SubmitResetButtons,
    CropSelector,
  },
  data() {
    return {
      date: '2019-06-15',
      crop: null,
      pickedPlant: null,
      quantity: 1,
      unit: null,
      comment: '',
      plantList: [],
      unitList: [],
    };
  },
  computed: {
    formValid() {
      return (
        this.date !== '' &&
        this.crop !== null &&
        this.pickedPlant !== null &&
        this.quantity > 0 &&
        this.unit !== null
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
      this.plantList = [];
      this.unitList = [];
    },
    async submitForm() {
      let measure = '';
      if (this.unit.relationships.parent.length > 0) {
        const unitMap = await farmosUtil.getUnitIdToTermMap();
        const measureObj = unitMap.get(this.unit.relationships.parent[0].id);
        measure = measureObj.attributes.name;
      }

      const quantity = await farmosUtil.createStandardQuantity(
        measure,
        this.quantity,
        'harvest',
        this.unit.attributes.name
      );

      const plantAsset = await farmosUtil.getPlantAsset(this.pickedPlant.uuid);

      await farmosUtil.createHarvestLog(
        this.date,
        this.pickedPlant.location,
        this.pickedPlant.beds,
        plantAsset,
        quantity,
        this.comment
      );
    },
  },
  watch: {
    async crop() {
      if (this.crop) {
        this.plantList = await farmosUtil.getPlantAssets(
          null,
          [],
          this.crop,
          false,
          true
        );

        const units = await farmosUtil.getHarvestUnits(this.crop);
        this.unitList = units;
        if (this.unitList.length === 1) {
          this.unit = this.unitList[0];
        } else {
          this.unit = null;
        }
      } else {
        this.plantList = [];
        this.unitList = [];
      }
    },
  },
};
</script>

<style>
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

tr th {
  font-weight: bold !important;
}
</style>
