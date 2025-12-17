from rest_framework import viewsets
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-date')
    serializer_class = PostSerializer
    filterset_fields = ['type']  # allows ?type=news or ?type=event
