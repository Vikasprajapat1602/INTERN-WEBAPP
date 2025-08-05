from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Applicant
from .serializers import ApplicantSerializer

# Create your views here.
# registrations/views.py


class ApplicantCreateView(APIView):
    def post(self, request):
        serializer = ApplicantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Application submitted successfully.'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def list_applicants(request):
    applicants = Applicant.objects.all().order_by('-submitted_at')
    serializer = ApplicantSerializer(applicants, many=True)
    return Response(serializer.data)