var collect = new Vue ({
	el:'#collect',
	data:{
		user_id:"",
		blog_lists:[],
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://blog.com/api/collect/lists',
				type:'post',
				dataType:'json',
				data:{
					"user_id":localStorage.getItem("user_id")
				},
				success:function(res){
					that.blog_lists = res.data.blog_lists;
				}
			})
		}
	}
})