from django.http import JsonResponse
from .models import LegalResource, NewsItem, Event

def resources_list(request):
    items = list(LegalResource.objects.order_by("title").values())
    return JsonResponse({"items": items})


def news_list(request):
    items = list(NewsItem.objects.order_by("-published_at", "title").values())
    return JsonResponse({"items": items})


def events_list(request):
    items = list(Event.objects.order_by("date").values())
    return JsonResponse({"items": items})