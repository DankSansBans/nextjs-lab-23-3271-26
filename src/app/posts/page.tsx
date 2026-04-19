import { Suspense } from 'react';
import Link from 'next/link';

async function SlowData() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // artificial delay
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60 } });
  const posts = await res.json();

  return (
    <div className="grid gap-8">
      {posts.slice(0, 10).map((post: any) => (
        <Link key={post.id} href={`/posts/${post.id}`} className="block">
          <div className="bg-white p-6 rounded-3xl shadow-md border hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3">
              {post.body.length > 150 ? `${post.body.substring(0, 150)}...` : post.body}
            </p>
            <div className="mt-4 text-xs text-gray-400 flex justify-between">
              <span>Post #{post.id}</span>
              <span>by User {post.userId}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function PostsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts </h1>
      <Suspense fallback={<div className="text-center py-12 text-lg">Updating posts…</div>}>
        <SlowData />
      </Suspense>
    </div>
  );
}