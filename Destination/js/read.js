function getid(id){
	return document.getElementById(id);
}
mui.plusReady(function(){
	var read=getid("read");
	read.addEventListener("tap",function(){
		mui.openWindow({
			url:"../shu/read.html",
			id:"read.html",
			extras:{
				bookname:getid("shuname").getAttribute("data-shuname"),
				shuname:getid("shuname").innerHTML,
				author:getid("author").innerHTML,
				updata:getid("lianzai").innerHTML
			}
		})
		
	})
	
	//加入书架
	var join=getid("join");
	if(localStorage.getItem("loginNum")){
			var login=JSON.parse(localStorage.getItem("loginNum"));
			if(login.shu.length===0){
					join.innerHTML="加入书架";
					join.addEventListener("tap",function(){
						var shu={
							shu:getid("shuname").getAttribute("data-shuname"),
							shuname:getid("shuname").innerHTML,
							author:getid("author").innerHTML,
							updata:getid("lianzai").innerHTML
						}
						login.shu.push(shu);
						localStorage.setItem("loginNum",JSON.stringify(login));
						plus.nativeUI.toast("已加入书架")
						this.innerHTML="已加入书架";
						
						return ;
					});
			}
			for(var i=0;i<login.shu.length;i++){
				if(login.shu[i].shu==getid("shuname").getAttribute("data-shuname")){
					join.innerHTML="已加入书架";
					join.addEventListener("tap",function(){
						plus.nativeUI.toast("已经在书架当中了");
					});
					break;
				}
				if(i==login.shu.length-1){
					join.addEventListener("tap",function(){
						
						var shu={
							shu:getid("shuname").getAttribute("data-shuname"),
							shuname:getid("shuname").innerHTML,
							author:getid("author").innerHTML,
							updata:getid("lianzai").innerHTML
						}
						login.shu.push(shu);
						localStorage.setItem("loginNum",JSON.stringify(login));
						plus.nativeUI.toast("已加入书架")
						this.innerHTML="已加入书架";
					});
					
					
				}
			}
	}else{
		join.addEventListener("tap",function(){
			
				var login=plus.webview.create("../login.html");
				login.show();
				plus.webview.currentWebview().close();
				return ;
		})

	}
	
	//comment
	function comment(){
		if(localStorage.getItem("comment")){
			var ee=JSON.parse(localStorage.getItem("comment"));
			ee.eee.forEach(function(item){
				if(item.bookid==getid("shuname").getAttribute("data-shuname")){
					var li = cre("li");
					var img = cre("img");
					var div = cre("div");
					var p = cre("p");
					
					adc(li,"mui-table-view-cell");
					adc(li,"mui-media");
					adc(img,"mui-media-object");
					adc(img,"mui-pull-left");
					adc(div,"mui-media-body");
					
					img.src=localStorage.getItem("pichead");
					div.innerHTML=item.user;
					p.innerHTML=item.txt;
					div.append(p);
					li.append(img);
					li.append(div);
					document.getElementsByClassName('mui-table-view')[0].append(li);
				}
			})
		}
	}
	comment();
	
	function cre(el){
		return document.createElement(el);
	}
	function adc(el,klass){
		el.classList.add(klass);
	}
	
})
