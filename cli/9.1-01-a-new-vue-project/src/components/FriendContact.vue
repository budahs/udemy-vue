<template>
    <li>
        <h2>{{ name }} {{ detailsAreVisible === '1' ? '(Favorite)' : '' }}</h2>
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
    // props: ['name','phoneNumber','emailAddress','isFavorite'],
    props: {
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: String,
            required: false,
            default: '0',
            validator: function (value)
            {
                return value === '1' || value === '0'
            }
        }
    },
    data () {
        return {
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleDetails () {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite () {
            if(this.detailsAreVisible === '1') {
                this.detailsAreVisible = '0'
            } else {
                this.detailsAreVisible = '1'
            }
        }
    }
}
</script>