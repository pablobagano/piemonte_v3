from django.shortcuts import render, HttpResponse
from map import * 

# Create your views here.
def index(request):
    return render(request, 'piemonte/index.html')

def emprestimos(request):
    return render(request, 'piemonte/emprestimos.html')

def consorcios(request):
    return render(request, 'piemonte/consorcios.html')

def produtos(request):
    return render(request, 'piemonte/produtos.html')

def localizacao(request):
    context = {"mapa":piemonte_map, "bahia": bahia, "sergipe":sergipe}
    return render(request, 'piemonte/localizacao.html', context)

def contato(request):
    return render(request, 'piemonte/contato.html')
