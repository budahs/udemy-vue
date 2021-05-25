<template>
    <li>
        <h2>{{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} details</button>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: [
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite'
    ],
    data () {
        return {
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite () {
            if(this.isFavorite === '1') {
                this.isFavorite = '0'
            } else {
                this.isFavorite = '1'
            }
        }
    }
}
</script>