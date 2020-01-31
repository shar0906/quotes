<template lang="pug">

div.button
  button(:class="type") {{label}}

</template>

<script>
  export default {
    name: 'button_span',
    data() {
      return {
      }
    },

    props: {
      type: String,
      label: String, 
    }
  }
</script>

<style>
.button {
  display: inline-block;
}

/* WANT: Create props for CSS injection */
.deleteButton {
  background-color: #F42525;
}

.getNewButton {
  background-color: #E2AC22;
}

.addNewButton {
  background-color: #45977D;
}

.submitButton {
  background-color: #2952DD;
}

button {
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 25px;
  font-size: 18px;
  margin: 50px 20px;
}

@media only screen and (max-width: 800px) {
  button {
    float: none;
    font-size: 14px;
    justify-content: center;
    margin: 10px;
    padding: 15px;
    width: fit-content;
    flex-wrap: wrap;
    }

    .buttonBar {
        margin-top: 50px;
    }
}

@media only screen and (max-width: 1291px) {
  button {
    float: none;
    font-size: 16px;
    justify-content: center;
    margin: 10px;
    padding: 20px;
    width: fit-content;
    flex-wrap: wrap;
    }

   .buttonBar {
        margin-top: 25px;
    }
}
</style>
