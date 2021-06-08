import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import teamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMember from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { path: '/teams',
            component: teamsList,
            children: [
                { path: ':teamId',component: TeamMember, props:true }
            ] 
        },
        { path: '/users',component: UsersList },
        { path: '/:notFound(.*)', component: NotFound}
    ],
    linkActiveClass: 'active'
})
const app = createApp(App)

app.use(router)
app.mount('#app')
