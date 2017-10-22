<template>
  <div class="container">
  <div class="col-md-5 ">
    <h1>Add Course</h1><br>

    <at-input size="large"  placeholder="Enter course name" v-model="Meetup.name">
      <template slot="prepend">
        <span>Name</span>
      </template>
    </at-input><br>
    
    <at-input size="large"  placeholder="Enter course city" v-model="Meetup.city">
      <template slot="prepend">
        <span>City</span>
      </template>
    </at-input><br>

    <at-input size="large" placeholder="Enter Address" v-model="Meetup.address">
      <template slot="prepend">
        <span>Address</span>
      </template>
    </at-input><br>

<at-button type="primary" @click="addToAPI">Submit</at-button>



  </div>
</div>

</template>

<script>
 import axios from 'axios';
export default {

  data () {
    return {
  Meetup: { name: '', city: '', address:''  },
    }
  },
  methods:{
    addToAPI(){
      let newMeetup = {
          name: this.Meetup.name,
          city: this.Meetup.city,
          address: this.Meetup.address

      }
      console.log(newMeetup);
      axios.post('http://localhost:5000/api/meetups', newMeetup)
        .then((response) => {
          console.log(response);
        }).then(() => {
          this.$router.push({
            name: 'Meetups'
          })
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>




<style >

</style>


