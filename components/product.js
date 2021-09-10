function productTemplate(product) {
    return `
        <div class="tab-pane text-style" id="tab1">
            <div class=" con-w3l">
                <div class="col-md-3 pro-1">
                    <div class="col-m">
                        <a href="#" class="offer-img">
                            <img src="${product.photo}" class="img-responsive" alt="${product.name}">
                        </a>
                            <div class="mid-1">
                                <h6>${product.name}</h6>
                                <div class="mid-2">
                                    <p><label>৳${product.storePrice}</label><em class="item_price">৳${product.ourPrice}</em></p>
                                    <div class="clearfix"></div>
                                </div>
                            </div>                       
                        <div class="add">
                            <button class="btn btn-danger my-cart-btn my-cart-b" data-id="8" data-name="${product.name}" data-summary="summary 8" data-price="${product.ourPrice}" data-quantity="1" data-image="${product.photo}">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

document.getElementById("product").innerHTML = `
    ${productData.map(productTemplate).join("")}  
`;