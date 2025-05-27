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

// Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z" />
  </svg>
)

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
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <DiscordIcon className="w-4 h-4" />
            <span className="text-sm">@SC0FI</span>
          </div>
        </div>
      </div>
    </div>
  )
}
