from django.urls import path
from .views import * 

urlpatterns = [
    path('', index, name='index'),
    path('emprestimos/', emprestimos, name='emprestimos'),
    path('consorcios/', consorcios, name='consorcios'),
    path('produtos', produtos, name='produtos'),
    path('localizacao/', localizacao, name='localizacao'),
    path('contato/', contato, name='contato')
]
