# Rest api CRUD Node.js utilizando mongo atlas db

## Colaboradores info
Puedes usar el archivo request.http o postman para probar api rest
https://kaopractice.herokuapp.com/api

## Registro
https://kaopractice.herokuapp.com/api/auth/signup
- routeProtected: false
- metodo: POST
- bodyParams: 
> -     email: "chris@gmail.com",
> -     firstName: "jesus",
> -     lastName: "Castillo",
> -     password: "123456",
> -     confirmPassword: "123456",
> -     role: "ROLE_ADMIN",

- headers: 
> -     key: "Content-type",
> -     value: "application/json",
- response: "User created",

## Login
https://kaopractice.herokuapp.com/api/auth/signing
- routeProtected: false
- metodo: POST
- bodyParams: 
> -     email: "chris@gmail.com"
> -     password: "123456"
- headers: 
> -     key: "Content-type"
> -     value: "application/json"
- response: "Token for a new sesion"

## Get todos los colaboradores
https://kaopractice.herokuapp.com/api/colaborador/
- routeProtected: true
- method: GET
- headers:     
> -     key: "Content-type",
> -     value: "application/json"
-----------------------------------
> -     key: "x-auth-token",
> -     value: "token"
- response: "All collaborators in DB"

## GET colaboradores por id
https://kaopractice.herokuapp.com/api/colaborador/:id

- routeProtected: true
- method: GET
- params:
> -     id: 5s4d4f4f7f8f5ff4
- headers:     
> -     key: "Content-type",
> -     value: "application/json"
-----------------------------------
> -     key: "x-auth-token",
> -     value: "token"
- response: "All collaborators in DB"



## POST /colaborador/ Crear un registro nuevo
https://kaopractice.herokuapp.com/api/colaborador/add/
- routeProtected: true
- method: POST,
- bodyParams: 
> -         nombre_colaborador: "jesus castillo"
> -         fecha_nacimiento: "01/01/2021"
> -         rfc: "caje210101"
> -         fecha_inicio:"01/01/2021"
 > -        estado_colaborador:"active"
> -         area:"developer"
- headers: 
> -     key: "Content-type"
> -     value: "application/json"
-------------------------------------------
> -              key: "x-auth-token"
> -              value: "token"
        
- response: "Success or error ",

## PUT /colaborador/:idColaborador Actualizar un registro específico
https://kaopractice.herokuapp.com/api/colaborador/update/:id
- routeProtected: true
- method: PUT
- params: 
> -     id: "id collaborator example - 4545874554544c4c4c4c"
          
- bodyParams: 
> -     nombre_colaborador: "almaguer"
> -            fecha_nacimiento: "11/10/1990"
> -            rfc: "alme901011"
> -            fecha_inicio:"11/10/2021"
> -            estado_colaborador: "notActive"
> -            area:"developer"
- headers: 
> -     key: "Content-type"
> -     value: "application/json"
-------------------------
> -     key: "x-auth-token"
> -     value: "token"
- response: "Success or error "

## DELETE /colaborador/:idColaborador Eliminar registro
https://kaopractice.herokuapp.com/api/colaborador/delete/:id
- routeProtected: true
- params:
> -     id: ""