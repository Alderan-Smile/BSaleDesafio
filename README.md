# BSaleDesafio

## Pagina web del desafió BSale 2022.

Es una pagina web basada en JavaScript sin uso de framework para su desarrollo.
El fornt-End esta realizado con pequeña codificación con ayuda de Bootstrap5, mientras que el Back-End fue realizado por completo en JavaScript.

Temporalmente el contenido es una tabla de productos ordenada por categoría y una barra de búsqueda simultanea.

## Hosting Web.

La pagina esta alojada en el servicio Amplify de AWS con deploy automático desde este mismo repositorio repositorio para su inmediata implementación.

## Datos de la web

Los datos para rellenar la tabla y realizar la búsqueda son obtenidos desde una api-rest, la cual trabaja con una base de datos cedida por BSale.

La barra de búsqueda, sin necesidad de realizar ninguna acción mas que escribir o borrar, interviene inmediatamente en los datos de la tabla cambiando la consulta realizada para su rellenado.

Repositorio de api rest [GitHub Repository](https://github.com/Alderan-Smile/ApiBSale)<br/>
Api Rest Hosteada por [AWS Api Gateway](https://lwg7yig1ta.execute-api.us-east-1.amazonaws.com/dev/product/)<br/><br/>
Versiones de la web [GitHub Commits](https://github.com/Alderan-Smile/BSaleDesafio/commits/main)<br/>
Web JS Hosteada por [AWS Amplify](https://main.d3fpblgrtdfmry.amplifyapp.com/)