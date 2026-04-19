import { revalidatePath } from 'next/cache';

async function contactAction(formData: FormData) {
  'use server';

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  console.log('✅ Contact form submitted:', { name, email, message });

  revalidatePath('/contact');
}

export default function ContactPage() {
  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form action={contactAction} className="space-y-6 bg-white p-8 rounded-3xl shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-indigo-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea name="message" required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:border-indigo-500" />
        </div>
        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-3xl text-lg">
          Send Message
        </button>
      </form>
      
    </div>
  );
}