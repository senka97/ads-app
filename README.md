# ads-application

Monolitna veb aplikacija za oglašavanje.

# Korišćene tehnologije: 
  - Backend
    * Apache Maven v3.6.3
    * Java v11
    * Spring Boot v2.4.5
    * MySql v8.0.18
  - Frontend
    * React v17.0.2
    * Bootstrap v5.0.2

# Uputstvo za pokretanje: 

- Potrebno je imati instalirane korišćene tehnologije. 
- Skinuti projekat na lokalni računar
- Otpakovati ads-app.zip fajl na C disk (ukoliko želite da aplikacija pristupi slikama oglasa)
- U application properties podesiti kredencijale baze da odgovaraju instaliranoj MySql bazi na računaru
- Pozicionirati se u *ads-application* folder, iz njega otvoriti cmd i izvršiti komande: 
  * mvn compile
  * mvn spring-boot:run 
- Pozicionirati se u *ads-application-frontend* folder, iz njega otvoriti cmd i izvršiti komandu:
  * npm start

Frontend aplikacija će se otvoriti na linku http://localhost:3000 

Da bi se ulogovali kao bilo koji napravljen korisnik koristiti njegov username iz data.sql skripte a password svakog od njih je: user
