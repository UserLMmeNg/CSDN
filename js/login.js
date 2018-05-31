var login = new Vue ({
	el:'#login',
	data:{
		phone:"",
		password:"",
	},
	mounted:function(){
		// this.getData();
	},
	methods:{
		login:function(){
			if (this.phone == "") {
				alert("用户名不能为空！");
				return false;
			};
			if (this.password == "") {
				alert("密码不能为空！");
				return false;
			};
			$.ajax({
				url:'http://blog.com/api/user/doLogin',
				type:'post',
				dataType:'json',
				data:{
					"phone":this.phone,
					"password":this.password,
				},
				success:function(res){
					if (res.error_code == 0) {
						localStorage.setItem("user_id",res.data.user.userid);
						localStorage.setItem("user_img",res.data.user.userimg);
						localStorage.setItem("user_name",res.data.user.username);
						alert("登录成功！");
						location.href = "./index.html";
					}
					else{
						alert(res.message);
					}
				}
			})
		},
	}
})