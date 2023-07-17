from django.db import models


class Volunteer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=10)
    email = models.EmailField()
    dob = models.DateField()
    location = models.CharField(max_length=100)
    permission_to_contact_over_whatsapp = models.BooleanField(default=False)
    want_to_receive_newsletter = models.BooleanField(default=False)
    pincode = models.CharField(max_length=6)
    organization = models.CharField(max_length=100)


class DonationUsage(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    amountUsed = models.IntegerField()

    def __str__(self):
        return self.name


class Event (models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return self.name
