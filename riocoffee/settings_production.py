from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['ваш-домен.com', 'IP-сервера']

# Database для MySQL
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'riocoffee_db',
        'USER': 'root',
        'PASSWORD': 'ваш-пароль',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

# Static files
STATIC_ROOT = '/var/www/riocoffee/static/'
MEDIA_ROOT = '/var/www/riocoffee/media/'