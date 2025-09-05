import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import "./App.css"

function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const showHelloZhen = () => {
    setModalVisible(true)
  }
  
  const handleGetStarted = () => {
    setIsLoading(true)
    // Simulate loading for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight mb-6 animate-fade-up">
          Hello Jason!
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
          Welcome to your new React application built with Vite and TypeScript.
        </p>
        
        {/* Click Me button */}
        <div className="animate-fade-up animation-delay-300 mb-4">
          <Button 
            size="lg" 
            className="px-6 py-6 text-lg"
            onClick={showHelloZhen}
          >
            Click Me
          </Button>
        </div>
        
        {/* Get Started button with loading state */}
        <div className="animate-fade-up animation-delay-400">
          <Button 
            className="px-6 py-6 text-lg"
            loading={isLoading}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
      
      {/* Hello Zhen Modal */}
      <Modal 
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Hello Jason"
      >
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => setModalVisible(false)} 
            className="min-w-24"
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default App