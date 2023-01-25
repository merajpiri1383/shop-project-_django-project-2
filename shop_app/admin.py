from django.contrib import admin
from shop_app.models import product,order
admin.site.site_header = "Ecommerce Shop"
admin.site.site_title = "Tite"
admin.site.index_title = "index title"
admin.site.register(product)
admin.site.register(order)