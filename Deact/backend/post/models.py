from django.db import models

# Create your models here.


class Post(models.Model):
    session = models.CharField(max_length=200)
    imageUrl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.session
