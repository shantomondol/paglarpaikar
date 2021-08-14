const navsData = [
    {}
];


function navTemplate(nav) {
    return `
    
    <div class="container">

        <!--logo-->
        <div class="logo">
            <a href="index.html"><img src="images/favicon.png" alt="">Paglar Paikar - পাগলার পাইকার</a><br>
            <p>"ঘরে বসে সাশ্রয়ে বাজার, সাথে আছে পাগলার পাইকার"</p>
        </div>

        <!--navbar-->
        <div class="nav-top">
            <nav class="navbar navbar-default">

                <div class="navbar-header nav_2">
                    <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul class="nav navbar-nav ">
                        <li class=" active"><a href="index.html" class="hyper "><span>Home</span></a></li>

                        <li>
                            <a href="#" class="hyper"> <span>Abut</span></a>
                        </li>
                        <li><a href="#" class="hyper"><span>Contact Us</span></a></li>
                    </ul>
                </div>
            </nav>
            <div class="cart">

                <span class="fa fa-shopping-cart my-cart-icon"><span class="badge badge-notify my-cart-badge"></span></span>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
`;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;