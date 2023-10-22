import Image from "next/image";
import fox from "@/public/images/fox.jpg";

export default function Home() {
  return (
    <main className="relative h-screen">
      <Image
        className="object-cover"
        src="https://bit.ly/react-cover"
        fill
        alt="react"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={75}
        priority
      />
    </main>
  );
}
