<template>
  <div>
    <td class="text-left"> {{ meetup.name}}</td>
    <td class="text-left"> {{ meetup.city}}</td>
    <td class="text-left"> {{ meetup.address}}</td>
     <button @click="onDelete" class="btn red right">Delete</button>
  </div>

</template>

<script>


 import axios from 'axios';
   export default {
  data() {
        return {
            meetup: {}
        }
    },
mounted(){
   const meetupId = this.$route.params.id
         axios.get(`http://localhost:5000/api/meetups/${meetupId}`)
           .then((response) => {
               console.log(response.data);
                this.meetup = response.data;
              })
            .catch((error) => {
                console.log(error);
            });
             
},
methods:{
    onDelete(){
      let meetupId = this.$route.params.id;
    axios.delete(`http://localhost:5000/api/meetups/${meetupId}`)
     
        .then((response) => {
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
// onDelete(){
//     let meetupId = this.state.details.id;
//     axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
//       .then(response => {
//         this.props.history.push('/');
//       }).catch(err => console.log(err));
//   }

</script>

<style scoped>


</style>