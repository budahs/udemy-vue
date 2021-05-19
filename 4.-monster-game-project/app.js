
function getRandomValue (min, max){
    const attackValue = Math.floor(Math.random () * (max - min)) + min
}

const app = Vue.createApp({
    data () {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster () {
           const attackValue = getRandomValue(5, 12)
           this.monsterHealth -= attackValue
           this.attackPlayer()           
           console.log(attackValue + ' attackValue @ attack monster method')
        },
        attackPlayer () {
            const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue            
            console.log(this.attackValue + ' attackValue @ attack player method')
        }
    }
})

app.mount('#game')