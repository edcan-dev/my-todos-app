import { CreateToDoForm } from '@/components';

export const metadata = {
 title: 'Create ToDo',
 description: 'Create ToDo',
};

export default function TodosCreatePage() {
  return (
    <main className="bg-zinc-800 h-full grid grid-rows-[1fr]">

      <section className="p-4">
        <h2 className="text-2xl mb-4 text-center">Create a New ToDo</h2>


        {/* CreateToDoForm */}
        <CreateToDoForm />
        
      </section>

      
    </main>
  );
}