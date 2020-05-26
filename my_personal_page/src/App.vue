<template>
  <v-app>

    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-row
        align="center"
      >
        <v-col cols="2">
          <v-img :src="require('@/assets/violin_logo.png')" width="55"></v-img>
        </v-col>
        <v-col
          cols="5"
        >
          <h2>Stephen DiAdamo</h2>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click="content = 'about'"
      >
        About me
      </v-btn>
      <v-btn
        text
        @click="content = 'cv'"
      >
        CV
      </v-btn>
      <v-btn
        text
        @click="content = 'projects'"
      >
        Projects
      </v-btn>
      <v-btn
        text
        @click="content = 'links'"
      >
        Links
      </v-btn>
    </v-app-bar>

    <v-content>
      <About v-if="content === 'about'"></About>
      <CV v-else-if="content === 'cv'"></CV>
      <Links v-else-if="content === 'links'"></Links>
      <Projects v-else-if="content === 'projects'"></Projects>
    </v-content>
  </v-app>
</template>

<script>
  import About from './components/About';
  import CV from './components/CV';
  import Links from './components/Links';
  import Projects from './components/Projects';

  export default {
    name: 'App',
    components: {
      About,
      CV,
      Links,
      Projects
    },
    data: () => ({
      content: 'about'
    }),
    created() {
      document.title = "Stephen DiAdamo";
    }
  };
</script>
