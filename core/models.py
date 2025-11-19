from django.db import models

# Legal resources
class LegalResource(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    url = models.URLField()
    category = models.CharField(max_length=100, blank=True)

    def __str__(self) -> str:
        return self.title


# News items for the news/reel section
class NewsItem(models.Model):
    title = models.CharField(max_length=200)      # headline
    summary = models.TextField(blank=True)
    source = models.CharField(max_length=200, blank=True)
    url = models.URLField()
    published_at = models.DateTimeField(null=True, blank=True)

    def __str__(self) -> str:
        return self.title


# Community events
class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    location = models.CharField(max_length=200)
    details = models.TextField(blank=True)
    signup_url = models.URLField(blank=True)

    def __str__(self) -> str:
        return f"{self.name} on {self.date}"
