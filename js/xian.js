function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){

	//滑过鼠标或点击鼠标事件
	var hua=$('btce').getElementsByTagName("li"),
		divs=document.getElementsByName("cai");
		// alert(hua.length);
		   // alert(divs.length);

	// if(hua.length!=divs.length)
	// 	return;

	// 遍历hua下的所有li
	for(var i=0;i<hua.length;i++){
		hua[i].shuxin=i;
		hua[i].onclick=function(){
			// alert(this.shuxin);
			for(var j=0;j<hua.length;j++){
				hua[j].className='';
				divs[j].style.display='none';
			}
			this.className='gaoliang';
			divs[this.id].style.display='block';

		}
	}
}