import { Button } from './components/ui/button';
import { Github } from 'lucide-react';
import { Separator } from './components/ui/separator';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='px-6 py-3 flex items-center justify-between border-b'>
        <h1 className='text-xl font-bold'>upload.ai</h1>
        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground'>Desenvolvido por Artur Bomtempo</span>
          <Separator orientation='vertical' className='h-6' />
          <Button variant='outline'>
            <Github className='w-4 h-4 mr-2' />
            GitHub
          </Button>
        </div>
      </header>
    </div>
  );
}