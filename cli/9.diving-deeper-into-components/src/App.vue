<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->  
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>  
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>      
      <component :is="selectedComponent"></component>
    </keep-alive>    
    <!-- 
        In this example if we put text to the input and we change component the text disappears because the component is removed from the dom.
        So the keep-alive prevents that from happening.
       -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    //'the-header': TheHeader
    //TheHeader: TheHeaderTheHeader
    TheHeader,    
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent (cmp) {
      this.selectedComponent = cmp
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>