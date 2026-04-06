# Sessions API

Base URL: `/sessions`

All endpoints require authentication.

---

## Endpoints

### 1. Get Active Sessions

```
GET /sessions
```

Returns active users, total user count, and role distribution. A user is considered active if they logged in within the last 3 hours and have a valid token.

**Response `200 OK`**
```json
{
  "activeUsers": 3,
  "totalUsers": 10,
  "users": [
    {
      "id": 1,
      "username": "john",
      "role": "admin",
      "last_login": "2025-10-05T08:30:00.000Z",
      "minutes_since_login": 12
    }
  ],
  "roleDistribution": [
    { "role": "admin", "count": 2 },
    { "role": "editor", "count": 5 },
    { "role": "viewer", "count": 3 }
  ],
  "serverTime": "2025-10-05T08:42:00.000Z"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Get Current Session

```
GET /sessions/me
```

Returns the authenticated user's profile and current session details.

**Response `200 OK`**
```json
{
  "user": {
    "id": 1,
    "username": "john",
    "role": "admin",
    "last_login": "2025-10-05T08:30:00.000Z",
    "created_at": "2025-09-01T00:00:00.000Z"
  },
  "session": {
    "userId": 1,
    "username": "john",
    "role": "admin",
    "sessionId": "abc123xyz",
    "expires": "2025-10-05T11:30:00.000Z"
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

### 3. Force Logout User

```
DELETE /sessions/:userId
```

Invalidates a user's session token, forcing them to log in again. **Requires Admin role.**

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `userId` | integer | Yes | The ID of the user to log out. |

**Example**

```
DELETE /sessions/5
```

**Response `200 OK`**
```json
{
  "message": "User logged out successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Session Timeout

Sessions expire after **3 hours**. A user is considered active if their `last_login` is within the last 3 hours and their `token` field is not null.
