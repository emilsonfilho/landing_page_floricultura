function catalogo() {
		window.alert('Quaisquer nomes e informações aqui presentes são totalmente fictícias e não tem nenhum embasamento real. \nQuaisquer coincidências não passarão disso!')
		
		/* Coletando Tags */
		var precoCDA = document.getElementById('cravo-do-amor')
		var precoMDA = document.getElementById('miosotis-da-agua')
		var precoL = document.getElementById('lilas')
		var precoL2 = document.getElementById('lisianto')
		var precoTDJ = document.getElementById('tulipa-de-jardim')
		
		/* ----------- TABELA DE PREÇOS ------*/
		var preco_cda = 299.97
		var preco_mda = 282.00
		var preco_l = 17.01
		var preco_l2 = 91.05
		var preco_tdj = 450
		/* ----------------------------------- */
		
		/* Conversão de Valores */
		var precoCravoDoAmor = Number(preco_cda).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
		var precoMiosotisDaAgua = Number(preco_mda).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
		var precoLilas = Number(preco_l).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
		var precoLisianto = Number(preco_l2).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
		var precoTulipaDeJardim = Number(preco_tdj).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
		
		/* Exibição */
		precoCDA.innerText = precoCravoDoAmor
		precoMDA.innerText = precoMiosotisDaAgua
		precoL.innerText = precoLilas
		precoL2.innerText = precoLisianto
		precoTDJ.innerText = precoTulipaDeJardim
}
