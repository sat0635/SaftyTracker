# Generated by Django 2.0.13 on 2019-07-20 11:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0005_auto_20190719_0338'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='name',
            new_name='state',
        ),
        migrations.RemoveField(
            model_name='user',
            name='imageUrl',
        ),
    ]
