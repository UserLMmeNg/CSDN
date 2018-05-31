var myBlog = new Vue ({
	el:'#my_blog',
	data:{
		list:[],
	},
	mounted:function(){
		this.getData();
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://blog.com/api/blog/myBlog',
				data:{
					user_id:localStorage.getItem("user_id")
				},
				type:'post',
				dataType:'json',
				success:function(res){
					if (res.error_code == 0) {
						that.list = res.data.my_blog_lists
					}
					else{
						alert(res.message);
					}
				}
			})
		},
		deleteBtn:function(item){
			var that = this;
			$.ajax({
				url:'http://blog.com/api/blog/del',
				data:{
					user_id:localStorage.getItem("user_id"),
					blog_id:item.id,
				},
				type:'post',
				dataType:'json',
				success:function(res){
					if (res.error_code == 0) {
						alert("删除成功");
						that.list.forEach(function(i,index){
							if (i.user_id = item.id) {
								that.list.splice(index,1)
							};
						})
					}
					else{
						alert(res.message);
					}
				}
			})
		},
		editBtn:function(item){
			$.ajax({
				url:'http://blog.com/api/blog/add',
				data:{
					user_id:localStorage.getItem("user_id"),
					blog_id:item.id,
				},
				type:'get',
				dataType:'json',
				success:function(res){
					window.location.href = "./produce.html?id="+item.id;
				}
			})
		}
	}
})