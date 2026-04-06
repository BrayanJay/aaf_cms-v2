# Users API

Base URL: `/users`

All endpoints require authentication.

---

## Endpoints

### 1. Get All Users

```
GET /users
```

Returns all users with their roles. **Requires Admin role.**

**Response `200 OK`**
```json
{
  "data": [
    {
      "id": 1,
      "username": "john",
      "role": "admin",
      "created_at": "2025-09-01T00:00:00.000Z",
      "last_login": "2025-10-05T08:30:00.000Z"
    }
  ],
  "count": 1
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Get Available Roles

```
GET /users/roles
```

Returns all available roles and their permission definitions. Requires `system.read` permission.

**Response `200 OK`**
```json
{
  "roles": {
    "ADMIN": "admin",
    "EDITOR": "editor",
    "VIEWER": "viewer"
  },
  "permissions": {
    "admin": {
      "files": ["upload", "delete"],
      "system": ["read", "write"]
    },
    "editor": {
      "files": ["upload"],
      "system": ["read"]
    }
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Insufficient permissions |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Get Current User

```
GET /users/me
```

Returns the authenticated user's profile along with their role permissions.

**Response `200 OK`**
```json
{
  "id": 1,
  "username": "john",
  "role": "admin",
  "created_at": "2025-09-01T00:00:00.000Z",
  "updated_at": "2025-10-01T00:00:00.000Z",
  "last_login": "2025-10-05T08:30:00.000Z",
  "permissions": {
    "files": ["upload", "delete"],
    "system": ["read", "write"]
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 4. Create User

```
POST /users
```

Creates a new user account. **Requires Admin role.**

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `application/json` |
| `Cookie` | Valid session cookie |

**Request Body**

```json
{
  "username": "jane",
  "password": "secret123",
  "role": "editor"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `username` | string | Yes | Unique username. |
| `password` | string | Yes | Plain text password (hashed server-side). |
| `role` | string | No | User role. Defaults to `viewer`. |

**Response `201 Created`**
```json
{
  "message": "User created successfully",
  "user": {
    "id": 5,
    "username": "jane",
    "role": "editor"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Username and password are required"` |
| `400 Bad Request` | `"Invalid role specified"` + `validRoles` array |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `409 Conflict` | `"Username already exists"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 5. Update User Role

```
PUT /users/:id/role
```

Updates the role of a specific user. **Requires Admin role.** Admins cannot change their own role.

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `application/json` |
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The user ID to update. |

**Request Body**

```json
{
  "role": "editor"
}
```

**Response `200 OK`**
```json
{
  "message": "Role updated from viewer to editor",
  "data": {
    "oldRole": "viewer",
    "newRole": "editor"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid role specified"` + `validRoles` array |
| `400 Bad Request` | `"You cannot change your own role"` |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 6. Delete User

```
DELETE /users/:id
```

Permanently deletes a user account. **Requires Admin role.** Admins cannot delete their own account.

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The user ID to delete. |

**Response `200 OK`**
```json
{
  "message": "User jane deleted successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"You cannot delete your own account"` |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |
