from django.db import models

class Post(models.Model):
    POST_TYPES = [
        ('news', 'News'),
        ('event', 'Event'),
    ]

    title = models.CharField(max_length=200)
    body = models.TextField()
    type = models.CharField(max_length=10, choices=POST_TYPES)
    date = models.DateField()
    author = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.type})"
        