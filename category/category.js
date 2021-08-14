const categorysData = [
    {}
];


function categoryTemplate(category) {
    return `
    <div class="tab-pane active text-style" id="tab2">
                <div class="con-w3l text-center">
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/chal-dal.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>চাল-ডাল</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/oil.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>তেল</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/spices.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>মশলা</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/salt-sugar.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>লবন এবং চিনি</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/ready-mix.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>রেডি মিক্স</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/aata-moyda-suji.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>আটা, ময়দা ও সুজি</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/noodles.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>নুডুলস</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/soups.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>স্যুপ</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/icecreams.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>আইসক্রিম</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/powder-milk-cream.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>গুঁড়া দুধ এবং ক্রিম</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 pro-1">
                        <div class="col-m">
                            <a href="#" data-toggle="modal" class="offer-img">
                                <img src="images/personal-care.png" class="img-responsive" alt="">
                            </a>
                            <div class="mid-1">
                                <h6>স্বাস্থ্য এবং সৌন্দর্য</h6>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    `;
}


document.getElementById("category").innerHTML = `
    ${categorysData.map(categoryTemplate).join("")}
  `;