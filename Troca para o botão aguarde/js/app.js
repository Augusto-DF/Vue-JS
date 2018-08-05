var app = new Vue({
	el:"#app",
	data:{
		clic: false
	},
	methods:{
		userClick:function(){
			this.clic = !this.clic;
		}
	}	

});