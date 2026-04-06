# Common API

Base URL: `/data`

---

## File Routes

### 1. Upload File

```
POST /data/files
```

Uploads a file to the server and records it in the database. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `multipart/form-data` |
| `Cookie` | Valid session cookie |

**Form Data**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | File | Yes | The file to upload. Max size: 10 MB. |
| `filename` | string | No | Custom filename. Defaults to original filename. |
| `file_directory` | string | No | Target directory. Must start with `media/`. Defaults to `media`. |

**Example**

```js
const formData = new FormData();
formData.append("file", file);
formData.append("filename", "report.pdf");
formData.append("file_directory", "media/attachments/gold_loan");

axios.post("/data/files", formData, { withCredentials: true });
```

**Response `201 Created`**
```json
{
  "message": "File uploaded successfully",
  "file": {
    "fileName": "report.pdf",
    "fileDirectory": "media/attachments/gold_loan"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"No file uploaded"` |
| `400 Bad Request` | `"Invalid directory path"` |
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. List Files

```
GET /data/files
```

Returns a list of files in a directory.

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `folder` | string | No | Directory path to list. Defaults to `media/attachments`. |

**Example**

```
GET /data/files?folder=media/attachments/gold_loan
```

**Response `200 OK`**
```json
[
  {
    "fileName": "report.pdf",
    "path": "media/attachments/gold_loan/report.pdf",
    "updatedAt": "2025-10-05T08:30:00.000Z"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `404 Not Found` | `"Directory not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Delete File (Filesystem Only)

```
DELETE /data/files
```

Deletes a file from the filesystem only. Does not remove the database record. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Request Body**

```json
{
  "path": "media/attachments/gold_loan/report.pdf"
}
```

**Response `200 OK`**
```json
{
  "message": "File deleted successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"File not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 4. Delete File (Filesystem + Database)

```
DELETE /data/files/:filename
```

Deletes a file from both the filesystem and the database. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `filename` | string | Yes | The filename to delete. |

**Request Body**

```json
{
  "file_directory": "media/attachments/gold_loan"
}
```

**Response `200 OK`**
```json
{
  "message": "File deleted successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"File not found in database"` |
| `404 Not Found` | `"File not found in storage"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Website Routes

### 5. Get Product Content

```
GET /data/products/:product_name
```

Returns content for a specific product page in the requested language.

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `product_name` | string | Yes | Product identifier. |

**Valid Products**

| Value | Description |
|---|---|
| `gold_loan` | Gold Loan |
| `fixed_deposits` | Fixed Deposits |
| `mortgage` | Mortgage |
| `leasing` | Leasing |
| `luckewallet` | Lucke Wallet |
| `forex` | Forex |

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lang` | string | Yes | Language code: `en`, `si`, or `ta`. |

**Example**

```
GET /data/products/gold_loan?lang=en
```

**Response `200 OK`**
```json
[
  {
    "id": 1,
    "lang": "en",
    "title": "Gold Loan",
    "description": "..."
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid product name"` |
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `404 Not Found` | `"Product not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 6. Get Profiles

```
GET /data/profiles
```

Returns profiles merged with their language-specific content. Supports filtering by specific IDs.

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lang` | string | Yes | Language code: `en`, `si`, or `ta`. |
| `ids` | string | No | Comma-separated profile IDs to filter. Returns all if omitted. |

**Examples**

```
GET /data/profiles?lang=en
GET /data/profiles?lang=en&ids=1,2,3
```

**Response `200 OK`**
```json
[
  {
    "id": 1,
    "profile_picture": "media/aboutPage/profiles/vap.webp",
    "profile_id": 1,
    "profile_name": "John Doe",
    "designation": "Managing Director",
    "description": "...",
    "lang": "en"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `400 Bad Request` | `"Invalid profile IDs"` |
| `404 Not Found` | `"No profiles found"` |
| `404 Not Found` | `"No profile content found for the specified language"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 7. Get Profile by ID

```
GET /data/profiles/:id
```

Returns a single profile merged with its language-specific content.

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The profile ID. |

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `lang` | string | Yes | Language code: `en`, `si`, or `ta`. |

**Example**

```
GET /data/profiles/1?lang=en
```

**Response `200 OK`**
```json
{
  "id": 1,
  "profile_picture": "media/aboutPage/profiles/vap.webp",
  "profile_name": "John Doe",
  "designation": "Managing Director",
  "description": "...",
  "lang": "en"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `404 Not Found` | `"Profile not found"` |
| `404 Not Found` | `"Profile content not found for the specified language"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Popup Routes

### 8. Get Popup Status

```
GET /data/popup/status
```

Returns the current popup status. Creates a default `disabled` record if none exists.

**Response `200 OK`**
```json
{
  "id": 1,
  "status": "disabled",
  "updated_at": "2025-10-05T08:30:00.000Z",
  "updated_by": "admin",
  "created_at": "2025-09-01T00:00:00.000Z"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 9. Update Popup Status

```
PUT /data/popup/status
```

Enables or disables the popup. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Request Body**

```json
{
  "status": "enabled"
}
```

| Field | Type | Required | Values |
|---|---|---|---|
| `status` | string | Yes | `"enabled"` or `"disabled"` |

**Response `200 OK`**
```json
{
  "message": "Popup enabled successfully",
  "data": {
    "id": 1,
    "status": "enabled",
    "updated_at": "2025-10-05T08:30:00.000Z",
    "updated_by": "1",
    "created_at": "2025-09-01T00:00:00.000Z"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid status. Use \"enabled\" or \"disabled\"."` |
| `401 Unauthorized` | Session invalid or expired |
| `500 Internal Server Error` | `"Internal Server Error"` |
