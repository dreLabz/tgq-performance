import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <Image
          src="/tgq_logo.png"
          alt="TGQ Performance"
          width={80}
          height={28}
          className="w-16 h-auto opacity-60"
        />

        <p className="font-body text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} TGQ Performance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
