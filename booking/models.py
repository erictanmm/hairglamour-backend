from django.db import models

# Create your models here.

class Appointment(models.Model):
    customer_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    stylist = models.CharField(max_length=100)
    service = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    duration = models.IntegerField(help_text="Duration in minutes")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.customer_name} - {self.date} at {self.time}"

