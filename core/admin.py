from django.contrib import admin
from .models import LegalResource, NewsItem, Event

admin.site.register(LegalResource)
admin.site.register(NewsItem)
admin.site.register(Event)
