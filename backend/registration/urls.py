from django.urls import path
from .views import volunteer_registration, donationUsageView, eventView

urlpatterns = [
    path('volunteer/', volunteer_registration, name='volunteer_registration'),
    path('donation/', donationUsageView, name='donationUsageView'),
    path('events/', eventView, name= 'eventView')
]
