var canbuy = document.querySelector('#canbuy')
var canbuy_txt = canbuy.innerHTML
var canbuy_num = Number(canbuy_txt)
var num_buy = document.querySelector('#num')
var num_buy_txt = num.innerHTML
var num_buy_num = Number(num_buy_txt)
var buy = document.querySelector('.buy')
var buy_2 = document.querySelector('.buy-2')
var purchase_box = document.querySelector('.purchase')
var purchase = document.querySelector('#confirm')
var purchase_book = document.querySelector('.purchase-book')

let data = {
    index: 1,
    canbuy: 10,
    reservation_txt: '預購數量(上限30台):',
    reservation: 0,
    index2: 1,
    canbook: 30
}

let vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        changeIndex(change) {
            this.index = this.index + change
        },
        changeIndex2(change) {
            this.index2 = this.index2 + change
        },
        result() {
            if (this.canbuy >= 1) {
                this.canbuy = this.canbuy - this.index
                purchase_box.classList.remove('act')
                this.index = 1
            } else if (this.canbuy === 0) {
                purchase_box.classList.remove('act')
                this.canbuy = 0
            }
        },
        result2() {
            if (this.reservation < 30) {
                this.reservation = this.reservation + this.index2
                this.canbook = this.canbook - this.index2
                this.index2 = 1
                purchase_book.classList.remove('act')
            } else if (this.reservation === 30) {
            }
        },
        gotobuy() {
            gotobuy()
        },
        gotobook() {
            buy_2 = document.querySelector('.buy-2')
            book_over = document.querySelector('.buy-2').innerHTML
            if (book_over === '停售') {
                alert("商品活動已結束囉")
            }
            else if (this.reservation === 30) {
                buy_2.classList.add("over")
                over()
            } else {
                gotobook()
            }
        }
    }
})
var purchase_box = document.querySelector('.purchase')
var buy = document.querySelector('.buy')
var buy_2 = document.querySelector('.buy-2')
var timer;
function init() {
    timer = document.querySelector('#countdown')
    myvar = window.setInterval(countdown, 1000)
 

}
function countdown() {
    timer.innerHTML = timer.innerHTML - 1;
    if (timer.innerHTML > 59) {
        document.querySelector('.timeout').style.border = '5px rgb(39, 100, 57) solid'
    } else if (timer.innerHTML > 0) {
        document.querySelector('.timeout').style.border = '5px orange solid'
      
    } else if (timer.innerHTML == 0) {
        window.clearInterval(myvar)
        purchase_box.classList.remove("act")
        purchase_book.classList.remove("act")
        document.querySelector('.timeout').style.border = '5px rgb(88, 86, 86) solid'
        buy.innerHTML = '停售', buy.classList.add("stop")
        buy_2.innerHTML = '停售', buy_2.classList.add("stop")
        window.clearInterval(myvar)
    }
}



var purchase_box = document.querySelector('.purchase')
var toclose = document.querySelector('#close')
var purchase_book = document.querySelector('.purchase-book')
var toclose2 = document.querySelector('#close2')
function gotobuy() {
    if (buy.classList.contains("stop")) {
        alert("商品活動已結束囉")

    }
    else if (purchase_box.classList.contains('act')) {
        
    } else {
        purchase_box.classList.add('act')

    }
}
function gotobook() {
    console.log(buy.innerHTML)
    purchase_book.classList.add("act")
}


toclose.onclick = function () {
    if (purchase_box.classList.contains('act')) {
        purchase_box.classList.remove('act')

    }
}
toclose2.onclick = function () {
    if (purchase_book.classList.contains('act')) {
        purchase_book.classList.remove('act')
    }
}
function over() {
    buy_2.innerHTML = "預購達上限"
}

