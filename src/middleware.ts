// without matcher the next-auth will be applied to the whole project
export { default } from "next-auth/middleware"

// apply next-auth only to the selected routes
export const config = { matcher: ["/extra", "/dasboard"] }

// Doc: https://next-auth.js.org/tutorials/securing-pages-and-api-routes