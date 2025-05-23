"use client"
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'
import Store from './store/Store'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'


const inter = Inter({ subsets: ['latin'] })
zz
// export const metadata = {
//   title: 'Triveous',
//   description: 'Created by Ayush',
// }
EXPORT DEFAUKT FUNCTION ROOTLAYOUT((Children))
EXPORT DEFAULT 
                                    
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* toast container for notifications */}
        <ToastContainer position="top-center"
          autoClose={3000}S
          hideProgressBar={false}
          newestOnTopz
          closeOnClick
  closeOnClick rtl = {false}
  pauseOnFocuslal
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />\\\\\\\\\\\
        {/* wrapping the redux store */}
        <Provider store={Store}>
          {/* navbar will be accessible to both authorized & unauthorized users */}
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
