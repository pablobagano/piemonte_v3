console.log('JS enabled')
const botoes = document.querySelectorAll('.btn-produtos');
const botaoBrasilCap = document.querySelector('.brasilcap'); 
const botaoContaCorrente = document.querySelector('.conta');
const infoProduto = document.querySelector('.info-produto'); 
const tituloProduto = document.querySelector('.produto-titulo');
const descricaoProduto = document.querySelector('.descricao-produto') 
const documentosProduto = document.querySelector('.documentos-produto'); 


botaoBrasilCap.addEventListener(
    'click', () => {
        alterarProduto("capitalizacao")
        botaoBrasilCap.classList.add('active')
    }
)

botaoContaCorrente.addEventListener(
    'click', () => {
        alterarProduto("conta")
        botaoContaCorrente.classList.add('active')
    }
)

function alterarProduto(tipoProduto){
    botoes.forEach(function (botao){
        botao.classList.remove('active')
    })
    infoProduto.setAttribute('produto', tipoProduto)
    switch (tipoProduto){
        case "capitalizacao":
            tituloProduto.innerHTML = `
            BrasilCap - Capitalização
            `
            descricaoProduto.innerHTML=`
            <p>Planejar o futuro e economizar para realizar seus sonhos é possível com o Ourocap. 
            Você pode escolher um método de pagamento que se adeque ao seu orçamento e ainda ter a chance de ganhar prêmios mensais. 
            Não é apenas uma forma de poupar; é também uma oportunidade de se recompensar regularmente.</p>
            <p>Com o Ourocap, o dia de sorte pode estar mais próximo do que você imagina. Ao adquirir um título, você recebe combinações únicas de números da sorte que lhe permitem participar de sorteios. 
            Esses sorteios são adaptados a cada tipo de pagamento, aumentando suas chances de ganhar algo especial enquanto você poupa.</p>
            <p>Além disso, o valor que você investe no Ourocap retorna para você. Quando o prazo do título termina, o montante que você acumulou — capitalizado e ajustado pela Taxa Referencial — é automaticamente creditado em sua conta cadastrada. 
            Esse processo é feito sem a necessidade de qualquer ação da sua parte para solicitar o resgate. 
            Assim, você recebe de volta 100% do que pagou, mais os reajustes, garantindo que seu dinheiro não apenas está seguro, mas também rendendo.</p>
            `
            documentosProduto.innerHTML = `
            <ul>
                <li>CPF</li>
                <li>Conta Corrente BB</li>
            </ul>
            `
            break
        case "conta":
            tituloProduto.innerHTML = `
            Conta Corrente
            `
            descricaoProduto.innerHTML = `
            <p>Desfrute das inúmeras vantagens de ter uma conta corrente BB. Essa conta não só oferece a praticidade que você precisa para o dia a dia, mas também assegura a confiabilidade
            que vem com o renome do Banco do Brasil. Ao abrir sua conta, você terá acesso imediato a uma ampla gama de produtos e serviços financeiros, incluindo cheque especial, PIX, cartões de crédito,
             empréstimos com condições vantajosas, opções de investimento, seguros, entre outros recursos valiosos para a sua vida financeira.</p>
            <p>E o melhor é que abrir a sua conta é fácil e rápido. Com apenas alguns cliques através do aplicativo, você pode iniciar o processo e,
             uma vez aprovado, começar a aproveitar todos esses benefícios sem demora.</p>
            <p>Além disso, você pode realizar esse procedimento de onde estiver e a qualquer momento, aproveitando a interface intuitiva do app. E não se preocupe com a segurança; ao se juntar ao Banco do Brasil,
             você conta com um dos sistemas de segurança bancária mais robustos do mercado. 
            Com a conta corrente BB, você tem a praticidade ao alcance das mãos e a tranquilidade que precisa.</p>
            `
            documentosProduto.innerHTML = `
            <ul>
                <li>CPF</li> 
                <li>Idade entre 18 e 60 anos</li> 
                <li>Aparelho celular</li> 
                <li>Número de telefone com DDD</li> 
            </ul>
            `
            break
        default:
            break
    }
}

