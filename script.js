const app = Vue.createApp({
    data() {
        return {
            text: "我是poko",
            data: [],
            temp: {},
            canEdit: "'disabled':'disabled'"
        }
    },
    methods: {
        addList() {
            if (this.text == "") {
                alert('尚未輸入資料')
            } else {
                this.data.push({
                    id: this.data.length + 1,
                    text: this.text
                })
                this.text = ""
            }
        },
        removeList(item) {
            const index = this.data.findIndex(obj => obj.id === item.id)
            this.data.splice(index, 1)
        },
        editList(item) {
            this.temp = { ...item }
            this.canEdit = true
        },
        updateList() {
            const index = this.data.findIndex(obj => obj.id === this.temp.id)
            this.data[index] = this.temp
            this.temp = {}
        }
    }
})
app.mount('.box')