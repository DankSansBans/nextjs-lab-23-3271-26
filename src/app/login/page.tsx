export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Login Page</h1>
        <p className="text-gray-600">Demo protected route page.</p>
        <div className="mt-12 text-xs bg-amber-100 text-amber-700 p-4 rounded-2xl">
          To test protection: clear the <strong>auth-token</strong> cookie in DevTools → try visiting /posts
        </div>
      </div>
    </div>
  );
}