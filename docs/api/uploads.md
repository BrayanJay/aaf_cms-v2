# Uploads API

Base URL: `/uploads`

All endpoints require authentication and the `files.upload` permission.

---

## Endpoints

### 1. Upload Document

```
POST /uploads/documents
```

Uploads a PDF or Word document to `media/documents`.

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `multipart/form-data` |
| `Cookie` | Valid session cookie |

**Form Data**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | File | Yes | The document to upload. Max size: 5 MB. |

**Accepted MIME Types**

| Type | Extension |
|---|---|
| `application/pdf` | `.pdf` |
| `application/msword` | `.doc` |
| `application/vnd.openxmlformats-officedocument.wordprocessingml.document` | `.docx` |

**Example**

```js
const formData = new FormData();
formData.append("file", file);

axios.post("/uploads/documents", formData, { withCredentials: true });
```

**Response `201 Created`**
```json
{
  "message": "File uploaded successfully",
  "file": {
    "fileName": "report.pdf",
    "fileDirectory": "media/documents"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Only PDF or Word documents are allowed"` |
| `400 Bad Request` | `"No file uploaded"` |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Missing `files.upload` permission |
| `413 Payload Too Large` | File exceeds 5 MB limit |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Upload Image

```
POST /uploads/images
```

Uploads a PNG or WebP image to a client-specified directory.

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `multipart/form-data` |
| `Cookie` | Valid session cookie |

**Form Data**

| Field | Type | Required | Description |
|---|---|---|---|
| `file` | File | Yes | The image to upload. Max size: 5 MB. |
| `filename` | string | No | Custom filename. Defaults to original filename. |
| `file_directory` | string | No | Target directory. Must start with `media/`. |

**Accepted MIME Types**

| Type | Extension |
|---|---|
| `image/png` | `.png` |
| `image/webp` | `.webp` |

**Example**

```js
const formData = new FormData();
formData.append("file", file);
formData.append("filename", "banner.webp");
formData.append("file_directory", "media/products");

axios.post("/uploads/images", formData, { withCredentials: true });
```

**Response `201 Created`**
```json
{
  "message": "File uploaded successfully",
  "file": {
    "fileName": "banner.webp",
    "fileDirectory": "media/products"
  }
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Only PNG or WebP images are allowed"` |
| `400 Bad Request` | `"No file uploaded"` |
| `400 Bad Request` | `"Invalid directory path"` |
| `401 Unauthorized` | Session invalid or expired |
| `403 Forbidden` | Missing `files.upload` permission |
| `413 Payload Too Large` | File exceeds 5 MB limit |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## File Size Limit

Both endpoints enforce a **5 MB** maximum file size. Requests exceeding this limit will be rejected with a `413` response before reaching the route handler.
