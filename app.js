const app = Vue.createApp({

    data() {
        return {
            number: 0,

        }
    },

    computed: {
        result() {
            if (this.number < 37) {
                return "not there yet"
            } else if (this.number === 37) {
                return this.number
            } else {
                return "too much"
            }


        }
    },

    watch: {
        result() {
            const that = this;
            setTimeout(function() {
                that.number = 0
            }, 5000);
        }
    },

    methods: {
        addNumber(value) {
            this.number = this.number + value

        }



    }



});

app.mount('#assignment')