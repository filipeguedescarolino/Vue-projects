const app = Vue.createApp({

    data() {
        return {
            tasks: [],
            inputValue: "",
            taskListIsVisible: true,
        }
    },

    computed: {
        buttonCaption() {
            return this.taskListIsVisible ? "Hide list" : "Show List";
        }
    },

    methods: {
        addTask() {
            this.tasks.push(this.inputValue);
            this.inputValue = "";
        },
        toggleTaskList() {
            this.taskListIsVisible = !this.taskListIsVisible
        }
    }

})

app.mount('#assignment')