from django.contrib import admin
from .models import Applicant

# Register your models here.


@admin.register(Applicant)
class ApplicantAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'phone', 'role', 'submitted_at')
    search_fields = ('full_name', 'email', 'role')
    list_filter = ('role', 'submitted_at')
