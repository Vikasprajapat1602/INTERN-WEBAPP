from django.urls import path
from .views import ApplicantCreateView

urlpatterns = [
    path('apply/', ApplicantCreateView.as_view(), name='applicant-create'),
]
