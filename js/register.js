var register = new Vue ({
	el:'#register',
	data:{
		phone:null,
		password:null,
		uname:null,
	},
	mounted:function(){
        this.getData();
	},
	methods:{
		getData:function(dataObj){
			$.ajax({
				url:'http://blog.com/api/user/doReg',
				type:'post',
				dataType:'json',
				data:dataObj,
				success:function(res){
					console.log(res);
				},
			})
		},
		click:function(){
			var that = this;
			var phone = $(".phone-num").val();
			var password = $(".pass-word").val();
			var uname = $(".user-name").val();
			var data = {
				'phone' : phone,
				'password' : password,
				'uname' : uname,
				'format' : "json",
			}
			that.getData(data);
		}
	}
})