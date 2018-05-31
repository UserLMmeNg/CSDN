var produce = new Vue ({
	el:'#produce',
	data:{
		title:"",
		classify_id:"",
		classify_lists:[],
	},
	mounted:function(){
		var ue = UE.getEditor('container');
		this.select();
	},
	methods:{
		getUeditorContent: function(){
    		return UE.getEditor('container').getContent()
    	},
		issue:function(){
			$.ajax({
				url:'http://blog.com/api/blog/doAdd',
				type:'post',
				dataType:'json',
				data:{
					"user_id":localStorage.getItem("user_id"),
					"title":this.title,
					"content": this.getUeditorContent(),
    				"classify_id": this.classify_id,
				},
				success:function(res){
					if (res.error_code == 0) {
						alert("发布成功");
					}
					else{
						alert(res.message);
					}
				}
			})
		},
		select:function(){ 
			var uId = window.location.search.split("=")[1];
			var that = this;
			$.ajax({
				url:'http://blog.com/api/blog/add',
				type:'get',
				dataType:'json',
				data:{
					"user_id":localStorage.getItem("user_id"),
					"blog_id":uId,
				},
				success:function(res){
					that.classify_lists = res.data.classify_lists;
					that.title=res.data.my_blog_info.title;
				}
			})
		}
	}
})