# Profiles API

Base URL: `/profile`

---

## Endpoints

### 1. Get Profiles

```
GET /profile
```

Returns all profiles of a given type with parsed description fields.

**Query Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | Profile type: `bod` (Board of Directors) or `coop` (Corporate Management). |

**Examples**

```
GET /profile?type=bod
GET /profile?type=coop
```

**Response `200 OK`**
```json
[
  {
    "id": 1,
    "profile_picture": 1,
    "name_en": "John Doe",
    "name_si": "...",
    "name_ta": "...",
    "designation_en": "Managing Director",
    "designation_si": "...",
    "designation_ta": "...",
    "description_en": ["Line one.", "Line two."],
    "description_si": ["..."],
    "description_ta": ["..."],
    "updated_at": "2025-10-05T08:30:00.000Z",
    "uploaded_by": "admin"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid type. Use 'bod' or 'coop'."` |
| `404 Not Found` | `"No profiles found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Get Profile Content by ID

```
GET /profile/:id
```

Returns all language entries from the `profile_content` table for a given profile ID.

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The profile ID. |

**Example**

```
GET /profile/1
```

**Response `200 OK`**
```json
[
  {
    "id": 1,
    "profile_id": 1,
    "profile_name": "John Doe",
    "designation": "Managing Director",
    "description": ["Line one.", "Line two."],
    "lang": "en"
  },
  {
    "id": 2,
    "profile_id": 1,
    "profile_name": "...",
    "designation": "...",
    "description": ["..."],
    "lang": "si"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `404 Not Found` | `"Profile not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 3. Add Profile

```
POST /profile
```

Creates a new profile with multilingual content. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `application/json` |
| `Cookie` | Valid session cookie |

**Request Body**

```json
{
  "type": "bod",
  "nameEn": "John Doe",
  "nameSi": "...",
  "nameTa": "...",
  "designationEn": "Managing Director",
  "designationSi": "...",
  "designationTa": "...",
  "descriptionEn": ["Line one.", "Line two."],
  "descriptionSi": ["..."],
  "descriptionTa": ["..."]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `"bod"` or `"coop"` |
| `nameEn` / `nameSi` / `nameTa` | string | Yes | Name in each language. |
| `designationEn` / `designationSi` / `designationTa` | string | Yes | Designation in each language. |
| `descriptionEn` / `descriptionSi` / `descriptionTa` | string[] | Yes | Description lines in each language. |

**Response `201 Created`**
```json
{
  "message": "Profile added successfully",
  "id": 5
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid type. Use 'bod' or 'coop'."` |
| `400 Bad Request` | `"All fields in all languages are required"` |
| `400 Bad Request` | `"Profile creation failed"` |
| `401 Unauthorized` | Session invalid or expired |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 4. Update Profile

```
PUT /profile/:id
```

Updates a profile's content for a specific language. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Content-Type` | `application/json` |
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The profile ID to update. |

**Request Body**

```json
{
  "type": "bod",
  "lang": "en",
  "name": "John Doe",
  "designation": "Managing Director",
  "description": ["Updated line one.", "Updated line two."]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `"bod"` or `"coop"` |
| `lang` | string | Yes | Language code: `en`, `si`, or `ta`. |
| `name` | string | Yes | Profile name. |
| `designation` | string | Yes | Profile designation. |
| `description` | string[] | Yes | Description lines. |

**Response `200 OK`**
```json
{
  "message": "Profile updated successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid type. Use 'bod' or 'coop'."` |
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `400 Bad Request` | `"Name, designation, and description are required"` |
| `401 Unauthorized` | Session invalid or expired |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 5. Delete Profile

```
DELETE /profile/:id
```

Deletes a profile and its associated image from the filesystem. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | integer | Yes | The profile ID to delete. |

**Request Body**

```json
{
  "type": "bod"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | string | Yes | `"bod"` or `"coop"` |

**Response `200 OK`**
```json
{
  "message": "Profile deleted successfully",
  "imageDeleted": true
}
```

> `imageDeleted` is `true` if the profile image was found and removed, `false` if no image file existed.

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid type. Use 'bod' or 'coop'."` |
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"Profile not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

## Profile Types

| Type | Table | Image Path |
|---|---|---|
| `bod` | `board_of_directors` | `media/aboutPage/bod/:id.webp` |
| `coop` | `corporate_management` | `media/aboutPage/coop/:id.webp` |
