"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
    const [step, setStep] = useState(1)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showContinue, setShowContinue] = useState(false)
    const router = useRouter()

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (step < 4) {
                setStep(step + 1)
            } else if (password === confirmPassword) {
                setShowContinue(true)
            }
        } else if (e.key === 'Backspace' && !e.currentTarget.value) {
            e.preventDefault()
            if (step > 1) {
                setStep(step - 1)
            }
        }
    }

    const handleFinalKeyPress = (e: KeyboardEvent) => {
        if (showContinue) {
            router.push('/story')
        }
    }

    useEffect(() => {
        if (showContinue) {
            window.addEventListener('keydown', handleFinalKeyPress)
            return () => window.removeEventListener('keydown', handleFinalKeyPress)
        }
    }, [showContinue])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] p-4">
            <div className="w-full max-w-md space-y-4 font-body text-green-500">
                {step >= 1 && (
                    <div className="flex items-center space-x-2">
                        <span>▸</span>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Enter username"
                            className="bg-transparent border-none outline-none font-body text-green-500 w-full"
                            autoFocus={step === 1}
                        />
                    </div>
                )}

                {step >= 2 && (
                    <div className="flex items-center space-x-2">
                        <span>▸</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Enter email"
                            className="bg-transparent border-none outline-none font-body text-green-500 w-full"
                            autoFocus={step === 2}
                        />
                    </div>
                )}

                {step >= 3 && (
                    <div className="flex items-center space-x-2">
                        <span>▸</span>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Enter password"
                            className="bg-transparent border-none outline-none font-body text-green-500 w-full"
                            autoFocus={step === 3}
                        />
                    </div>
                )}

                {step >= 4 && (
                    <div className="flex items-center space-x-2">
                        <span>▸</span>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Confirm password"
                            className="bg-transparent border-none outline-none font-body text-green-500 w-full"
                            autoFocus={step === 4}
                        />
                    </div>
                )}

                {showContinue && (
                    <div className="text-center mt-8">
                        <p>&#60;PRESS ANY KEY TO CONTINUE&#62;</p>
                    </div>
                )}

                <div className="text-center mt-4 text-sm text-gray-500">
                    Press backspace to go to previous step
                </div>
            </div>
        </div>
    )
}