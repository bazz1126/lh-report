<template>
    <v-container fluid fill-height class="home-hero">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight black--text text-xs-center">
                Test Your Website Now
            </div>
            <div class="display-12 black--text text-center">
                With LHReport you can keep tabs on the progress of your website
                or any website thanks to Google Lighthouse. With LHReport you
                can keep a log of all the tests you have conducted on your
                website.
            </div>
            <div class="mx-auto">
                <v-btn
                    class="hidden-sm-and-down mx-3"
                    color="red lighten-1"
                    to="/sign-in"
                    >SIGN IN</v-btn
                >
                <v-btn
                    class="hidden-sm-and-down mx-3"
                    color="red lighten-1"
                    to="/join"
                    >JOIN</v-btn
                >
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Landing'
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
