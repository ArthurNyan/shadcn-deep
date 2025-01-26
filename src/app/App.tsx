import { Button } from '@/shared/ui/button'
import './styles/index.css'
import { Input } from '@/shared/ui/input'
import { Switch } from '@/shared/ui/switch'

function App() {
  return (
    <div className='p-4 flex-col gap-4 flex w-fit'>
      <h1>Hello World!</h1>
      <div className='flex-col gap-2 column flex'>
        <Button>Редактировать</Button>
        <Button variant="secondary">Редактировать</Button>
        <Button variant="tretiary">Редактировать</Button>
        <Button variant="success">Редактировать</Button>
        <Button variant="destructive">Редактировать</Button>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode">Airplane Mode</label>
        </div>
      </div>
      <div className='flex-col gap-2 column flex'>
        <Input label='Фамилия' />
        <Input label='Password' type='password' />
      </div>
    </div>
  )
}

export default App
