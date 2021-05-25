const app = Vue.createApp({
    data () {
        return {
            detailsAreVisible: false,
            friends: [                
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie jones',
                    phone: '09876 5678 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
})

app.mount('#app')