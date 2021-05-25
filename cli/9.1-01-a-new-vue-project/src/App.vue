<template>
    <section>
        <h2>My friend</h2>      
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>    
</template>

<script>
    export default {
        data () {
            return {
                friends: [
                    {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '0123 45678 90',
                        email: 'manuel@localhost.com' 
                    },
                    {
                        id: 'julie Jones',
                        name: '',
                        phone: '0987 654421 21',
                        email: 'julie@localhost.com' 
                    }
                ]
            }
        }        
    }
</script>
