(function($){
 function isReady(event_Ready){//console.info('isReady%O',event_Ready);
  const eR=event_Ready,$d=eR.target,$dE=$d.documentElement;
	//...
	const $popup=$dE.lastElementChild.appendChild((function(){
	 function f(i){const w=$,y=e;w.clearTimeout(y.timeOut);let x=y[i];if(x){x();y[i]=null};x=swapRootClass('popup-open','popup-close');y.timeOut=w.setTimeout(function(){y.isOpen=false;x.remove('popup-close','backdrop-in','backdrop')},1e3)}
	 const t=Tag,e=$d.createDocumentFragment().appendChild(t('div')),b=e.$Box=e.appendChild(t('span')),c=(b.id='popup-box',e.$H2=b.appendChild(t('h2')),e.$Article=b.appendChild(t('article')),e.$Buttons=b.appendChild(t('span'))),ok=e.$Ok=(c.id='popup-buttons',c.appendChild(t('button'))),ko=e.$Ko=c.appendChild(t('button'));
	 ok.id='popup-ok';ok.onclick=function(){f('actionOk')};
	 ko.id='popup-ko';ko.onclick=function(){f('actionKo')};
	 e.timeOut=null;
	 e.open=function(a,b,c,d,z){
		function f(x,y){e['$'+x].innerHTML=y||''}
		function g(x,y){f(x,y[0]);e['action'+x]=y[1]||null}
		const e=this,v=e.isOpen!==true;
		if(v){f('H2',a);f('Article',b);g('Ok',c);g('Ko',d);e.isOpen=true;swapRootClass('popup-close','popup-open').add(z!==false?'backdrop-in':'backdrop')};
		return v;
	 };
	 e.id='popup';
	 return e;
	})());
	$popup.open('Titolo','Testo articolo',['Conferma',function(){alert(1)}],['Chiudi',function(){alert(2)}],false);
	swapRootClass('unready','ready');
	return eR;
 }
 function isLoad(event_Load){//console.info('isLoad%O',event_Load);
  const $d=event_Load.target,$dE=$d.documentElement;
	//...
  //on('keyup',function(event_KeyUp){const n=event_KeyUp.keyCode;console.log('KeyUp%O',event_KeyUp,n);});
	swapRootClass('loading','loaded').remove('ready');
 }
 function on(a,b){const w=$;w.removeEventListener(a,b);w.addEventListener(a,b)}
 function at(a,b){const w=$,c=function(x){b(x);w.removeEventListener(a,c)};on(a,c)}
 function swapClass(a,b,c){function f(i,m){const o=d;o[i].apply(d,m);return e}const d=a.classList,e={add:function(){return f('add',arguments)},remove:function(){return f('remove',arguments)}};d.remove(b);d.add(c);return e}
 const BindCall=(function(x){const e=x.prototype;return e.bind.bind(e.call)})($.Function),$d=$.document,$dE=$d.documentElement,swapRootClass=BindCall(swapClass,null,$dE),Tag=BindCall($d.createElement,$d);
 swapRootClass('js-no','js').remove('loaded').add('loading','unready');
 if($d.readyState!=='complete'){at('DOMContentLoaded',isReady);at('load',isLoad)}else{isLoad(isReady({target:$d}))}
})(window);