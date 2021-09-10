const productCategorysData = [
    {        
        id: 1,
        photo: "images/chal-dal.png",
        name: "চাল-ডাল",
        link: "chal-dal.html"
    },
    {        
        id: 2,
        photo: "images/oil.png",
        name: "তেল",
        link: "oil.html"
    },
    {        
        id: 3,
        photo: "images/spices.png",
        name: "রেডি মিক্স ও মশলা",
        link: "ready-mix-and-spices.html"
    },
    {        
        id: 4,
        photo: "images/salt-sugar.png",
        name: "লবন এবং চিনি",
        link: "salt-sugar.html"
    },
    {        
        id: 5,
        photo: "images/aata-moyda-suji.png",
        name: "আটা, ময়দা ও সুজি",
        link: "aata-moyda-suji.html"
    },
    {        
        id: 6,
        photo: "images/noodles.png",
        name: "নুডুলস",
        link: "noodles.html"
    },
    {        
        id: 7,
        photo: "images/soups.png",
        name: "স্যুপ",
        link: "soups.html"
    },
    {        
        id: 8,
        photo: "images/icecreams.png",
        name: "আইসক্রিম",
        link: "icecreams.html"
    },
    {        
        id: 9,
        photo: "images/powder-milk-cream.png",
        name: "গুঁড়া দুধ এবং ক্রিম",
        link: "powder-milk-cream.html"
    },
    {        
        id: 10,
        photo: "images/personal-care.png",
        name: "স্বাস্থ্য এবং সৌন্দর্য",
        link: "personal-care.html"
    }
];





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
    ${productCategorysData.map(productCategoryTemplate).join("")}
  `;