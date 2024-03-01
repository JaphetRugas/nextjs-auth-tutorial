# Project README

This repository contains a simple Next.js project utilizing NextAuth for authentication, with various authentication methods implemented including Client-Side Authentication, Server-Side Authentication, and Route-Based Authentication using next-auth/middleware.

## Project Structure

```
src/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   ├── options.ts
│   │   │   │   └── route.ts
│   │   │   └── middleware.ts
│   │   └── ...other API routes
│   │
│   ├── client/
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── NavBar.tsx
│   │   └── UserCard.tsx
│   │
│   ├── context/
│   │   └── AuthProvider.tsx
│   │
│   ├── extra/
│   │   └── page.tsx
│   │
│   ├── server/
│   │   └── page.tsx
│   │
│   └── page.tsx
│
└── middleware.ts
```

## Project Components

- **API**: Contains authentication related API routes and middleware.
- **Client**: Client-side components and pages.
- **Components**: Reusable UI components such as NavBar and UserCard.
- **Context**: Contains AuthProvider component for managing authentication context.
- **Extra**: Extra page for demonstration purposes.
- **Server**: Server-side pages for server-rendered authentication.
- **Page**: Main entry point of the application.
- **Middleware**: Middleware configuration for route-based authentication.

## Authentication Methods

### Client-Side Authentication (Home Component)

The Home component (`app/page.tsx`) demonstrates client-side authentication using NextAuth's `getServerSession` function.

### Server-Side Authentication (ServerPage Component)

The ServerPage component (`app/server/page.tsx`) showcases server-side authentication using NextAuth's `getServerSession` function.

### Route-Based Authentication (next-auth/middleware)

Authentication is applied to specific routes using `next-auth/middleware`. Middleware configuration is provided in `middleware.ts`.

## Configuration

Ensure to set up the following environment variables:

- `NEXTAUTH_SECRET`: Secret key for NextAuth.
- `GITHUB_SECRET`: GitHub client secret.
- `GITHUB_ID`: GitHub client ID.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables as mentioned above.
4. Run the project using `npm run dev`.

## Additional Notes

- Middleware is configured to apply NextAuth only to selected routes (`/extra`, `/dashboard`). You can adjust the `config` in `middleware.ts` to fit your route requirements.

For more details on NextAuth configuration and usage, refer to the [NextAuth documentation](https://next-auth.js.org/).

Happy coding! 🚀
