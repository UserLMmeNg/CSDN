var app = new Vue ({
	el:'#homepage',
	data:{
		blog:[],
		navLists:[],
		banner:[],
		isShow:false,
	},
	mounted:function(){
		this.getData();
		this.judge();
	},
	methods:{
		getData:function(){
			var that = this;
			$.ajax({
				url:'http://blog.com/api/index/index',
				type:'get',
				dataType:'json',
				success:function(res){
					that.blog = res.data.blog_lists;
					that.navLists = res.data.classify_lists;
					that.banner = res.data.banner;
					that.swiperBanner();
				}
			})
		},
		swiperBanner:function(){
			var mySwiper = new Swiper('.swiper-container',{
				loop : true,
				autoplay: {
		        delay: 2500,
		        disableOnInteraction: false,
		        },
				pagination: {
		            el: '.swiper-pagination',
		            clickable: true,
		        },
		        observer:true,
		    	observeParents:true,
			});
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
	},
})