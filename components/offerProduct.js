function offerProductTemplate(offerProduct) {
    return `
        <div class="tab-pane text-style" id="tab1">
            <div class=" con-w3l">
                <div class="col-md-3 pro-1">
                    <div class="col-m">
                        <a href="#" class="offer-img">
                            <img src="${offerProduct.photo}" class="img-responsive" alt="${offerProduct.name}">
                            <div class="offer">
                                <p>Offer</p>
                            </div>
                        </a>
                            <div class="mid-1">
                                <h6>${offerProduct.name}</h6>
                                <div class="mid-2">
                                    <p><label>${offerProduct.storePrice}</label><em class="item_price">${offerProduct.ourPrice}</em></p>
                                    <div class="clearfix"></div>
                                </div>
                            </div>                       
                        <div class="add">
                            <button class="btn btn-danger my-cart-btn my-cart-b" data-id="8" data-name="${offerProduct.name}" data-summary="summary 8" data-price="${offerProduct.ourPrice}" data-quantity="1" data-image="${offerProduct.photo}">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div id="${offerProduct.id}"></div>
            </div>
        </div>
    `;
}

document.getElementById("offerProduct").innerHTML = `
    ${offerProductData.map(offerProductTemplate).join("")}  
  `;