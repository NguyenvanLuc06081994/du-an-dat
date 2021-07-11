<template>
  <div class="hello">
    <div :class="class_dat">{{ dat_data }}</div>
    <br>
    <input :type="dat_input_type" v-model="dat">
    <button class="btn-success" @click="Lucdepzai">submit</button>
    <div class="row">
      <div v-bind:class="[ activeClass, errorClass ]" v-bind:style="{ height: height_data, width: witdh_data }"></div>
      <div class=""></div>
      <jw-pagination :items="exampleItems" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
// eslint-disable-next-line no-unused-vars
const customLabels = {
  first: '<<',
  last: '>>',
  previous: '<',
  next: '>'
};

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dat_data: 'dat-sida',
      dat : '',
      class_dat: 'bg-success',
      dat_input_type : 'number',
      height_data : '50px',
      witdh_data : '50px',
      class_example : 'col-md-6 bg-info',
      activeClass : 'col-md-12',
      errorClass : 'bg-danger',
      pageOfItems: [],
      exampleItems : [
            {id: 1, name: 'abc'},
            {id: 1, name: '123123'},
            {id: 1, name: 'adfdsfbc'},
            {id: 1, name: 'axcvxcbc'},
            {id: 1, name: 'abfvhnvbc'},
            {id: 1, name: 'gdf'},
            {id: 1, name: 'abcvcbcv'},
      ]
    };
  },
  mounted() {
    this.dat_data = 'ascasdasd';

  },

  methods : {
    Lucdepzai: function () {
      this.dat_data = 'Luc-dep-zai';
      this.class_dat = "bg-danger";
    },

    checkHeigt: function () {
      // eslint-disable-next-line no-empty
      if (this.height_data === '50px'){
        this.class_example = ''
      }
    },
    onChangePage(pageOfItems) {
      // update page of items
      console.log(pageOfItems);
      // this.pageOfItems = pageOfItems;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
