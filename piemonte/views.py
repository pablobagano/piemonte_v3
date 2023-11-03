from django.shortcuts import render, redirect
from django.contrib import messages
from map import * 
from .forms import LeadForm

# Create your views here.
def index(request):
    return render(request, 'piemonte/index.html')

def emprestimos(request):
    return render(request, 'piemonte/emprestimos.html')

def consorcios(request):
    return render(request, 'piemonte/consorcios.html')

def produtos(request):
    doc_cap = "CPF, Conta Corrente BB".strip().split(',')
    doc_conta = "Idade entre 18 e 60 anos, CPF, Número de telefone com DDD".strip().split(',')
    return render(request, 'piemonte/produtos.html', context ={"docCap": doc_cap, "docConta": doc_conta})

def localizacao(request):
    context = {"mapa":piemonte_map, "bahia": bahia, "sergipe":sergipe}
    return render(request, 'piemonte/localizacao.html', context=context)

def contato(request):
    form = LeadForm()
    if request.method == 'POST':
        form = LeadForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('obrigado')
        else:
            messages.error('Verifique as informações e tente novamente')
            form = LeadForm()
    return render(request, 'piemonte/contato.html', {'form':form})

def obrigado(request):
    return render(request, 'piemonte/obrigado.html')