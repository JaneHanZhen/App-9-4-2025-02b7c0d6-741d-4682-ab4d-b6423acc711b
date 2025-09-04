import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gradient-to-b from-background to-muted">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold tracking-tight mb-6 animate-fade-up">
          Hello World!
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
          Welcome to your new React application built with Vite and TypeScript.
        </p>
        <div className="animate-fade-up animation-delay-300">
          <Button className="px-6 py-6 text-lg">Get Started</Button>
        </div>
      </div>
    </div>
  )
}

export default App