from django.contrib import admin
from .models import Volunteer, DonationUsage, Event

admin.site.register(Volunteer)
admin.site.register(DonationUsage)
admin.site.register(Event)
