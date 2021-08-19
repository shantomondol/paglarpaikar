function productCategoryTemplate(productCategory) {
    return `
        <div class="active tab-pane text-center text-style" id="tab2">
            <div class=" con-w3l">
                <div class="col-md-3 pro-1">
                    <div class="col-m">
                        <a href="${productCategory.link}" class="offer-img">
                            <img src="${productCategory.photo}" class="img-responsive" alt="${productCategory.name}">
                        </a>
                       
                            <div class="mid-1">                                
                                    <h6>${productCategory.name}</h6>                              
                            </div>
                    </div>
                </div>               
                <div id="${productCategory.id}"></div>
            </div>
        </div>

    `;
}

document.getElementById("productCategory").innerHTML = `
    ${productCategoryData.map(productCategoryTemplate).join("")}  
  `;