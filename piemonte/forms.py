from django import forms
from .models import * 

class LeadForm(forms.ModelForm):
    class Meta:
        model = Lead
        fields = ('nome', 'email', 'operacao', 'cidade', 'telefone')
        labels = {'operacao':'operação'}

    def __init__(self, *args, **kwargs):
        super(LeadForm, self).__init__(*args, **kwargs)
        self.fields['nome'].widget.attrs.update({'placeholder':'Insira seu nome'})
        self.fields['email'].widget.attrs.update({'placeholder':'Insira seu e-mail'})
        self.fields['operacao'].widget.attrs.update({'placeholder':'O que deseja?'})
        self.fields['cidade'].widget.attrs.update({'placeholder':'Qual a sua cidade?'})
        self.fields['telefone'].widget.attrs.update({'placeholder':'DDD + Número de telefone'})