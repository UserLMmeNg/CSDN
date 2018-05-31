var info = new Vue ({
	el:'#detail',
	data:{
		user_id:"",
		id:"",
		list:[],
		isShow:false,
	},
	mounted:function(){
		this.getData();
		this.judge();
	},
	methods:{
		getQuery:function(){
			var str = (location.search.length > 0 ? location.search.substring(1) : ''),
			args = {},
			items = str.length ? str.split("&") : [],
			item = null,	
			name = null,
			value = null;
			for(i = 0; i < items.length; i++){
				item = items[i].split("=");
				name = decodeURIComponent(item[0]);
				value = decodeURIComponent(item[1]);
				if (name.length) {
					args[name] = value;
				};
			}
			return args;
		},
		getData:function(){ 
			var that = this;
			$.ajax({
				url:'http://blog.com/api/blog/info',
				type:'get',
				dataType:'json',
				data:{
					"id":that.getQuery().id,
					"user_id":localStorage.getItem("user_id"),
				},
				success:function(res){
					that.list = res.data.blog_info;
				}
			})
		},
		collectBtn:function(){
			$.ajax({
				url:'http://blog.com/api/collect/add',
				type:'post',
				dataType:'json',
				data:{
					"blog_id":this.getQuery().id,
					"user_id":localStorage.getItem("user_id"),
				},
				success:function(res){
					alert("收藏成功");
				}
			})
		},
		judge:function(){
			var user_id = localStorage.getItem("user_id")
			if (user_id == "" || !user_id) {
				this.isShow = false;
			}
			else{
				this.isShow = true;
			}
		}
	}
})