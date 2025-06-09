import React, { useState } from 'react'
import { Settings, Star, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CityManagerModal from '@/components/CityManagerModal'
import SettingsModal from '@/components/SettingsModal'

export default function Navbar({ isAuthenticated, weatherNow }) {
  const [favoritesOpen, setFavoritesOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 px-4 py-3 flex items-center justify-between bg-black/30 backdrop-blur-md shadow-sm transition-all duration-300"
      >
        {/* Left Side: Brand */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Blackrain
        </h1>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-white hover:text-yellow-300 transition"
                onClick={() => setFavoritesOpen(true)}
              >
                <Star className="w-4 h-4 mr-1" /> Favorites
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cursor-pointer text-white hover:text-blue-300 transition"
                onClick={() => setSettingsOpen(true)}
              >
                <Settings className="w-4 h-4 mr-1" /> Settings
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-white border-white hover:bg-white/10 transition"
            >
              <LogIn className="w-4 h-4 mr-2" /> Sign up / Login
            </Button>
          )}
        </div>
      </nav>

      {/* Modals */}
      <CityManagerModal isOpen={favoritesOpen} weatherNow={weatherNow} onClose={() => setFavoritesOpen(false)} />
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  )
}
