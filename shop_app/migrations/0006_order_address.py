# Generated by Django 4.1.5 on 2023-01-24 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0005_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='address',
            field=models.TextField(default=None),
            preserve_default=False,
        ),
    ]
