let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll('.slide');

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = function () {
    if (slide_index + 1 === slides.length) {
        slide_index = 0
    } else {
        slide_index = slide_index + 1
    }
}
prevSlide = function () {
    if (slide_index - 1 < 0) {
        slide_index = slides.length - 1
    } else {
        slide_index = slide_index - 1
    }
}

//        Pousa slide hover slide
let slider = document.querySelector('.slider');

slider.addEventListener('mousemove', () => slide_play = false)
slider.addEventListener('mouseleave', () => slide_play = true)

let slideNext = document.querySelector('.slide-next');
let slidePrev = document.querySelector('.slide-prev');

slideNext.addEventListener('click', () => {
    nextSlide()
    showSlide()
})

slidePrev.addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

setInterval(() => {
    if (!slide_play) {
        return
    }
    nextSlide()
    showSlide()
}, 3000);



let products = [{
        name: 'JBL E55BT KEY BLACK',
        image1: './Images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './Images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './Images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './Images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    }, 
    {
        name: 'JBL TUNE 750BTNC',
        image1: './Images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './Images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    }, 
    {
        name: 'JBL Horizon',
        image1: './Images/JBLHorizon_001_dvHAMaster.png',
        image2: './Images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    }, 
    {
        name: 'JBL Tune 220TWS',
        image1: './Images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './Images/JBL_TUNE220TWS_ProductImage_Pink_back.png',
        old_price: '400',
        curr_price: '300'
    }, 
    {
        name: 'UA Project Rock',
        image1: './Images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './Images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    }, 
    {
        name: 'JBL Endurance SPRINT',
        image1: './Images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './Images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    }

]

let productsList = document.querySelector('#latest-products');
let bestProductsList = document.querySelector('#best-products');

// console.log(product_list);

products.forEach(e => {
    let prod = `
                <div class="col-3 col-md-6 col-sm-12">
                    <div class="products__card">
                        <div class="product__card-img">
                            <img src="${e.image1}" alt="">
                            <img src="${e.image2}" alt="">
                        </div>
                        <div class="product__card-info">
                            <div class="product-btn">
                                <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                   <i class="bx bxs-cart-add"></i> 
                                </button>
                                <button class="btn-flat btn-hover btn-cart-add">
                                    <i class="bx bxs-heart"></i> 
                                </button>
                            </div>
                            <div class="product__card-name">
                                ${e.name}
                            </div>
                            <div class="product__card-price">
                                <span><del>${e.old_price}</del></span>
                                <span class="curr-price">${e.curr_price}</span>
                            </div>
                        </div>
                    </div>
                </div>
    `
    
    productsList.insertAdjacentHTML("beforeend", prod)
    bestProductsList.insertAdjacentHTML("afterbegin", prod)
})