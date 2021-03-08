
<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight black--text text-xs-center">Please enter the URL below</div>
            <div>
              <input v-model="url" placeholder="URL..." v-on:keyup.enter="launchChromeAndRunLighthouse(url)">
              <button type = "submit" class = "btn btn-primary" v-on:click="launchChromeAndRunLighthouse('https://spinbot.com/')"> Generate Report</button>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
import launchChromeAndRunLighthouse from "../lh.js";
export default {
    name: 'HomeHero'
};

</script>

<style scoped>
.home-hero {
    /* background: url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'); */
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
