"use client"

import Link from "next/link"
import { ArrowUpRight, Github, Twitter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-12 flex space-x-6 text-sm text-gray-400">
         
        </nav>

        <section id="what" className="mb-20">
          <h1 className="mb-6 text-4xl font-bold">Couse</h1>
          <p className="mb-4 text-xl text-gray-400">16 y/o developer, software engineer and ceo.</p>
          <p className="mb-6 text-gray-300">
            I design, build and publish products of quality and reliability. Currently, I'm a co-founder and developer
            at{" "}
            <Link href="#" className="text-purple-400 hover:underline">
              Couge
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-purple-400 hover:underline">
              Eessa
            </Link>
            .
          </p>
          <p className="text-gray-300">
            In my free time, I work on various side-projects; I'm currently learning Solidity and work on the Waifusion
            NFT project. I also invest in and help startups with strategy, development, fundraising and more. Got a big
            decision to make? I'm always down to chat to new founders.
          </p>
        </section>

        <section id="where" className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">Where I've Done It</h2>
          <h3 className="mb-4 text-xl font-semibold text-gray-400">Companies</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {companies.map((company) => (
              <Card key={company.name} className="border-gray-800 bg-gray-900/50 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: company.color }}
                    >
                      {company.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{company.name}</h4>
                        <ArrowUpRight className="h-4 w-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400">{company.type}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-400">Role</p>
                    <p>{company.role}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">What</p>
                    <p className="text-gray-300">{company.what}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="how" className="mb-20">
          <h2 className="mb-8 text-3xl font-bold">How I Do It</h2>
          <p className="mb-6 text-gray-300">
            I highly leverage new bleeding-edge technologies and languages like Elixir to stay on top of the game. You
            can find a list of my most-used technologies below.
          </p>
          <div className="grid gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-start gap-4 rounded-lg border border-gray-800 bg-gray-900/50 p-4 backdrop-blur"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.icon}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-semibold">{tech.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {tech.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300">{tech.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="more">
          <h2 className="mb-8 text-3xl font-bold">/etc</h2>
          <div className="grid gap-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Thanks</h3>
              <p className="text-gray-300">
                Thanks for visiting. I hope you enjoyed your stay. The source code for this website is available at{" "}
                <Link href="#" className="text-purple-400 hover:underline">
                  phineas/phineas.io
                </Link>
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Contact</h3>
              <div className="flex space-x-4">
                <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span>Twitter</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const companies = [
  {
    name: "Hiven",
    type: "Consumer social",
    role: "Founder & Developer",
    what: "I founded Hiven back in 2019 to make it easy for anyone create premium groups.",
    color: "#A855F7",
    icon: "H",
  },
  {
    name: "Giggl",
    type: "Consumer social",
    role: "Co-founder & Developer",
    what: "I helped design and create the backend, realtime infrastructure and the frontend.",
    color: "#6366F1",
    icon: "G",
  },
  {
    name: "Honk",
    type: "Consumer social",
    role: "Backend Engineer",
    what: "I designed and implemented the realtime infrastructure at Honk using Elixir.",
    color: "#3B82F6",
    icon: "H",
  },
]

const technologies = [
  {
    name: "Elixir",
    type: "Realtime, Backend",
    useCase: "Building fault-tolerant realtime systems that scale out across multiple nodes",
    color: "#A855F7",
    icon: "🔥",
  },
  {
    name: "React",
    type: "Frontend framework",
    useCase: "Constructing stateful and durable frontends for large and interactive web apps",
    color: "#0EA5E9",
    icon: "⚛️",
  },
  {
    name: "Rust",
    type: "Backend, System",
    useCase: "Optimizing parts of Elixir code using Rust NIFs and writing efficient system code",
    color: "#F97316",
    icon: "🦀",
  },
  {
    name: "TypeScript",
    type: "JS Framework",
    useCase: "Types for JS - will save your life when projects expand",
    color: "#0EA5E9",
    icon: "TS",
  },
  {
    name: "RabbitMQ",
    type: "Message queue",
    useCase: "Messaging between different services in a robust & durable way",
    color: "#F97316",
    icon: "🐰",
  },
  {
    name: "Solidity",
    type: "Web3",
    useCase: "Crafting integrous and reliable smart contracts governed by the Ethereum blockchain",
    color: "#64748B",
    icon: "⬢",
  },
]

