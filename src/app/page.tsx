import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Form Builder Project 🚀</h1>
          <Button>Click me!</Button>
      </main>
  );
}
