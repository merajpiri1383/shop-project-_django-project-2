from django.urls import path
from shop_app import views
app_name="shop_app"
urlpatterns = [
    path("",views.productview,name="index"),
    path("<int:pk>/",views.productdetailview,name="detail"),
    path("checkout/",views.checkout,name="checkout"),
]