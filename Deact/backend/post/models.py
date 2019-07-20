from django.db import models

# Create your models here.


class Area1(models.Model):
    id = models.IntegerField(primary_key=True)
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
    state = models.CharField(max_length=200)
    id = models.IntegerField(primary_key=True)
    def __str__(self):
        return self.state
