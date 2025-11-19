<template>
  <div
    id="FD3"
    data-cy="FD3"
  >
    <div
      id="harvest-header"
      data-cy="harvest-header"
    >
      <h1>Harvest</h1>
    </div>

    <DateSelector
      id="harvest-date"
      v-bind:required="true"
      v-bind:showValidityStyling="true"
      v-model:date="date"
      data-cy="harvest-date"
    />

    <CropSelector
      id="harvest-crop"
      v-bind:required="true"
      v-bind:showValidityStyling="true"
      v-model:selected="crop"
      v-on:error="(msg) => showErrorToast('Network Error', msg)"
      data-cy="harvest-crop"
    />

    <hr />

    <div
      id="harvest-table-quantity-unit"
      v-if="plantList.length > 0"
    >
      <table
        id="harvest-table"
        data-cy="harvest-table"
      >
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

      <NumericInput
        label="Quantity"
        v-bind:required="true"
        v-bind:incDecValues="[1, 5]"
        v-bind:minValue="1"
        v-model:value="quantity"
        data-cy="harvest-quantity"
      />
      <select
        id="harvest-units"
        v-model="unit"
        v-if="this.unitList.length > 1"
        data-cy="harvest-units"
      >
        <option
          v-for="unit in unitList"
          v-bind:key="unit.id"
          v-bind:value="unit"
        >
          {{ unit.attributes.name }}
        </option>
      </select>
      <span v-if="this.unitList.length === 1">{{ unit.attributes.name }}</span>
      <hr />

      <CommentBox
        id="harvest-comment"
        v-model:comment="comment"
        data-cy="harvest-comment"
      />
    </div>
    <div
      id="harvest-no-plants"
      v-if="plantList.length === 0 && crop"
      data-cy="harvest-no-plants"
    >
      There are no {{ crop }} plants available for harvest.
    </div>

    <SubmitResetButtons
      v-bind:enableSubmit="formValid"
      v-bind:enableReset="true"
      v-on:submit="submitForm"
      v-on:reset="resetForm"
      data-cy="harvest-submit-reset"
    />

    <hr />
  </div>
</template>

<script>
import DateSelector from '@comps/DateSelector/DateSelector.vue';
import CropSelector from '@comps/CropSelector/CropSelector.vue';
import NumericInput from '@comps/NumericInput/NumericInput.vue';
import CommentBox from '@comps/CommentBox/CommentBox.vue';
import SubmitResetButtons from '@comps/SubmitResetButtons/SubmitResetButtons.vue';

import * as farmosUtil from '@libs/farmosUtil/farmosUtil';
export default {
  components: {
    DateSelector,
    CropSelector,
    NumericInput,
    CommentBox,
    SubmitResetButtons,
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
        if (this.unitList.length == 1) {
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
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

#harvest-header {
  text-align: center;
}

#harvest-date,
#harvest-comment {
  margin-bottom: 10px;
}

.label-margin {
  margin-right: 10px;
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
