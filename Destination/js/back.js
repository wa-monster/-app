mui.back=function(){
	mui.plusReady(function(){
					var self=plus.webview.currentWebview();
					plus.webview.startAnimation({
						view:self,
						styles:{
							fromLeft:"0%",
							toLeft:"100%"
						}
					})
					setTimeout(function(){
						self.close();
					},200)
					
					
					//返回到登陆页面，无法进行动画切换，是直接跳转的
//							mui.openWindow({
//								url: 'login.html',
//								id: 'login',
//								show: {
//									aniShow: 'pop-in'
//								}
//							});
				})
}

				//子页面切换函数,
function sonTapAnima(Fselect,Sselect,Spage,fn){
					var index=0;
					mui(Fselect).on("tap",Sselect,function(){
						if(index==0){
							mui.plusReady(function(){
								var setting=plus.webview.create(Spage,Spage,{
									left:"100%"
								});
								index=1;
								setTimeout(function(){
									index=0;
								},1000)
								setting.show();
								plus.webview.startAnimation({
									view:setting,
									styles:{
										formLeft:"100%",
										toLeft:"0%"
									},
									action:"none"
								})
							})
						}
						if(fn){
							fn();
						}
					})
				}
