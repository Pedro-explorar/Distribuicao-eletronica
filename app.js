//-------------------
//--Pedro Gabriel----
//--17/08/2023-------
//-------------------
let numero = document.getElementById("numero");
let protons = 1; //Número de protons no átomo
let q;
let subn = ["s","p","d","f"]; //Letras dos subníveis
let subc = ["DodgerBlue","#F00","#faf200","#0F0"]; //Cores representando os diferentes subníveis
let elem = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
let n;
let l;
let l_local;
let n_local;
let r;

distribuir();


function distribuir(){
	if(numero.value>118){
		numero.value = 118;
	} else if(numero.value<1){
		numero.value = 1;
	}
	protons = parseInt(numero.value);
	
	
	n = 1;
	l = 0;
	q = protons;
	document.getElementById("np").innerHTML = protons;
	document.getElementById("elemento").innerHTML = elem[protons-1];
	document.getElementById("distribuido").innerHTML = "";
	for (t=1;t<8;t++){
		document.getElementById("a"+t).innerHTML = "";
	};
	while (q > 0){ // esse é para ir para a próxima diagonal
		l_local = l;
		n_local = n;
		r = (n_local + l_local + 1)/2;
		for (i=1;i<=r;i++){   // isso é para poder ir para a camada seguinte ou subnível seguinte 
			e_max = 2*(2*l_local+1) //Define a quantidade máxima de elétrons no subnível atual
			for (e=1;e<e_max;e++){
				if (e == q){break;}; 
			};
			document.getElementById("distribuido").innerHTML += n_local+""+subn[l_local]+"<sup>"+e+"</sup>, ";
			document.getElementById("a"+n_local).innerHTML += "<span style='background-color: "+subc[l_local]+";'>|"+n_local+""+subn[l_local]+"<sup>"+e+"</sup>|</span>";
			q -= e;
			//alert(n_local+", "+l_local+", "+e);
			if (q == 0){break;};
			l_local --;
			n_local ++;
		};
		//alert(n_local+", "+l_local+", "+e);
		if (q == 0){break;};
		if ((l+1) == n){n++;}
		else {l++;};
	};
};
