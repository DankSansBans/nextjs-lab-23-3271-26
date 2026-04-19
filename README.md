
 Middleware does not work and kept deprecating, and I had to switch to Proxy.ts for the last part, it kept telling me to use 'Use Client', and when I did, it worked  and took hours to finish and most of my problems was self 
 inflicted like i kept trying to find the reason why it doesnt show any thing in the browser only to find out i had two copies and so i deleted one and it finally worked.
 
 01 — Hello.tsx A simple, reusable static functional component that displays a welcoming message using JSX and Tailwind CSS styling. It shows the basic structure of a Next.js component.

02 — UserCard.tsx A  presentational component that accepts name, role, and an optional avatar prop. It creteers a user profile card and gracefully handles the case when no avatar is provided.

03 — Counter.tsx A fully interactive client component ('use client') that uses React’s useState hook to manage a counter. Includes increment, decrement (with minimum 0), and reset  

04 — layout.tsx The root layout file that wraps the entire application. It includes Global metadata, title  ,description
and Custom font, navigation bar with 

05 — Posts Page (/posts/page.tsx) (Async Server Component)An async server component that fetches blog posts from JSONPlaceholder at build/request time. It renders the first 10 posts in a clean card layout.

06 — Dynamic Route (/posts/[id]/page.tsx)A dynamic route component that fetches and displays a single blog post based on the id in the URL.

07 — Contact Page (/contact/page.tsx) A form page that uses Server Actions to handle form submission on the server. It logs the submitted data (name, email, message) and demonstrates form handling without client-side JavaScript for the action itself.

08 — loading.tsx (Loading UI with Suspense)A skeleton loading component that provides a nice animated placeholder while the posts are being fetched. Used together with Suspense for streaming UI in the updated Posts page.

09 — middleware.ts + Login Pagemiddleware.ts: Protects routes by checking for an auth-token cookie. Redirects unauthenticated users to the login page.

Login Page (/login/page.tsx): A simple demo page explaining how to test the route protection using browser cookies.

10 — Cart Systemcart-context.tsx (Custom Hook + Context): A React Context + custom hook (useCart) that manages a global shopping cart state (add/remove items, calculate total

CartSummary.tsx: A small client component that shows the current cart count and total price in the navigation bar.



