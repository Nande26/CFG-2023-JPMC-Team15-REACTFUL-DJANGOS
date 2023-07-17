from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Volunteer, DonationUsage, Event
from .serializers import VolunteerSerializer, DonationUsageSerializer, EventSerializer


@api_view(['POST'])
def volunteer_registration(request):
    serializer = VolunteerSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def donationUsageView(request):
    if request.method == 'GET':
        objs = DonationUsage.objects.all()
        serializer = DonationUsageSerializer(objs, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def eventView(request):
    if request.method == 'GET':
        objs = Event.objects.all()
        serializer = EventSerializer(objs, many=True)
        return Response(serializer.data)
