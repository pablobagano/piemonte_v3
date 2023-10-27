import folium

dic = {'Camaçari': [-12.6964, -38.3234],
'Pindobaçu': [-10.746, -40.3579],
'Utinga':[-11.0237, -43.0093],
'Seabra': [-12.4214, -41.7668],
'Serrolandia': [-11.4186, -40.2944],
'Iuiu': [-14.414, -43.546],
'Salvador': [-12.9704, -38.5124], 
'Ibitiara': [-12.6565, -42.2221],
'Saude': [-10.9405, -40.4069],
'Iaçu': [-12.7596, -40.2124],
'Varzea Nova': [-11.2549, -40.9447], 
'Candeal': [-11.807, -39.1116],
'Capim Grosso': [-11.3816, -40.0127],
'Ibotirama': [-12.1818,-43.2132],
'Americana Dourada': [-11.4354,-41.4318],
'Carira': [-10.3556,-37.6915],
'Simão Dias': [-10.7323,-37.8145],
'Aracaju': [-10.9095,-37.0748],
'São Cristovão': [-11.0135,-37.2224],
'Nossa S. Da Glória': [-10.2167,-37.4242],
'Neópolis': [-10.321, -36.5927],
'Sobradinho': [-9.45943,-40.8254], 
'Frei Paulo': [-10.551300,-37.527900], 
'Campo do Brito': [-10.7307,-37.4948],
'Macambira': [-10.665,-37.5377],
'São José da Laje': [-9.01187,-36.0535],
'Jacobina': [-11.1855,-40.5361]}

piemonte_map = folium.Map(location=[-11.1855,-40.5361], zoom_start=6.5) # the variable name is Portuguese for 'map'
cities = folium.FeatureGroup()
for city, coord in dic.items():
    cities.add_child(
        folium.Marker(coord, popup=city)
    )
piemonte_map.add_child(cities)
piemonte_map = piemonte_map._repr_html_()
#piemonte_map

bahia = 'Camaçari,Pindobaçu,Utinga,Seabra,Serrolândia,Iuiu,Salvador,Ibitiara,Saúde,Iaçu,VárzeaNova,Candeal,Capim Grosso,Ibotirama,A. Dourada,Sobradinho,Jacobina'.split(",")
bahia = sorted(bahia)
sergipe = 'Carira,Aracaju,São Cristóvão,N. Sª Da Glória,Neópolis,SimãoDias,Frei Paulo,Campo do Brito,Macambira'.split(",")
sergipe = sorted(sergipe)
