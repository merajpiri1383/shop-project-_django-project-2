$(document).ready(function(){
    try{
        let total = JSON.parse(localStorage.getItem("total"))
        if(total != null){
            $(".badge-pill").text("("+total+")")
        }else{
            $(".badge-pill").text("(0)")
        }
    }catch{}
    function addcart(){
        if(localStorage.getItem("cart") != null){
            var context_popover = "";
            var number_popover = 1;
            var cart = JSON.parse(localStorage.getItem("cart"))
            cart_keys = Object.keys(cart)
            for(let key of cart_keys){
                var name = localStorage.getItem("product_name_"+key)
                context_popover +=  "<p class='text-primary'>" + number_popover+" "+ name + "... " + ' is   '+"<span class='badge badge-success'>" + cart[key]+ '</span>'+"</p> <br>"
                number_popover++;       
            } 
            context_popover+= "<a href='/checkout/' class='btn btn-warning'> Checkout </a>"
            $(".c1").popover();
            $(".c2").popover();
            document.querySelector(".c1").setAttribute("data-content",context_popover)
            document.querySelector(".c2").setAttribute("data-content",context_popover)
            }else{
                
            }
    }
    $(document).on("click",".btn-add-card",function(e){
    if(localStorage.getItem("cart") == null){
        var cart = {}
        console.log("null")
    }else{
        var cart = JSON.parse(localStorage.getItem("cart"))
        }
        var id = this.id.toString();
        if(cart[id] == undefined){
            cart[id] = 1 ;
            var title_product = document.getElementById("product_title_"+id).innerText
            var product_name = document.getElementById("product_name_"+id).innerText
            var name_product = ""
            for (let index = 0; index < product_name.length; index++) {
                if(index == 20){
                    break;
                }name_product += product_name[index];
            }name_product = title_product+ '  ' + name_product;
            var product_price = document.getElementById("product_price_"+id).innerText
            localStorage.setItem("product_price_"+id,product_price)
            localStorage.setItem("product_name_"+id,name_product)
            localStorage.setItem("cart",JSON.stringify(cart));
        }else{
            cart[id]++;
            localStorage.setItem("cart",JSON.stringify(cart))
        }
        var num = Object.values(JSON.parse(localStorage.cart))
        console.log(JSON.parse(localStorage.cart))
        var total = 0;
        for(let x of num){
            total = total + parseInt(x);
        }
        localStorage.setItem("total",total)
        $(".badge-pill").text("("+total+")")
        addcart();
    });
    $(document).on("click",".btn-secondary",function(){
        addcart();
    });
    // checkout
    if(localStorage.getItem("cart") != null){
        var cart = JSON.parse(localStorage.getItem("cart"))
        var keys = Object.keys(cart)
        var number_product = 1
        var total_all_price = 0;
        for(key of keys){
            let total_price = cart[key] * JSON.parse(localStorage.getItem("product_price_"+key))
            var text =  "<span class='badge badge-success badge-pill'>"+  number_product +"</span>   <b>"+ localStorage.getItem("product_name_"+key)+"</b> <span class='basge badge-warning badge-pill'> "+cart[key]+"</span>"
            let list_product = `<li class='list-group-item  p-3 font-font-weight-bold rounded'>${text} <span class='badge badge-warning font-weight-bolder'> ${total_price}$ </span></li><br>`
            $("#list-checkouts").before(list_product)
            total_all_price += parseFloat(total_price)
            number_product++;
            $("#total").val(total_all_price)
    }var total_all_price_text = `<li class='list-group-item d-flex align-items-center font-weight-bolder justify-content-between'>your total price :<span class='badge badge-warning badge-pill'>${total_all_price}</span>  </li>`
    $("#list-checkouts").append(total_all_price_text)
    }$("[class*='form-group']").submit(function(){
        $("#items").val(JSON.stringify(localStorage.getItem("cart")))
    })
})
