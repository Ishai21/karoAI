import React from 'react'
import {router} from './app.routes'
import {RouterProvider} from 'react-router-dom'
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from './features/ai/interview.context.jsx'


const App = () => {
  return (
    <AuthProvider>
        <InterviewProvider>
            <RouterProvider router={router} />
        </InterviewProvider>
    </AuthProvider>
  )
}

export default App
