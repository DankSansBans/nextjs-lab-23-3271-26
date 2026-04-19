import Link from 'next/link';

interface Props {
  params: { id: string };
}

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error('Failed');
  return res.json();
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id);

  return (
    <div className="max-w-2xl mx-auto p-8">
      <Link href="/posts" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-8 text-sm font-medium">
        ← Back to Posts
      </Link>
      <article className="bg-white p-8 rounded-3xl shadow-lg">
        <div className="flex justify-between items-baseline mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <span className="text-sm bg-gray-100 px-3 py-1 rounded-2xl text-gray-500">User ID: {post.userId}</span>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{post.body}</p>
      </article>
    </div>
  );
}

// Bonus: generateStaticParams
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  return posts.slice(0, 10).map((post: any) => ({ id: post.id.toString() }));
}