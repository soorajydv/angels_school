import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Newspaper,
  Search,
  Star,
  Trophy,
  Users,
  MapPin,
  Music,
  Briefcase,
  Paintbrush,
  Heart,
} from "lucide-react"

export default function NewsEventsPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/images/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Campus event"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">News & Events</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Stay informed about the latest happenings at Angels School.
          </p>
        </div>
      </div>

      {/* News & Events Tabs */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="news" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="news">News</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search news and events..."
                className="w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          <TabsContent value="news">
            <div className="grid gap-8">
              {/* Featured News */}
              <div className="animate-slide-up">
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/images/banner1.jpg?height=400&width=600"
                        fill
                        alt="President's announcement"
                        className="object-cover h-full"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2 bg-primary">Featured</Badge>
                      <h2 className="text-2xl font-bold mb-3">Angels School Announces New Research Initiative</h2>
                      <p className="text-muted-foreground mb-4">
                        President Smith unveils a $25 million research initiative focused on sustainable energy
                        solutions, creating new opportunities for faculty and student researchers.
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mb-6">
                        <Calendar className="h-4 w-4 mr-1" /> April 1, 2025
                      </div>
                      <Button asChild>
                        <Link href="/news/research-initiative">Read Full Story</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* News Categories */}
              <div
                className="grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Card className="hover-card">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <Star className="h-5 w-5 text-primary mr-2" /> Academic News
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-sm">
                    <p>Updates on academic programs, faculty achievements, and educational initiatives.</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/news/academic" className="text-primary text-sm flex items-center">
                      View News <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="hover-card">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <Trophy className="h-5 w-5 text-primary mr-2" /> Research Spotlight
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-sm">
                    <p>Highlights of groundbreaking research and innovations from our faculty and students.</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/news/research" className="text-primary text-sm flex items-center">
                      View News <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="hover-card">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" /> Campus Life
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-sm">
                    <p>Stories about student activities, organizations, and life on campus.</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/news/campus-life" className="text-primary text-sm flex items-center">
                      View News <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="hover-card">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base flex items-center">
                      <Globe className="h-5 w-5 text-primary mr-2" /> University Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 text-sm">
                    <p>News about our university's contributions to society and global initiatives.</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link href="/news/impact" className="text-primary text-sm flex items-center">
                      View News <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Recent News */}
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-2xl font-bold mb-6">Recent News</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: "Professor Johnson Wins National Science Award",
                      category: "Faculty Achievements",
                      date: "March 28, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "Chemistry professor Dr. Sarah Johnson has been recognized with a prestigious national award for her research on sustainable materials.",
                    },
                    {
                      title: "New Partnership with Tech Industry Leader",
                      category: "Partnerships",
                      date: "March 25, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "Angels School announces a new partnership with TechCorp to provide internship opportunities and collaborative research projects.",
                    },
                    {
                      title: "Student Team Wins International Competition",
                      category: "Student Success",
                      date: "March 20, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "Engineering students take first place in an international robotics competition, showcasing innovation and teamwork.",
                    },
                    {
                      title: "University Expands Scholarship Program",
                      category: "Financial Aid",
                      date: "March 15, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "Angels School increases funding for merit and need-based scholarships, making education more accessible.",
                    },
                    {
                      title: "New Sustainability Initiative Launched",
                      category: "Campus Updates",
                      date: "March 10, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "The university announces comprehensive plans to achieve carbon neutrality by 2030 through various campus initiatives.",
                    },
                    {
                      title: "Alumni Entrepreneur Creates Scholarship Fund",
                      category: "Alumni News",
                      date: "March 5, 2025",
                      image: "/banner1?height=200&width=300",
                      excerpt:
                        "Successful graduate establishes a $2 million scholarship fund to support students pursuing entrepreneurship.",
                    },
                  ].map((news, index) => (
                    <Card key={index} className="hover-card">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={news.image || "/banner1"}
                          fill
                          alt={news.title}
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          <Badge variant="outline" className="text-xs">
                            {news.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground ml-auto flex items-center">
                            <Calendar className="h-3 w-3 mr-1" /> {news.date}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{news.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{news.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/news/${news.title.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/news/archive">View All News</Link>
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid gap-8">
              {/* Featured Event */}
              <div className="animate-slide-up">
                <Card className="overflow-hidden bg-primary text-primary-foreground">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/images/banner1.jpg?height=400&width=600"
                        fill
                        alt="Spring commencement"
                        className="object-cover h-full"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2 bg-white text-primary">Featured Event</Badge>
                      <h2 className="text-2xl font-bold mb-3">Spring Commencement Ceremony 2025</h2>
                      <p className="text-primary-foreground/90 mb-4">
                        Join us in celebrating the achievements of our graduating students at the annual Spring
                        Commencement ceremony.
                      </p>
                      <div className="flex items-center text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-1" /> May 15, 2025
                      </div>
                      <div className="flex items-center text-sm mb-2">
                        <Clock className="h-4 w-4 mr-1" /> 10:00 AM - 1:00 PM
                      </div>
                      <div className="flex items-center text-sm mb-6">
                        <MapPin className="h-4 w-4 mr-1" /> University Stadium
                      </div>
                      <Button variant="secondary" asChild>
                        <Link href="/events/commencement">Event Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Upcoming Events */}
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      This Week
                    </Button>
                    <Button variant="outline" size="sm">
                      This Month
                    </Button>
                    <Button variant="outline" size="sm">
                      View Calendar
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Guest Lecture: The Future of Artificial Intelligence",
                      date: "April 5, 2025",
                      time: "2:00 PM - 4:00 PM",
                      location: "Science Building, Room 301",
                      category: "Academic",
                      icon: <GraduationCap className="h-8 w-8 text-primary" />,
                    },
                    {
                      title: "Spring Concert: University Symphony Orchestra",
                      date: "April 10, 2025",
                      time: "7:30 PM - 9:30 PM",
                      location: "Performing Arts Center",
                      category: "Arts & Culture",
                      icon: <Music className="h-8 w-8 text-primary" />,
                    },
                    {
                      title: "Career Fair: STEM Industries",
                      date: "April 15, 2025",
                      time: "10:00 AM - 3:00 PM",
                      location: "Student Center Ballroom",
                      category: "Career Development",
                      icon: <Briefcase className="h-8 w-8 text-primary" />,
                    },
                    {
                      title: "Student Research Symposium",
                      date: "April 20, 2025",
                      time: "9:00 AM - 5:00 PM",
                      location: "University Library",
                      category: "Research",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                    },
                    {
                      title: "Alumni Networking Reception",
                      date: "April 25, 2025",
                      time: "6:00 PM - 8:00 PM",
                      location: "Alumni Center",
                      category: "Networking",
                      icon: <Users className="h-8 w-8 text-primary" />,
                    },
                  ].map((event, index) => (
                    <Card key={index} className="hover-card">
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-primary/5 p-6 flex items-center justify-center md:w-1/6">
                          <div className="text-center">
                            <div className="text-2xl font-bold">{event.date.split(", ")[0].split(" ")[1]}</div>
                            <div className="text-sm">{event.date.split(" ")[0]}</div>
                          </div>
                        </div>
                        <CardHeader className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <Badge variant="outline" className="mb-2">
                                {event.category}
                              </Badge>
                              <CardTitle>{event.title}</CardTitle>
                              <CardDescription className="mt-2 space-y-1">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" /> {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" /> {event.location}
                                </div>
                              </CardDescription>
                            </div>
                            <Button variant="outline" size="sm" className="ml-4" asChild>
                              <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>Details</Link>
                            </Button>
                          </div>
                        </CardHeader>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button asChild>
                    <Link href="/events/calendar">View Full Calendar</Link>
                  </Button>
                </div>
              </div>

              {/* Event Categories */}
              <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <h2 className="text-2xl font-bold mb-6">Event Categories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Academic Events", icon: <GraduationCap className="h-6 w-6" /> },
                    { name: "Arts & Culture", icon: <Paintbrush className="h-6 w-6" /> },
                    { name: "Athletics", icon: <Trophy className="h-6 w-6" /> },
                    { name: "Career Development", icon: <Briefcase className="h-6 w-6" /> },
                    { name: "Community Service", icon: <Heart className="h-6 w-6" /> },
                    { name: "Student Activities", icon: <Users className="h-6 w-6" /> },
                    { name: "Workshops & Training", icon: <FileText className="h-6 w-6" /> },
                    { name: "Virtual Events", icon: <Globe className="h-6 w-6" /> },
                  ].map((category, index) => (
                    <Card
                      key={index}
                      className="hover-card transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-4 group-hover:bg-white/20">
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Newspaper className="h-6 w-6 text-primary" />
              <h2 className="section-title">Stay Informed</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Subscribe to our newsletter to receive the latest news and event updates directly in your inbox.
            </p>
          </div>

          <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interests (select all that apply)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Academic News</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Campus Events</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Research News</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="text-sm">Alumni Updates</span>
                    </label>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input id="terms" type="checkbox" className="rounded border-gray-300" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to receive emails from Angels School. You can unsubscribe at any time.
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Subscribe to Newsletter
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Room CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Media & Press</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Journalists and media professionals can access press releases, media contacts, and resources in our press
            room.
          </p>
          <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.2s" }} asChild>
            <Link href="/news/press-room">Visit Press Room</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

