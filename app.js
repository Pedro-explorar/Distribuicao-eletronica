//-------------------
//--Pedro Gabriel----
//--17/08/2023-------
//-------------------
let numero = document.getElementById("numero");
let protons = 1;  //Número de protons no átomo
let q;  //Conta quantos "elétrons" faltam para completar a distribuição
let subn = ["s","p","d","f"];  //Letras dos subníveis
let subc = ["DodgerBlue","#F00","#faf200","#0F0"];  //Cores representando os diferentes subníveis
let elem = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];  //Todos os símbolos da tabela periódica
let n;  //Define o nível inicial na diagonal do diagrama de Linus Pauling
let l;  //Define o subnível inicial na diagonal do diagrama de Linus Pauling
let n_local;  //Determina em qual nível da diagonal está checando
let l_local;  //Determina em qual subnível da diagonal está checando
let r;  //Representa a quantidade de subníveis ao longo de uma diagonal

distribuir();


function distribuir(){
	if(numero.value>118){   //Limita o intervalo para entre 1 inclusivo e 118 inclusivo
		numero.value = 118;
	} else if(numero.value<1){
		numero.value = 1;
	}
	protons = parseInt(numero.value);
	
	
	n = 1;
	l = 0;
	q = protons;
	document.getElementById("numeroProtons").innerHTML = protons;
	document.getElementById("elemento").innerHTML = elem[protons-1];
	document.getElementById("distribuido").innerHTML = "";
	for (t=1;t<8;t++){
		document.getElementById("a"+t).innerHTML = "";
	};
	while (q > 0){ // esse é para ir para a próxima diagonal
		l_local = l;
		n_local = n;
		r = (n + l + 1)/2;
		for (i=1;i<=r;i++){   // isso é para poder ir para a camada seguinte ou subnível seguinte 
			e_max = 2*(2*l_local+1) //Define a quantidade máxima de elétrons no subnível atual
			for (e=1;e<e_max;e++){
				if (e == q){break;}; 
			};
			document.getElementById("distribuido").innerHTML += n_local+""+subn[l_local]+"<sup>"+e+"</sup>, ";
			document.getElementById("a"+n_local).innerHTML += "<span style='background-color: "+subc[l_local]+";'>|"+n_local+""+subn[l_local]+"<sup>"+e+"</sup>|</span>"; //Escreve um subnível em um nível
			q -= e;
			if (q == 0){return;};
			l_local --;
			n_local ++;
		};
		if ((l+1) == n){n++;}
		else {l++;};
	};
};
