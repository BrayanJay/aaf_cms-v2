# Branches API

Base URL: `/api`

---

## Endpoints

### 1. Get Branches

```
GET /branches
```

Returns a list of branches. Supports optional filtering by language and/or region.

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lang` | string | No | Language code: `en`, `si`, or `ta`. Returns language-specific fields when provided. |
| `region_id` | integer | No | Filter branches by region ID. |

**Examples**

```
GET /branches                          → all branches (raw fields)
GET /branches?lang=en                  → all branches with English fields
GET /branches?region_id=2              → branches in region 2
GET /branches?lang=si&region_id=2      → region 2 branches with Sinhala fields
```

**Response — without `lang` `200 OK`**
```json
[
  {
    "id": 1,
    "region_id": 1,
    "branch_name_en": "Colombo Branch",
    "branch_name_si": "කොළඹ ශාඛාව",
    "branch_name_ta": "கொழும்பு கிளை",
    "branch_address_en": "123 Main Street, Colombo",
    "branch_address_si": "...",
    "branch_address_ta": "...",
    "region_name_en": "Western Province",
    "region_name_si": "...",
    "region_name_ta": "...",
    "contact_number": "0112345678",
    "email": "colombo@aaf.lk",
    "coordinates_longitude": 79.8612,
    "coordinates_latitude": 6.9271,
    "last_updated_time": "2025-09-01T00:00:00.000Z",
    "last_updated_by": "admin"
  }
]
```

**Response — with `lang=en` `200 OK`**
```json
[
  {
    "id": 1,
    "region_id": 1,
    "branch_name_en": "Colombo Branch",
    "branch_name": "Colombo Branch",
    "branch_address": "123 Main Street, Colombo",
    "region_name": "Western Province",
    "contact_number": "0112345678",
    "email": "colombo@aaf.lk",
    "coordinates_longitude": 79.8612,
    "coordinates_latitude": 6.9271,
    "last_updated_time": "2025-09-01T00:00:00.000Z",
    "last_updated_by": "admin"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `404 Not Found` | `"No branches found."` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Get Branch by ID

```
GET /branches/:id
```

Returns a single branch by its ID.

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The branch ID. |

**Example**

```
GET /branches/1
```

**Response `200 OK`**
```json
{
  "id": 1,
  "region_id": 1,
  "branch_name_en": "Colombo Branch",
  "branch_name_si": "කොළඹ ශාඛාව",
  "branch_name_ta": "கொழும்பு கிளை",
  "branch_address_en": "123 Main Street, Colombo",
  "branch_address_si": "...",
  "branch_address_ta": "...",
  "region_name_en": "Western Province",
  "region_name_si": "...",
  "region_name_ta": "...",
  "contact_number": "0112345678",
  "email": "colombo@aaf.lk",
  "coordinates_longitude": 79.8612,
  "coordinates_latitude": 6.9271,
  "last_updated_time": "2025-09-01T00:00:00.000Z",
  "last_updated_by": "admin"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `404 Not Found` | `"Branch not found."` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Get Region Statistics

```
GET /branches/stats
```

Returns the number of branches grouped by region.

**Response `200 OK`**
```json
[
  {
    "region_id": 1,
    "region_name_en": "Western Province",
    "branch_count": 5
  },
  {
    "region_id": 2,
    "region_name_en": "Central Province",
    "branch_count": 3
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 4. Add Branch

```
POST /branches/add
```

Creates a new branch. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Request Body**

```json
{
  "region_id": 1,
  "branch_name_en": "Colombo Branch",
  "branch_name_si": "කොළඹ ශාඛාව",
  "branch_name_ta": "கொழும்பு கிளை",
  "branch_address_en": "123 Main Street, Colombo",
  "branch_address_si": "...",
  "branch_address_ta": "...",
  "region_name_en": "Western Province",
  "region_name_si": "...",
  "region_name_ta": "...",
  "contact_number": "0112345678",
  "email": "colombo@aaf.lk",
  "coordinates_longitude": 79.8612,
  "coordinates_latitude": 6.9271
}
```

**All fields are required.**

**Response `201 Created`**
```json
{
  "message": "Branch added successfully",
  "id": 10
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"All fields are required"` |
| `401 Unauthorized` | Session invalid or expired |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 5. Update Branch

```
PUT /branches/update/:id
```

Updates an existing branch by ID. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The branch ID to update. |

**Request Body**

Same fields as [Add Branch](#4-add-branch). All fields are optional — only provided fields will be updated.

**Response `200 OK`**

Returns the full updated branch object.

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Branch ID is required"` |
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"Branch not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 6. Delete Branch

```
DELETE /branches/delete/:id
```

Deletes a branch by ID. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The branch ID to delete. |

**Response `200 OK`**
```json
{
  "message": "Branch deleted successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Branch ID is required"` |
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"Branch not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Authentication

Protected routes (`POST`, `PUT`, `DELETE`) require a valid session. Log in via the Auth API to obtain a session cookie, then include it in subsequent requests.

Requests without a valid session will receive a `401 Unauthorized` response.
