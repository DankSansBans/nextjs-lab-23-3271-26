interface UserCardProps {
  name: string;
  role: string;
  avatar?: string; // optional prop
}

export default function UserCard({ name, role, avatar }: UserCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 max-w-sm">
      <div className="flex items-center gap-4">
        {avatar && <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Avatar: {avatar ?? 'No avatar provided'}
      </p>
    </div>
  );
}