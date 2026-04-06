# Auth API

Base URL: `/auth`

---

## Endpoints

### 1. Register

```
POST /auth/register
```

Creates a new user account.

**Request Body**

```json
{
  "username": "john",
  "password": "secret123",
  "role": "viewer"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `username` | string | Yes | Unique username. |
| `password` | string | Yes | Plain text password (hashed server-side). |
| `role` | string | No | User role. Defaults to `viewer`. |

**Valid Roles**

| Role | Description |
|---|---|
| `admin` | Full access |
| `editor` | Can edit content |
| `viewer` | Read-only access |

**Response `201 Created`**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "john",
    "role": "viewer"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid role specified"` + `validRoles` array |
| `409 Conflict` | `"User already exists"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Login

```
POST /auth/login
```

Authenticates a user and creates a session.

**Request Body**

```json
{
  "username": "john",
  "password": "secret123"
}
```

| Field | Type | Required |
|---|---|---|
| `username` | string | Yes |
| `password` | string | Yes |

**Response `200 OK`**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "username": "john",
    "role": "viewer"
  }
}
```

A session cookie (`aaf.cms.sid`) is set automatically. Include `withCredentials: true` (axios) or `credentials: 'include'` (fetch) in all subsequent requests.

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Username and password are required"` |
| `401 Unauthorized` | `"Incorrect password"` |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Logout

```
POST /auth/logout
```

Destroys the current session and clears the session cookie.

**Response `200 OK`**
```json
{
  "message": "Logged out successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `500 Internal Server Error` | `"Logout failed"` |

---

### 4. Get Current User

```
GET /auth/me
```

Returns the authenticated user's profile. **Requires authentication.**

**Response `200 OK`**
```json
{
  "id": 1,
  "username": "john",
  "role": "viewer",
  "created_at": "2025-09-01T00:00:00.000Z",
  "last_login": "2025-10-05T08:30:00.000Z"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Session

This API uses **cookie-based sessions**. After a successful login, the server sets an `aaf.cms.sid` cookie. This cookie must be included in all requests to protected endpoints.

**Frontend usage (axios)**
```js
axios.get('/auth/me', { withCredentials: true })
```

**Frontend usage (fetch)**
```js
fetch('/auth/me', { credentials: 'include' })
```

Sessions expire after **3 hours** of inactivity.
