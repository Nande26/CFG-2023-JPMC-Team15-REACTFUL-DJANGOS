from rest_framework import serializers
from .models import Volunteer, DonationUsage, Event


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = "__all__"


class DonationUsageSerializer(serializers.ModelSerializer):
    class Meta:
        model = DonationUsage
        fields = "__all__"


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
