<template>
  <at-menu mode="horizontal" active-Name="1">
    <div class="container">
      <!-- Home -->
      <router-link :to="{ name: 'Home' }">
        <at-menu-item name="1">
          <i class="icon icon-home"></i>
          Home
        </at-menu-item>
      </router-link>

      <div >
        <router-link :to="{ name: 'Meetups' }">
          <at-menu-item name="2">Meetup</at-menu-item>
        </router-link>
      </div>
      <div >
        <router-link :to="{ name: 'Addmeetup' }">
          <at-menu-item name="2">Add Meetup</at-menu-item>
        </router-link>
      </div>

      <div class="pull-right">


          <!-- Login -->
          <router-link :to="{ name: 'Login' }">
            <at-menu-item name="3">Login</at-menu-item>
          </router-link>

          <!-- Register -->
          <router-link :to="{ name: 'Register' }">
            <at-menu-item name="4">Register</at-menu-item>
          </router-link>
       

       
          <!-- Profile -->
          <at-submenu>
            <template slot="title"><i class="icon icon-user"></i>Profile</template>
            <!-- Logout -->
            <at-menu-item name="1-2">
              <a href="#" v-on:click="logout()">
                <i class="icon icon-unlock"></i>Logout
              </a>
            </at-menu-item>
          </at-submenu>

    

      </div>

    </div>
  </at-menu>
</template>

<script>

</script>