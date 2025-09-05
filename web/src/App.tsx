import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import "./App.css"

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  
  const showHelloModal = () => {
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#a6e1fa] via-[#d1f5ff] to-[#ffecb8]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight mb-6 text-primary">
          Hello Summer!
        </h1>
        <p className="text-xl text-foreground mb-8">
          Enjoy the sunshine and warm weather with this summer-themed application.
        </p>
        
        {/* Click Me button */}
        <div className="mb-4">
          <Button 
            size="lg" 
            className="px-6 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow"
            onClick={showHelloModal}
          >
            Explore Summer
          </Button>
        </div>
        
        {/* Get Started button with loading state */}
        <div>
          <Button 
            variant="secondary"
            size="lg"
            className="px-6 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow"
            loading={isLoading}
            onClick={handleGetStarted}
          >
            {isLoading ? "Loading..." : "Get Started"}
          </Button>
        </div>
      </div>
      
      <div className="absolute top-10 right-10">
        <div className="text-5xl animate-pulse">☀️</div>
      </div>
      
      <div className="absolute bottom-10 left-10">
        <div className="text-5xl">🌴</div>
      </div>
      
      <div className="absolute bottom-16 right-10">
        <div className="text-5xl">🍹</div>
      </div>
      
      {/* Modal */}
      <Modal 
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Summer Vibes"
      >
        <div className="p-4 text-center">
          <p className="mb-4">Enjoy your summer adventures with bright sunshine and cool breezes!</p>
          <div className="flex justify-center gap-2 text-3xl mb-6">
            <span>🏄‍♂️</span>
            <span>🏖️</span>
            <span>🍉</span>
            <span>🍦</span>
          </div>
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