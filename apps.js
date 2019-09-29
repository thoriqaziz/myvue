var app = new Vue({
    el: '#latihan',
    data: {
        password1: '',
        password2: '',
        keterangan: ''
    },
    watch: {
        password2: 'validate'
    },
    methods: {
        validate: function(){
            if (this.password1 == this.password2){
                this.keterangan = 'password sama'
            }
            else{
                this.keterangan = 'password tidak sama'
            }
        }
    }
})