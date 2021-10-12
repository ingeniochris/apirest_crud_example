export const startCtrl = async (req, res) => {
    res.json({
      apiName: "Jesus Christian Castillo Lozano - API rest",
      routes: {
        SignUp: {
          routeProtected: false,
          uri: "https://kaopractice.herokuapp.com/api/auth/signup",
          method: "POST",
          bodyParams: {
            email: "chris@gmail.com",
            firstName: "jesus",
            lastName: "Castillo",
            password: "123456",
            confirmPassword: "123456",
            role: "ROLE_ADMIN",
          },
          headers: {
            key: "Content-type",
            value: "application/json",
          },
          response: "User created",
        },
        SignIn: {
          routeProtected: false,
          uri: "https://kaopractice.herokuapp.com/api/user/signin",
          method: "POST",
          bodyParams: {
            email: "chris@gmail.com",
            password: "123456",
          },
          headers: {
            key: "Content-type",
            value: "application/json",
          },
  
          response: "Token for a new sesion",
        },
        GetAllCollaborators: {
          routeProtected: true,
          uri: "https://kaopractice.herokuapp.com/api/colaborador",
          method: "GET",
          headers: [
            {
              key: "Content-type",
              value: "application/json",
            },
            {
              key: "x-auth-token",
              value: "token",
            },
          ],
  
          response: "All collaborators in DB",
        },
        SearchCollaboratorId: {
          routeProtected: true,
          uri: "https://kaopractice.herokuapp.com/api/colaborador/:id",
          method: "GET",
          params: {
            id: "e8d9add6-986c-4e80-9ef1-43c696332d41",
          },
          headers: [
            {
              key: "Content-type",
              value: "application/json",
            },
            {
              key: "x-auth-token",
              value: "token",
            },
          ],
          response: "Collaborator or don´t match id",
        },
        AddCollaborator: {
          routeProtected: true,
          uri: "https://kaopractice.herokuapp.com/api/colaborador/add/",
          method: "POST",
          bodyParams: {
            nombre_colaborador: "jesus castillo",
            fecha_nacimiento: "01/01/2021",
            rfc: "caje210101",
            fecha_inicio:"01/01/2021",
            estado_colaborador:"active",
            area:"developer"
          },
          headers: [
            {
              key: "Content-type",
              value: "application/json",
            },
            {
              key: "x-auth-token",
              value: "token",
            },
          ],
          response: "Success or error ",
        },
        UpdateCollaborator: {
          routeProtected: true,
          uri: "https://kaopractice.herokuapp.com/api/colaborador/update/:id",
          method: "PUT",
          params: {
            id: "id collaborator example - 4545874554544c4c4c4c",
          },
          bodyParams: {
            nombre_colaborador: "almaguer",
            fecha_nacimiento: "11/10/1990",
            rfc: "alme901011",
            fecha_inicio:"11/10/2021",
            estado_colaborador: "notActive",
            area:"developer"
          },
          headers: [
            {
              key: "Content-type",
              value: "application/json",
            },
            {
              key: "x-auth-token",
              value: "token",
            },
          ],
          response: "Success or error ",
        },
        DeleteCollaborator: {
          routeProtected: true,
          uri: "https://kaopractice.herokuapp.com/api/delete/:id",
          method: "DELETE",
          params: {
            id: "id collaborator example - 5d5d4d7d8d4d5d4d7d8",
          },
          headers: [
            {
              key: "Content-type",
              value: "application/json",
            },
            {
              key: "x-auth-token",
              value: "token",
            },
          ],
          response: "Success or error ",
        },
      },
    });
  };