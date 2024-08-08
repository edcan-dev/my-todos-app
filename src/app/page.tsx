import { HomePageWrapper } from "@/components";

export const metadata = {
  title: "My ToDos",
  description: "My ToDos",
};

export const revalidate = 0;
export default function Home() {
  return (
    <main className="bg-zinc-800 h-full grid grid-rows-[1fr_100px]">
      
      <HomePageWrapper />

    </main>
  );
}
