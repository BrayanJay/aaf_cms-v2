# Products API

Base URL: `/product`

---

## Endpoints

### 1. Get Product Content

```
GET /product/:product_name
```

Returns all language entries for a product page.

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

**Example**

```
GET /product/gold_loan
```

**Response `200 OK`**
```json
[
  {
    "id": 1,
    "lang": "en",
    "description": "Gold loan content in English...",
    "uploaded_by": "admin",
    "uploaded_at": "2025-10-05T08:30:00.000Z"
  },
  {
    "id": 2,
    "lang": "si",
    "description": "Gold loan content in Sinhala...",
    "uploaded_by": "admin",
    "uploaded_at": "2025-10-05T08:30:00.000Z"
  },
  {
    "id": 3,
    "lang": "ta",
    "description": "Gold loan content in Tamil...",
    "uploaded_by": "admin",
    "uploaded_at": "2025-10-05T08:30:00.000Z"
  }
]
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid product name"` |
| `404 Not Found` | `"No content found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |

---

### 2. Update Product Content

```
PUT /product/:product_name
```

Updates the description for a specific product and language. **Requires authentication.**

**Headers**

| Header | Value |
|---|---|
| `Cookie` | Valid session cookie |

**Path Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `product_name` | string | Yes | Product identifier (see valid products above). |

**Request Body**

```json
{
  "description": "Updated gold loan content...",
  "lang": "en"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | Updated content. Cannot be empty. |
| `lang` | string | Yes | Language code: `en`, `si`, or `ta`. |

**Example**

```
PUT /product/gold_loan
```

**Response `200 OK`**
```json
{
  "message": "Content updated successfully"
}
```

**Error Responses**

| Status | Message |
|---|---|
| `400 Bad Request` | `"Invalid product name"` |
| `400 Bad Request` | `"Invalid language. Use 'en', 'si', or 'ta'."` |
| `400 Bad Request` | `"Description is required"` |
| `401 Unauthorized` | Session invalid or expired |
| `404 Not Found` | `"User not found"` |
| `500 Internal Server Error` | `"Internal Server Error"` |
