# Basic Node.js Express Hello App

A small Express API that demonstrates a clean server setup with a service route, health endpoint, JSON responses, and request logging.

## Features

- Express server on port `1198` by default
- Home endpoint
- Health endpoint
- Existing `a2rp` API endpoint
- Consistent `apiUrl` field in JSON responses
- `[API]` request and status logs
- JSON body parsing with a small request-size limit
- JSON 404, malformed JSON, and oversized-body error responses
- Port validation and query-free request logs

## Requirements

- Node.js 18 or newer

## Configuration

Copy `.env.example` to `.env` if you want to override the default port.

```env
PORT=1198
NODE_ENV=development
```

## Install and run

```bash
npm install
npm run dev
```

The API starts at `http://localhost:1198`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/` | Service information |
| GET | `/health` | Service health status |
| GET | `/api/v1/a2rp` | Basic a2rp response |

Example response:

```json
{
  "apiUrl": "/health",
  "status": "ok",
  "service": "basic-nodejs-expressjs-hello-app"
}
```


## Author

**Ashish Ranjan**

Full-Stack Web Developer

## Links

- Portfolio: [ashishranjan.in](https://ashishranjan.in/)
- GitHub: [github.com/a2rp](https://github.com/a2rp)
- CodePen: [codepen.io/ash1198](https://codepen.io/ash1198)
- LinkedIn: [linkedin.com/in/aashishranjan](https://www.linkedin.com/in/aashishranjan)
- Facebook: [facebook.com/theash.ashish](https://www.facebook.com/theash.ashish/)
- YouTube: [Ashish Ranjan](https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1)
- Email: [ash.ranjan09@gmail.com](mailto:ash.ranjan09@gmail.com)

## Support

- [Support page](https://a2rp-donation-page.netlify.app/)
- [Buy Me a Coffee](https://buymeacoffee.com/a2rp)
- [Patreon](https://www.patreon.com/a2rp)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
