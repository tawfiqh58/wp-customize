#

chmod 400 mykey.pem
ssh -i mykey.pem user@mydomain.example

sudo apt install apache2
systemctl status apache2 (!! You can access the server using ip addrs now)
systemctl is-enabled apache2
sudo apt install mariadb-server mariadb-client
systemctl status mariadb.service
systemctl is-enabled mariadb.service

sudo mysql_secure_installation -> press enter for the passowrd
(not change anything and follow the promt)
sudo mysql -u root

sudo apt install php libapache2-mod-php php-mysql

sudo systemctl restart apache2
sudo nano /var/www/html/info.php
goto: _ip/info.php

sudo apt install phpmyadmin
select: *apache2
give a pass: testwp24

sudo systemctl reload apache2.service


login: user: phpmyadmin & pass: **
_id/phpmyadmin
allow: 

sudo mysql -u root -p
CREATE DATABASE mywpsite;
CREATE USER 'tawfiq'@'%' IDENTIFIED BY 'pass1234';
GRANT ALL PRIVILEGES ON *.* TO 'tawfiq'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

sudo ufw status
sudo ufw enable
sudo ufw allow OpenSSH
sudo ufw allow 'Apache Full'


wget -c http://wordpress.org/latest.tar.gz
tar -xzvf latest.tar.gz
sudo cp -R wordpress /var/www/html/mywpsite.com
ls -l /var/www/html/
sudo chown -R www-data:www-data /var/www/html/mywpsite.com
sudo chmod -R 775 /var/www/html/mywpsite.com

sudo nano /etc/apache2/sites-available/mywpsite.com.conf

<VirtualHost *:80>

  ServerName mywpsite.com
  ServerAlias www.mywpsite.com

  DocumentRoot /var/www/html/mywpsite.com

  <Directory /var/www/html/mywpsite.com>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/mywpsite.com_error.log
  CustomLog ${APACHE_LOG_DIR}/mywpsite.com_access.log combined

</VirtualHost>

apachectl -t

sudo nano /etc/apache2/apache2.conf
Add ServerName 
ServerName localhost


sudo a2ensite mywpsite.com.conf
sudo systemctl reload apache2
sudo a2dissite 000-default.conf
sudo service apache2 restart


access your ip and setup wp site!!

http://54.251.131.209/wp-admin/
tawfiq
wYJxsb7RAqtwuZXFBt

ref: https://www.youtube.com/watch?v=pOESHd1G-HI