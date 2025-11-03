import { GlobalLoaderProvider, Toaster } from './components/ui'
import { DataTableExample } from './examples/DataTableExample'

function App() {
  return (
    <GlobalLoaderProvider>
      <DataTableExample />
      <Toaster />
    </GlobalLoaderProvider>
  )
}

export default App
