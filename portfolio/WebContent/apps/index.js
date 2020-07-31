//과정명 : 스마트 하이브리드앱 콘텐츠 개발
/*  아래 항목을 기재하세요
 *  훈련생 성명 :
 *  
 */
initPage(1);

										//page portfolio section Color Setting
//****************************************************************************************************************************************
// 1. 시작 
	let colorRand = [{bg:"BlanchedAlmond",fg:"black"},{bg:"BlueViolet",fg:"white"},
						{bg:"Crimson",fg:"white"},{bg:"CadetBlue",fg:"white"},{bg:"FireBrick",fg:"white"},{bg:"LemonChiffon",fg:"black"}];
	let fds = document.getElementsByTagName("fieldset");
	let oldNum;
	for(let i=0;i<fds.length;i++){
		let ranNum;
		while(true){
			ranNum = randomColor();
			if(ranNum!=oldNum){
				oldNum=ranNum;
				break;
			}			
		}	
		fds[i].style="background:"+colorRand[ranNum].bg+";color:"+colorRand[ranNum].fg;
		fds[i].children[1].style.color=colorRand[ranNum].fg;
		let parentColor="";
		if(colorRand[ranNum].fg=="white"){
			parentColor="black";
		}else{
			parentColor="LightGrey";
		}
		fds[i].parentElement.style="background:"+parentColor;
	}
	function randomColor(){
		let resNum = parseInt(Math.random()*(colorRand.length));
		return resNum;
	}
// 1. 끝
/* 1. 시작 ~ 1. 끝 까지의 코드 내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 *  
 * for, while 두개의 반복문으로 6개의 배경색과 2개의 글자 색이 랜덤으로 지정되며 바뀌고 있다.
 * 
 * 
 * 
 */
	
										//footer layout setting part
//****************************************************************************************************************************************	
// 2. 시작
	footerLayout();
	function footerLayout(){
		let footer = document.querySelector("footer");
		footer.style="position:fixed;top:"+(window.innerHeight-footer.offsetHeight)+"px";	
	}
// 2. 끝
/* 2. 시작 ~ 2. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * position:fixed;top를 사용하여 footer를 아래에 고정 시켜놓았다.
 * 
 * 
 * 
 */

										//event Listener part
//****************************************************************************************************************************************	
// 3. 시작
	window.addEventListener("resize",footerLayout);
	let fntSel = document.getElementById("fntSel");
	fntSel.addEventListener("change",function(e){
		console.log("chg event trigger!!!!");
		console.log("chg value confirm:"+this.value);
		initPage(this.value);
		footerLayout();	
	});
//3. 끝
/* 3. 시작 ~ 3. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * 화면 사이즈를 확대 및 축소를 할때 footer의 크기 또한 변경하게 해 준다.
 * 
 * 
 * 
 */
	
										//preview, member mouse event register
//****************************************************************************************************************************************	
// 4. 시작	
	let prevs = document.querySelectorAll(".prev");
	let pmems = document.querySelectorAll(".pmem");
	prevs.forEach(function(item,index){
		item.addEventListener("mousedown",viewsibring,false);
		item.addEventListener("mouseup",hidesibring,false);
		pmems[index].addEventListener("mousedown",viewsibring,false);
		pmems[index].addEventListener("mouseup",hidesibring,false);
	});
	function viewsibring(e){
		this.nextSibling.style.display="block"
		this.nextSibling.style.left=(e.pageX+10)+"px";		
	}
	function hidesibring(){
		this.nextSibling.style.display="none";
	}
//4. 끝
/* 4. 시작 ~ 4. 끝 까지의 코드내용을 분석하여 화면결과와 비교후 해당 로직을 상세히 기술하시오.
 * 
 * mousedown, mouseup 을 사용하여 미리보기를 누르고 있는 동안 내용을 보고 끄게 만들었다.
 * 
 * 
 * 
 */
	
					//etc function part
function initPage(totalFntSize){//totalFntSize: 수치 변경으로 전체 폰트 및 em 태그 사이즈 변경
	let body = document.getElementsByTagName("body")[0];
	body.style.fontSize=totalFntSize+"em";
}
