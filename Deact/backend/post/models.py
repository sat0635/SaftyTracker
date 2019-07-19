from django.db import models

# Create your models here.


class Area1(models.Model):
    session = models.CharField(max_length=200)
    imageUrl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.session

class Session1_2(models.Model):
    session = models.CharField(max_length=200)
    imageUrl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.session

class Session1_3(models.Model):
    session = models.CharField(max_length=200)
    imageUrl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.session

class Session1_4(models.Model):
    session = models.CharField(max_length=200)
    imageUrl = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.session


class User(models.Model):
    name = models.CharField(max_length=200)
    imageUrl = models.TextField()
    

    def __str__(self):
        return self.name
