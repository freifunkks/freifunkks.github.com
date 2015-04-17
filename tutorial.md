---
layout: fullwidth-page
title: Einrichten eines TP-Link TL-WR841N(D)
nav_active: tutorial
permalink: /tutorial/
---

# Einrichten eines TL-WR841N(D)

Dieses Tutorial soll Dir erklären, wie du einen TP-Link Router des Typs TL-WR841N(D) einrichtest, um ihn für den Freifunk zu nutzen.

 0. Herausfinden welche Router-Version vorhanden ist.
 1. Aktuelle Kasseler Freifunk Firmware herunterladen:
    http://dl.ffks.de/images/stable/factory/gluon-ffks-2015.02.07.11-tp-link-tl-wr841n-nd-v9.bin
 
 2. GEO-Koordinaten des geplanten Router-Standortes herausfinden
    * Dazu http://map.ffks.de/ im Browser aufrufen
    * "Koordinaten beim nächsten Klick anzeigen" klicken.
    * In der Karte auf den geplanten Standort klicken und die angezeigten Koordinaten notieren (z.B. "51.312711, 9.479746")
 
	![Geo-Koordinaten]({{ site.url }}/img/tutorial/02_geo_coordinates.png)
 
 3. Den Router durch Drücken des ON/OFF Knopfes am Gerät starten und per LAN-Kabel mit dem PC verbinden (LAN1-Port / nicht WAN)
 
	![Hinterseite]({{ site.url }}/img/tutorial/03_router_back.png)
 
 4. In der Adressleiste des Browsers (z.B. Firefox) die IP-Adresse für Routerkonfigurationen eingeben: http://192.168.0.1/
 
    ![ XXXX ]({{ site.url }}/img/tutorial/04_routerkonfig.png)
 7. "Browse" klicken und die heruntergeladene Freifunk Firmware (.bin Datei) im Download Ordner auswählen.
 
    ![ XXXX ]({{ site.url }}/img/tutorial/06_System_Tools_Browse.png)
 
 8. "Upgrade" klicken und Neustart abwarten, bis der Browser "Verbindung nicht möglich" oder Ähnliches zeigt.
    (Achtung: Während des Vorgangs auf keinen Fall die Stromzufuhr unterbrechen!)
 
 
    ![ XXXX ]({{ site.url }}/img/tutorial/07a_Firmware_Upgrade.png)
    ![ XXXX ]({{ site.url }}/img/tutorial/07b_Firmware_Upgrade_processing.png)
    ![ XXXX ]({{ site.url }}/img/tutorial/07c_Firmware_Upgrade_restart.png)
    ![ XXXX ]({{ site.url }}/img/tutorial/07d_Firmware_Upgrade_success.png)
    ![ XXXX ]({{ site.url }}/img/tutorial/07e_Unable_to_connect.png)
 
 8. Nach einer Minute Resetknopf am Router drücken und warten bis Schloss-Symbol am Router blinkt.
 
    ![ XXXX ]({{ site.url }}/img/tutorial/08a_Router_Back_Reset.png)
 
    ![ XXXX ]({{ site.url }}/img/tutorial/08b_Schlosssymbol.png)
 
 
10. LAN-Kabel trennen, fünf Sekunden warten und wieder neu einstecken.


11. Neu geflashten Freifunk-Router im Browser unter neuer IP-Adresse aufrufen: http://192.168.1.1/ 

    ![ XXXX ]({{ site.url }}/img/tutorial/11_ff-routerkonfig.png)

12. Im Einrichtungs-Menü gewünschte persönliche Daten eintragen:

    - Name des Freifunkknotens (z.B. ffks-DEINNEUERNAME)


    ![ XXXX ]({{ site.url }}/img/tutorial/12a_FF-Name.png)

    - VPN anhaken, wenn du den Knoten an das Internet anschließen willst. Dann festlegen wieviel von deiner Internet-Bandbreite Du für die öffentliche Nutzung freigeben willst.

    ![ XXXX ]({{ site.url }}/img/tutorial/12b_FF-VPN.png)


    - "Knoten auf der Karte anzeigen" anhaken und dort die zuvor notierten GEO-Koordinaten (siehe 2.) eintragen.


    ![ XXXX ]({{ site.url }}/img/tutorial/12c_FF-Karte.png)

    - Unter Kontakt z.B. eine E-Mail oder Telefonnummer angeben, damit Du bei Störungen Hilfe bekommen kannst.

    ![ XXXX ]({{ site.url }}/img/tutorial/12d_FF-Kontakt.png)


    Danach "Speichern und Neustarten" klicken.


13. Zur VPN Nutzung, wie aufgefordert eine E-Mail mit deinem angezeigten Knotennamen und VPN-Schlüssel an ffks@s01.de senden.

    ![ XXXX ]({{ site.url }}/img/tutorial/13_vpn-key.png)

14. Der Freifunk-Router startet sich neu, bis das Schloss-Symbol am Router durchgehend leuchtet => LAN-Kabel entfernen.


15. Um den Freifunk-Router als Internet-Uplink über VPN zu verbinden, muss Du das LAN-Kabel nun vom WAN-Port (!) des FF-Routers mit dem hauseigenen Internetzugang (z.B. EasyBox von Vodafone) verbinden.

    ![ XXXX ]({{ site.url }}/img/tutorial/15_Internet.png)

16. Herzlichen Glückwunsch! Jeder in der Nähe kann sich jetzt mit dem neuen WLAN-Netz kassel.freifunk.net verbinden. Alternativ können Geräte (z.B. Desktop-PC) auch ohne Funk direkt an den LAN-Ports 1-4 angeschlossen werden.


