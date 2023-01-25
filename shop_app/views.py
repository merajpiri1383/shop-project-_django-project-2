from django.shortcuts import render
from django.core.paginator import Paginator
from shop_app.models import product,order
def productview(request):
    products = product.objects.all()
    search = request.GET.get("search")
    if search != "" and search != None :
        products = product.objects.filter(title=search)
    paginator = Paginator(products,3)
    page_number = request.GET.get("page",1)
    products = paginator.page(page_number)
    return render(request,"index.html",{"products":products})
def productdetailview(request,pk):
    try :
        object = product.objects.get(id=pk)
    except:
        product.DoesNotExist("does not exist")
    return render(request,"detail.html",{"product":object}) 
def checkout(request):
    if request.method == "POST":
        items = request.POST.get("items","")
        name = request.POST.get("name","")
        email = request.POST.get("email","")
        state = request.POST.get("state","")
        city = request.POST.get("city","")
        address = request.POST.get("address","")
        zipcode = request.POST.get("zip","")
        total = request.POST.get("total","")
        print(total)
        Order = order(name=name,email=email,state=state,city=city,address=address,items=items,zipcode=zipcode,total=total)
    return render(request,"checkout.html")