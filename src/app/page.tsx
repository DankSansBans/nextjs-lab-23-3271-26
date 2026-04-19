import Hello from '../components/hello'
import UserCard from '../components/Usercard';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-12">
      <Hello />
      <div className="flex flex-wrap gap-8 justify-center">
        <UserCard name="Chad De Los Santos" role="Frontend Developer" avatar="https://tinyurl.com/dack200430"/>
        <UserCard name="Chad De Los Santos" role="Backend Engineer" avatar="https://tinyurl.com/dack200430" />
      </div>
      <Counter />
    </main>
  );
}