import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Sun, Moon, Thermometer } from 'lucide-react'
import { useThemeContext } from '@/context/ThemeContext'

export default function SettingsModal({ isOpen, onClose }) {
  const [useCelsius, setUseCelsius] = React.useState(true)
  const { theme, setTheme } = useThemeContext()

  const handleSave = () => {
    localStorage.setItem('blackrain:unit', useCelsius ? 'celsius' : 'fahrenheit')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-slate-300 dark:bg-[#020618]">
        <DialogHeader>
          <DialogTitle className="dark:text-white text-lg flex items-center gap-2">
            <SettingsIcon className="w-5 h-5" /> Settings
          </DialogTitle>
        </DialogHeader>

        {/* Temperature Unit Switch */}
        <div className="space-y-1">
          <Label htmlFor="unit-switch" className="flex items-center gap-2 dark:text-white">
            <Thermometer className="w-4 h-4" />
            Temperature Unit
          </Label>
          <div className="flex items-center gap-4">
            <span className="text-sm dark:text-white">C°</span>
            <Switch
              id="unit-switch"
              checked={!useCelsius}
              onCheckedChange={() => setUseCelsius(prev => !prev)}
            />
            <span className="text-sm dark:text-white">F°</span>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="space-y-1 pt-4">
          <Label className="flex items-center gap-2 dark:text-white">
            <Sun className="w-4 h-4" />
            Theme
          </Label>
          <RadioGroup value={theme} onValueChange={setTheme} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="r1" className="border-black dark:border-white"/>
              <Label htmlFor="r1" className="dark:text-white">Light</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="r2" className="border-black dark:border-white"/>
              <Label htmlFor="r2" className="dark:text-white">Dark</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system" id="r3" className="border-black dark:border-white"/>
              <Label htmlFor="r3" className="dark:text-white">System</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2 pt-6">
          <Button variant="destructive" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SettingsIcon(props) {
  return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 12 8.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 12c0 .28.07.55.2.8Z"/></svg>
}
