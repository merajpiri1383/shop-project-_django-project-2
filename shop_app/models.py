from django.db import models
class product(models.Model):
    title = models.CharField(max_length=300)
    name = models.CharField(max_length=400)
    description = models.TextField()
    image = models.ImageField(upload_to="image-products")
    price = models.IntegerField()
    def __str__(self):
        return f"{self.title} {self.name}"
class order(models.Model):
    items = models.CharField(max_length=1000,blank=True)
    name = models.CharField(max_length=400)
    email = models.EmailField(max_length=200)
    state = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    address = models.TextField()
    zipcode = models.CharField(max_length=200)
    total = models.IntegerField()
    def __str__(self):
        return self.name