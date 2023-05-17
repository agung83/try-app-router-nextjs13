import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-blue-50 flex justify-center justify-items-center">
      <Link className="text-red-500 font-bold" href="/dashboard">
        Go to Dashboard
      </Link>
    </div>
  );
}
