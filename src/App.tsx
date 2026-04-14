import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Story from './pages/Story'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <Nav />
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/stories/:slug"   element={<Story />} />
        <Route path="/about"           element={<About />} />
      </Routes>
    </div>
  )
}
