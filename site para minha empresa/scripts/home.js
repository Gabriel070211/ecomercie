{/* <div class="container-cards">
<div class="produto">
    <img src="imagens/geladeira.png" id="geladeira">
    <h5>Geladeira Brastemp</h5>
    <div class="score"></div>
    <div class="pricefavorite">
        <div>
         <h3>R$3.599 <sup>00</sup></h3>
         <h4>10x de R$250</h4>
        </div>
        <i class="fa-solid fa-heart" ></i>
    </div>
    
   
</div>
</div> */}

const containerProducts = document.querySelector(".containerProducts")

const createProductCard = produtos.forEach((product)=>{
    console.log(product)
    const containerCards = document.createElement("div")
    containerCards.className = "container-cards"
    const produto = document.createElement("div")
    produto.className = "produto"
    const img = document.createElement("img")
    const h5 = document.createElement("h5")
    const score = document.createElement("div")
    score.className = "score"
    const price = document.createElement("div")
    price.className = "pricefavorite"
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const h4 = document.createElement("h4")
    const span = document.createElement("span")
    const sup = document.createElement("sup")


    containerCards.appendChild(produto)
    img.src = product.imagem
    img.alt = product.name
    produto.appendChild(img)
    h5.textContent = product.name
    produto.appendChild(h5)
    produto.appendChild(score)
    produto.appendChild(price)
    price.appendChild(div)
    h3.textContent = product.price
    h3.appendChild(sup)
    div.appendChild(h3)
    h4.textContent = product.parcelar
    div.appendChild(h4)
    price.appendChild(span)

    if(span.innerHTML===""){
        span.innerHTML = product.favorito
    }

    span.addEventListener("click",()=>{
        handlerFavorite(product,product.id,span)
    })


    containerProducts.appendChild(containerCards)


    
})

function handlerFavorite(product,id,span){

    if(produtos[id].favorito===redHeart){
        product.favorito = whiteHeart
        span.innerHTML = product.favorito
    }else if(produtos[id].favorito===whiteHeart){
        product.favorito = redHeart
        span.innerHTML = product.favorito
    }
}