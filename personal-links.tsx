"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Twitter, Github, Mail, Youtube, Music } from "lucide-react"
import { useEffect } from "react"

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
      description: "Follow my thoughts",
    },
    {
      title: "YouTube Channel",
      url: "https://youtube.com/@sc0fl",
      icon: Youtube,
      description: "Watch my videos",
    },
    {
      title: "Spotify",
      url: "https://open.spotify.com/user/rnfefzzy09o0i0ol7z4nzf7ak?si=eTLp6Wr2RV23UPQXajYvgQ",
      icon: Music,
      description: "See what I listen to",
    },
    {
      title: "Contact Me",
      url: "mailto:sc0fi@sc0fi.com",
      icon: Mail,
      description: "Get in touch",
    },
  ]

  useEffect(() => {
    document.title = "SC0FI"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container max-w-md mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-500">
            <AvatarImage src="https://github.com/SC0FI.png" alt="Profile" />
            <AvatarFallback className="bg-purple-600 text-white text-2xl">SC</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold mb-1">SC0FI</h1>
          <p className="text-lg text-gray-400 mb-4">Jacob Maddox</p>
          <p className="text-gray-300 mb-4">Creative Developer & Content Creator</p>

          <p className="text-sm text-gray-400 leading-relaxed">
            Java programmer and I love playing video games in my free time!
          </p>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
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
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800"></div>
      </div>
    </div>
  )
}
