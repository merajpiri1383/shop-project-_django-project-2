# Generated by Django 4.1.5 on 2023-01-25 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0007_product_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total',
            field=models.IntegerField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order',
            name='zipcode',
            field=models.CharField(default=None, max_length=200),
            preserve_default=False,
        ),
    ]
