			//第一步找元素
			let ul = document.querySelector('#list')
			//图片
			let img = document.querySelector('#img')
			//输入框
			let input = document.querySelector('#text')
			//发送按钮
			let sent = document.querySelector('#btn')
			//定义一个标识用来记录是哪一张图片
			let n = 1
			//当点击发送时把input的value赋给li
			sent.onclick = function(){
				if(input.value == ''){
					alert('请输入内容')
					return
				}else if(n == 1){
					n=1
					ul.innerHTML += `
					<li class="item clearfix">
						<div class="fl item-bgc">${input.value}</div>
						<div class="fl item-pic">
							<img src="../img/2.png"/>
						</div>
					</li>
				`
				input.value = ''
				}else{
					n=2
					ul.innerHTML += `
					<li class="item clearfix">
						<div class="item-pic fl">
							<img src="../img/3.png"/>
						</div>
						<div class="fl item-text">${input.value}</div>
					</li>
				`
				input.value = ''
				}
				
			}
			//当点击图片是，判断点击的哪一张
			img.onclick = function(){
				if(n==1){
					img.src="../img/3.png"
					n = 2
				}else{
					img.src="../img/2.png"
					n = 1
				}
			}