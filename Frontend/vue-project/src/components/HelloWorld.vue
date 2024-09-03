<template>
  <div>
    <p>{{ msg }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      axios.get('http://localhost:5000/')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>