from app import app
from flaskext.mysql import MySQL

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'bsale_test'
app.config['MYSQL_DATABASE_PASSWORD'] = 'bsale_test'
app.config['MYSQL_DATABASE_DB'] = 'bsale_test'
app.config['MYSQL_DATABASE_HOST'] = 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
mysql.init_app(app)