import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Linkedin, Github } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Siddharth Reddy",
      role: "Co-Lead Developer",
      initials: "SR",
      linkedin: "https://www.linkedin.com/in/siddharth-reddy-b9b2ab328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Siddhu007006"
    },
    {
      name: "Nadeshwar Swami",
      role: "Lead Developer",
      initials: "NS",
      linkedin: "https://www.linkedin.com/in/akurathi-nadeshwar-swami-9609b8342/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFMnuIjGhT7isnZTaCi61Dg%3D%3D",
      github: "https://github.com/nadeshwar-swami"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Experienced professionals dedicated to bringing you the best staking experience.</p>
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          {team.map((member, idx) => (
            <Card key={idx} className="flex-1 min-w-[220px] max-w-[350px] p-4 text-center bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all flex flex-col justify-center items-center">
              <Avatar className="w-14 h-14 mx-auto mb-3">
                <AvatarFallback className="bg-primary/20 text-primary">{member.initials}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold break-words leading-tight mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground break-words leading-tight mb-3">{member.role}</p>
              <div className="flex gap-3 justify-center mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0077b5] text-white text-sm font-medium hover:bg-[#005983] transition-colors">
                  <Linkedin className="w-4 h-4" />
                  Linkedin
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#24292f] text-white text-sm font-medium hover:bg-[#171a1d] transition-colors">
                  <Github className="w-4 h-4" />
                  Github
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
