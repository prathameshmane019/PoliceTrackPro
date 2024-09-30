
import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'


export default function RootLayout({ children }) {
  return (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              {children}
            </main>
          </div>
        </div>
  )
}