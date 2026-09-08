# Basic Node.js Express Hello App Documentation

## Overview

This is a minimal Express server project. It does not use a database, authentication, or external APIs. Its purpose is to provide a small, clean starting point for a Node.js HTTP API.

## Configuration

The server reads optional values from `.env` using dotenv.

| Variable | Required | Description |
| --- | --- | --- |
| `PORT` | No | HTTP port. Defaults to `1198`. |
| `NODE_ENV` | No | Runtime environment label. |

Copy `.env.example` to `.env` when local configuration is needed.

## Routes

### `GET /`

Returns a short service message.

### `GET /health`

Returns the API health status. This route is useful for quickly checking whether the server is reachable.

### `GET /api/v1/a2rp`

Returns the existing a2rp presentation response.

## Response format

All JSON responses begin with the requested route in `apiUrl`.

```json
{
  "apiUrl": "/api/v1/a2rp",
  "success": true,
  "message": "a2rp: an Ashish Ranjan presentation"
}
```

Unknown paths return JSON with status `404`. Malformed JSON request bodies return status `400`.

## Logging

Each completed request is logged in this format:

```text
[API] GET /health -> 200
```

The logger does not record request bodies or secrets.

## Local setup

```bash
npm install
npm run dev
```

Use `rest.http` to send example requests after starting the server.

## Author and support

**Ashish Ranjan**

Full-Stack Web Developer

- Portfolio: [ashishranjan.in](https://ashishranjan.in/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)
- Support: [a2rp-donation-page.netlify.app](https://a2rp-donation-page.netlify.app/)
- Buy Me a Coffee: [buymeacoffee.com/a2rp](https://buymeacoffee.com/a2rp)
- Patreon: [patreon.com/a2rp](https://www.patreon.com/a2rp)
