const app = Vue.createApp({
    data() {
        return {
            text: "我是poko",
            data: [],
            temp: {},
            canEdit: false,
            status: "all"
        }
    },
    computed: {
        filter() {
            switch (this.status) {
                case 'nofinish':
                    return this.data.filter((item) => !item.isfin);
                case 'finish':
                    return this.data.filter((item) => item.isfin);
                default:
                    return this.data;
            }
        }
    },
    methods: {
        addList() {
            if (this.text == "") {
                alert('尚未輸入資料')
            } else {
                this.data.push({
                    id: this.data.length + 1,
                    text: this.text,
                    isfin: false
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
            this.canEdit = false
        },
        tagfinish(item) {
            const index = this.data.findIndex(obj => obj.id === item.id)
            this.data[index].isfin = !this.data[index].isfin
        }
    }
})
app.mount('.box')