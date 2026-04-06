# Logs API

Base URL: `/logs`

All endpoints require authentication. All endpoints are restricted to **Admin** role only.

---

## Endpoints

### 1. Get Logs

```
GET /logs
```

Returns a filtered, paginated list of log entries.

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `level` | string | No | — | Filter by log level: `info`, `warn`, `error`. |
| `category` | string | No | — | Filter by category: `auth`, `db`, etc. |
| `userId` | integer | No | — | Filter by user ID. |
| `startDate` | string | No | — | Filter logs from this date (ISO 8601). |
| `endDate` | string | No | — | Filter logs up to this date (ISO 8601). |
| `limit` | integer | No | `100` | Number of results to return. Max: `500`. |
| `offset` | integer | No | `0` | Number of results to skip for pagination. |
| `orderBy` | string | No | `timestamp` | Column to sort by: `timestamp`, `level`, `category`, `username`, `action`. |
| `orderDirection` | string | No | `DESC` | Sort direction: `ASC` or `DESC`. |

**Examples**

```
GET /logs
GET /logs?level=error&limit=50
GET /logs?category=auth&startDate=2025-10-01&endDate=2025-10-31
GET /logs?userId=1&orderBy=timestamp&orderDirection=ASC&limit=100&offset=100
```

**Response `200 OK`**
```json
{
  "data": [
    {
      "id": 1,
      "level": "info",
      "category": "auth",
      "action": "login",
      "user_id": 1,
      "username": "john",
      "ip_address": "127.0.0.1",
      "user_agent": "Mozilla/5.0...",
      "request_method": "POST",
      "endpoint": "/auth/login",
      "status_code": 200,
      "message": "User logged in successfully",
      "details": { "browser": "Chrome" },
      "session_id": "abc123",
      "timestamp": "2025-10-05T08:30:00.000Z"
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

### 2. Get Log Statistics

```
GET /logs/stats
```

Returns log counts grouped by a specified column.

**Query Parameters**

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `groupBy` | string | No | `level` | Column to group by: `level`, `category`, `username`, `action`. |
| `startDate` | string | No | — | Filter from this date (ISO 8601). |
| `endDate` | string | No | — | Filter up to this date (ISO 8601). |

**Examples**

```
GET /logs/stats
GET /logs/stats?groupBy=category
GET /logs/stats?groupBy=level&startDate=2025-10-01&endDate=2025-10-31
```

**Response `200 OK`**
```json
{
  "data": [
    { "level": "info", "count": 320 },
    { "level": "error", "count": 45 },
    { "level": "warn", "count": 12 }
  ]
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Create Log Entry

```
POST /logs
```

Manually creates a log entry.

**Request Body**

```json
{
  "level": "info",
  "category": "auth",
  "action": "manual_entry",
  "message": "Manual log entry created",
  "details": { "note": "testing" },
  "userId": 1,
  "username": "john"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `level` | string | Yes | Log level: `info`, `warn`, `error`. |
| `category` | string | Yes | Log category. |
| `action` | string | Yes | Action performed. |
| `message` | string | Yes | Log message. |
| `details` | object | No | Additional details as a JSON object. |
| `userId` | integer | No | Defaults to session user ID. |
| `username` | string | No | Defaults to session username. |

**Response `201 Created`**
```json
{
  "message": "Log entry created successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Missing required fields: level, category, action, message"` |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 4. Delete Old Logs

```
DELETE /logs/cleanup
```

Deletes log entries older than a specified number of days.

**Request Body**

```json
{
  "daysToKeep": 30
}
```

| Field | Type | Required | Default | Description |
|---|---|---|---|---|
| `daysToKeep` | integer | No | `30` | Retain logs from the last N days. Older entries are deleted. |

**Response `200 OK`**
```json
{
  "message": "Deleted 142 log entries older than 30 days",
  "deletedCount": 142
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Admin access required |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Authentication & Authorization

All endpoints require:
1. A valid session cookie (`aaf.cms.sid`) — enforced by `requireAuth`
2. The `admin` role — enforced by `requireAdmin`

Requests without a valid session return `401`. Requests from non-admin users return `403`.
