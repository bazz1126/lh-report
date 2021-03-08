<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="red lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="red darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
            <router-link to="/">  <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title> </router-link>
          </div>
          <router-link v-else to="/auth-home">  <v-toolbar-title to="/auth-home">{{appTitle}}</v-toolbar-title> </router-link>

            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
              <v-btn flat class="hidden-sm-and-down" to="/sign-in">SIGN IN</v-btn>
              <v-btn color="red lighten-3" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
            </div>
            <div v-else>
              <v-btn flat class="hidden-sm-and-down" to="/profile">Profile</v-btn>
              <v-btn outline color="black" @click="logout">Logout</v-btn>
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'LightHouse Report',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Profile' },
                { title: 'Sign In' },
                { title: 'Join' }
            ]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
