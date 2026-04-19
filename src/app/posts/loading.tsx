export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center animate-pulse">Loading Posts...</h1>
      <div className="grid gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-md border animate-pulse">
            <div className="h-7 bg-gray-200 rounded-2xl w-3/4 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded-2xl"></div>
              <div className="h-4 bg-gray-200 rounded-2xl w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded-2xl w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}