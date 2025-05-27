"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Twitter, Github, Mail, Youtube, Copy, Check } from "lucide-react"
import { useEffect, useState } from "react"

export const metadata = {
  title: "SC0FI",
  description: "SC0FI's personal links",
}

export default function Component() {
  const links = [
    {
      title: "GitHub",
      url: "https://github.com/SC0FI",
      icon: Github,
      description: "View my code projects",
    },
    {
      title: "Twitter",
      url: "https://x.com/SC0FI_",
      icon: Twitter,
      description: "See me repost cat pictures",
    },
    {
      title: "YouTube Channel",
      url: "https://youtube.com/@sc0fl",
      icon: Youtube,
      description: "Watch my videos",
    },
    //{ commented for now
    //  title: "Spotify",
    //  url: "https://open.spotify.com/user/rnfefzzy09o0i0ol7z4nzf7ak?si=eTLp6Wr2RV23UPQXajYvgQ",
    //  icon: Music,
    //  description: "See what I listen to",
    //},
    {
      title: "Contact Me",
      url: "mailto:sc0fi@sc0fi.com",
      icon: Mail,
      description: "Get in touch",
    },
  ]

  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [isRightHalfHovered, setIsRightHalfHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    try {
      await navigator.clipboard.writeText("sc0fi@sc0fi.com")
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy email:", err)
    }
  }

  const handleContactMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width
    const isRightHalf = x > width / 2
    setIsRightHalfHovered(isRightHalf)
  }

  const handleContactMouseLeave = () => {
    setIsRightHalfHovered(false)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Only add mouse tracking on non-touch devices
    if (!("ontouchstart" in window)) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (!("ontouchstart" in window)) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    document.title = "SC0FI"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Mouse glow effect - only on non-touch devices */}
      {typeof window !== "undefined" && !("ontouchstart" in window) && (
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 40%)`,
          }}
        />
      )}

      {/* Border glow effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-transparent to-purple-500/3"></div>
      </div>

      <div className="container max-w-md mx-auto px-4 py-8 relative z-10">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-500">
            <AvatarImage src="https://github.com/SC0FI.png" alt="Profile" />
            <AvatarFallback className="bg-purple-600 text-white text-2xl">SC</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold mb-1">SC0FI</h1>
          <p className="text-lg text-gray-400 mb-4">Jacob Maddox</p>
          <p className="text-gray-300 mb-4">Developer and Student</p>

          <p className="text-sm text-gray-400 leading-relaxed">I program in Java and play too many video games.</p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              {link.title === "Contact Me" ? (
                <div
                  className="relative h-full"
                  onMouseMove={handleContactMouseMove}
                  onMouseLeave={handleContactMouseLeave}
                >
                  <Button
                    variant="ghost"
                    className="w-full h-auto p-4 justify-start text-left hover:bg-purple-900/20"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <link.icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="font-semibold text-white">{link.title}</div>
                            <div className="text-sm text-gray-400 truncate">{link.description}</div>
                          </div>
                        </div>
                        <div className="text-purple-400/60 text-sm">sc0fi@sc0fi.com</div>
                      </div>
                    </a>
                  </Button>

                  {/* Copy button overlay - right quarter */}
                  <div
                    onClick={copyToClipboard}
                    className={`absolute top-0 bottom-0 right-0 w-1/4 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-r-lg transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                      isRightHalfHovered ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span className="hidden sm:inline">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start text-left hover:bg-purple-900/20"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <link.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="font-semibold text-white">{link.title}</div>
                        <div className="text-sm text-gray-400 truncate">{link.description}</div>
                      </div>
                    </div>
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800"></div>
      </div>
    </div>
  )
}
