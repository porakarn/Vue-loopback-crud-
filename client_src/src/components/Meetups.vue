<template>

  <div class="container">
      <h1>Courses</h1>


      <table class="table table-striped table-borderes">
      <thead>
        <tr>
          <th class="center">Course Name</th>
          <th class="center">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="meetup in meetups" :key="meetup.id">
          <td class="text-left"> {{ meetup.name}}</td>
          <td class="text-left"> {{meetup.city}}</td>
          <td class="text-left"> {{ meetup.address}}</td>
           
         <router-link :to="'/meetups/' + meetup.id">Detail</router-link>
<!-- :to="{'/item/' + item.id}" -->
                     <!-- <at-button type="button " icon="icon-search" :to="{name: 'Viewcourse', params: {
                          courseId: course.id
                        }
                       }"></at-button> -->

       </tr>
      </tbody>
    </table>
<router-link to="/addmeetup">
    <at-button type="primary">Add Meetup</at-button>
</router-link>
      </div>
   
</template>

<script>
/* eslint-disable */

import axios from 'axios';
export default {

    name:'meetup',
    data() {
        return {
            meetups: null

        }
    },

        mounted() {
        axios.get('http://localhost:5000/api/meetups')
            .then((response) => {
                console.log(response.data);
                this.meetups = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },

      
     
    }

</script>


