<template>
  <div
    id="HTML-CSS"
    data-cy="HTML-CSS"
  >
    <h1>Harvest</h1>
  </div>
  <body>
    <form action="action_page.php">
      <label for="date">Date:</label>
      <input
        type="date"
        value="2019-06-15"
        label="date"
        name="date"
      />
    </form>

    <form for="crop">Crop:</form>
    <select
      name="crops"
      id="crops"
      value="RADISH"
      autofocus
    >
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

    <table class="table table-responsive">
      <thead>
        <tr>
          <th></th>
          <th>Location</th>
          <th>Bed</th>
          <th>Planted Date</th>
        </tr>
      </thead>
      <tbody>
        <form>
          <tr>
            <td>
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    name="line1"
                /></label>
              </div>
            </td>
            <td>D</td>
            <td></td>
            <td>04/02/2019</td>
          </tr>
          <tr>
            <td>
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    name="line2"
                /></label>
              </div>
            </td>
            <td>GHANA</td>
            <td>GHANA-2</td>
            <td>04/02/2019</td>
          </tr>
          <tr>
            <td>
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    name="line3"
                /></label>
              </div>
            </td>
            <td>GHANA</td>
            <td>GHANA-4</td>
            <td>04/02/2019</td>
          </tr>
          <tr>
            <td>
              <div class="radio">
                <label
                  ><input
                    type="radio"
                    name="line4"
                /></label>
              </div>
            </td>
            <td>E</td>
            <td></td>
            <td>06/05/2019</td>
          </tr>
        </form>
      </tbody>
    </table>
  </body>
</template>

<script></script>

<style>
/* import some styling that applies to all FD2 entry points */
@import url('@css/fd2-mobile.css');

h1 {
  text-align: center;
}
</style>
