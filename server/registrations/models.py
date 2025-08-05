from django.db import models

# Create your models here.
# server/basti_backend/models.py

class Applicant(models.Model):
    ROLE_CHOICES = [
        ('Intern', 'Intern'),
        ('Volunteer', 'Volunteer'),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    motivation = models.TextField()  # Why do you want to join?
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} - {self.role}"
