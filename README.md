









# ***TODO project***








## PS :

`This project don't represent AOS entreprise and the logo is for test purpose only`  |
-|

`Most of the requests needs to include a valid token on the header , this token is given after doing the login API`  |
-|

`For clearer documentation run the project locally and open this link =>` http://localhost:8080/todos/doc |
-|





### http status codes

| STATUS  | MESSAGE  |
|---|---|
| `200` | success |
| `400` | token errors (missing, invalid, expired ..) |
| `401` | access denied |




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------



















## login


``` POST
http://localhost:8080/users/login
```

### Request

```
{
  login: String,
  password: String
}
```

### Response

```
{
    user object or error
}
```


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




























## find all users


``` GET
http://localhost:8080/users


```



### Response

```

[{
    user object
}]
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




























## add user


``` POST
http://localhost:8080/users


```


### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    user object
}
```

--------------------------------------------------------------------------------------------------------------------























## delete user


``` DELETE
http://localhost:8080/users/:id


```


### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    user object
}
```

--------------------------------------------------------------------------------------------------------------------























## update user


``` PUT
http://localhost:8080/users/:id


```

### BODY
```
{
  name: string
}

```

### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    user object
}
```

--------------------------------------------------------------------------------------------------------------------






























## find all todos


``` GET
http://localhost:8080/todos/all


```



### Response

```

[{
    todo object
}]
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




























## add todo


``` POST
http://localhost:8080/todos


```


### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    todo object
}
```

--------------------------------------------------------------------------------------------------------------------























## delete user


``` DELETE
http://localhost:8080/todos/:id


```


### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    todo object
}
```

--------------------------------------------------------------------------------------------------------------------























## update todo


``` PUT
http://localhost:8080/todos/:id


```

### BODY
```
{
  name: string
}

```

### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    todo object
}
```

--------------------------------------------------------------------------------------------------------------------








## mark todo as completed


``` PUT
http://localhost:8080/todos/done/:id


```



### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    todo object
}
```

--------------------------------------------------------------------------------------------------------------------








## share a todo with a user


``` PUT
http://localhost:8080/todos/share/:id


```

### BODY
```
{
a whole user object
}

```

### Request HEADERS
```
{
  token: string
}

```


### Response

```

{
    todo object
}
```

--------------------------------------------------------------------------------------------------------------------
