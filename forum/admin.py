from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'date', 'author', 'created_at')
    list_filter = ('type', 'date')
    search_fields = ('title', 'body', 'author')

