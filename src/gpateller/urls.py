from django.conf.urls import patterns, include, url
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
admin.autodiscover()

from gpateller_app import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gpateller.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
	url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT,}),
	#url(r'^gpateller/', include('gpateller.urls')),
	url(r'^admin/', include(admin.site.urls)),
	url(r'^home$', views.home_view, name='gpateller'),
	url(r'^$', views.login_view, name='Login'),
	url(r'^tr/login$', views.login_post_tr, name='Login'),
	url(r'^en/login$', views.login_post_en, name='Login'),
	url(r'^logout$', views.logout_view, name='Logout'),
	url(r'^tr/signup$', views.signup_view_tr, name='Sign Up'),
	url(r'^en/signup$', views.signup_view_en, name='Sign Up'),
	url(r'^tr/signupp$', views.signup_post_tr, name='Sign Up'),
	url(r'^en/signupp$', views.signup_post_en, name='Sign Up'),
	url(r'^save$', views.save, name='Save'),
	url(r'^delete$', views.delete, name='Delete'),
	url(r'^tr$', views.set_lang_tr, name='Set Language'),
	url(r'^en$', views.set_lang_en, name='Set Language'),
) 
