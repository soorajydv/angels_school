import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  BookOpen,
  Calendar,
  Coffee,
  Globe,
  Heart,
  Home,
  MapPin,
  Music,
  Paintbrush,
  ShoppingBag,
  Trophy,
  Users,
  Clock,
  GraduationCap,
} from "lucide-react"

export default function CampusLifePage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/images/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Students enjoying campus life"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Campus Life</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Experience a vibrant community where learning extends beyond the classroom.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="section-title">Student Life</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              At academiauniversity, campus life is a rich tapestry of experiences that complement your academic
              journey. From joining student organizations to participating in campus traditions, you'll find countless
              ways to connect with peers, pursue your passions, and create lasting memories.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our vibrant residential communities, diverse dining options, recreational facilities, and cultural events
              create a supportive and engaging environment where students thrive personally and academically.
            </p>
            <p className="mb-6 text-muted-foreground">
              Discover all that our campus has to offer and make your college experience truly transformative.
            </p>
          </div>
          <div
            className="relative rounded-lg overflow-hidden h-[400px] animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/banner1.jpg?height=400&width=600"
              fill
              alt="Students on campus"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Housing Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Home className="h-6 w-6 text-primary" />
              <h2 className="section-title">Housing & Dining</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comfortable living spaces and diverse dining options to make campus feel like home.
            </p>
          </div>

          <Tabs defaultValue="housing" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="housing">Residence Halls</TabsTrigger>
              <TabsTrigger value="dining">Dining Options</TabsTrigger>
            </TabsList>
            <TabsContent value="housing" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    name: "Legacy Hall",
                    type: "First-Year Students",
                    features: [
                      "Double rooms",
                      "Shared bathrooms",
                      "Study lounges on each floor",
                      "Community kitchen",
                      "Laundry facilities",
                    ],
                  },
                  {
                    name: "Summit House",
                    type: "Upperclassmen",
                    features: [
                      "Suite-style rooms",
                      "Private bathrooms",
                      "Living room in each suite",
                      "Kitchenette",
                      "Quiet study areas",
                    ],
                  },
                  {
                    name: "Oakwood Apartments",
                    type: "Juniors & Seniors",
                    features: [
                      "2 and 4 bedroom apartments",
                      "Full kitchen",
                      "Living room",
                      "Dining area",
                      "On-site parking",
                    ],
                  },
                  {
                    name: "Global Village",
                    type: "International Community",
                    features: [
                      "Single and double rooms",
                      "Shared kitchens",
                      "Cultural lounges",
                      "Language exchange programs",
                      "International events",
                    ],
                  },
                  {
                    name: "Honors Residence",
                    type: "Honors Program",
                    features: [
                      "Single rooms",
                      "Seminar rooms",
                      "Faculty mentors in residence",
                      "Special programming",
                      "24-hour study spaces",
                    ],
                  },
                  {
                    name: "Eco House",
                    type: "Sustainability Focus",
                    features: [
                      "Energy-efficient design",
                      "Sustainable living practices",
                      "Organic garden",
                      "Solar panels",
                      "Composting program",
                    ],
                  },
                ].map((residence, index) => (
                  <Card
                    key={index}
                    className="hover-card animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle>{residence.name}</CardTitle>
                      <CardDescription>{residence.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        {residence.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-primary">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/campus-life/housing#${residence.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="dining" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    name: "Main Dining Hall",
                    icon: <Coffee className="h-8 w-8 text-primary" />,
                    description:
                      "Our largest dining facility offering a wide variety of stations including international cuisine, comfort food, vegetarian and vegan options, and a salad bar.",
                    hours: "7:00 AM - 10:00 PM",
                    location: "Student Center, Main Floor",
                  },
                  {
                    name: "The Marketplace",
                    icon: <ShoppingBag className="h-8 w-8 text-primary" />,
                    description:
                      "A food court featuring several popular restaurant chains and grab-and-go options for students on the move.",
                    hours: "10:00 AM - 9:00 PM",
                    location: "Student Center, Lower Level",
                  },
                  {
                    name: "Global Flavors",
                    icon: <Globe className="h-8 w-8 text-primary" />,
                    description:
                      "Featuring authentic international cuisines that rotate throughout the semester, showcasing dishes from around the world.",
                    hours: "11:00 AM - 8:00 PM",
                    location: "Global Village Community Center",
                  },
                  {
                    name: "The Study Café",
                    icon: <BookOpen className="h-8 w-8 text-primary" />,
                    description:
                      "A cozy café offering coffee, tea, pastries, sandwiches, and light meals in a quiet atmosphere perfect for studying.",
                    hours: "7:00 AM - 12:00 AM",
                    location: "University Library, First Floor",
                  },
                ].map((dining, index) => (
                  <Card
                    key={index}
                    className="hover-card animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">{dining.icon}</div>
                      <div>
                        <CardTitle>{dining.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" /> {dining.hours}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{dining.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" /> {dining.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 bg-primary/10 p-6 rounded-lg animate-slide-up" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-lg font-semibold mb-2">Meal Plans</h3>
                <p className="mb-4">We offer several meal plan options to fit different student needs and budgets:</p>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Unlimited Plan</span>
                    <span>Unlimited meals + $300 dining dollars</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">15 Meal Plan</span>
                    <span>15 meals per week + $400 dining dollars</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">10 Meal Plan</span>
                    <span>10 meals per week + $500 dining dollars</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">5 Meal Plan</span>
                    <span>5 meals per week + $600 dining dollars</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Student Organizations */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="section-title">Student Organizations</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            With over 200 student organizations, there's something for everyone to get involved with.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              category: "Academic & Professional",
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              examples: ["Pre-Law Society", "Marketing Club", "Engineering Student Association", "Future Educators"],
            },
            {
              category: "Cultural & Identity",
              icon: <Globe className="h-10 w-10 text-primary" />,
              examples: [
                "International Student Association",
                "Black Student Union",
                "Asian Cultural Society",
                "Pride Alliance",
              ],
            },
            {
              category: "Arts & Performance",
              icon: <Paintbrush className="h-10 w-10 text-primary" />,
              examples: ["Theater Group", "A Cappella Club", "Dance Ensemble", "Digital Arts Collective"],
            },
            {
              category: "Service & Advocacy",
              icon: <Heart className="h-10 w-10 text-primary" />,
              examples: ["Volunteer Corps", "Environmental Action", "Habitat for Humanity", "Mental Health Awareness"],
            },
            {
              category: "Sports & Recreation",
              icon: <Activity className="h-10 w-10 text-primary" />,
              examples: ["Intramural Sports", "Outdoor Adventure Club", "Yoga & Wellness", "Esports Team"],
            },
            {
              category: "Student Government",
              icon: <Users className="h-10 w-10 text-primary" />,
              examples: ["Student Senate", "Residence Hall Association", "Student Activities Board", "Class Councils"],
            },
            {
              category: "Media & Publications",
              icon: <Paintbrush className="h-10 w-10 text-primary" />,
              examples: ["Student Newspaper", "Literary Magazine", "Radio Station", "Film Society"],
            },
            {
              category: "Greek Life",
              icon: <Trophy className="h-10 w-10 text-primary" />,
              examples: ["Fraternities", "Sororities", "Professional Greek Organizations", "Service Fraternities"],
            },
          ].map((category, index) => (
            <Card
              key={index}
              className="hover-card animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary">•</span> {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link
                    href={`/campus-life/organizations#${category.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  >
                    Explore {category.category}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Recreation & Wellness */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <h2 className="section-title">Recreation & Wellness</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Facilities and programs to support your physical and mental well-being.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Recreation Center</CardTitle>
                  <CardDescription>State-of-the-art facilities for fitness and recreation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/images/banner1.jpg?height=300&width=500"
                      fill
                      alt="Recreation Center"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Features:</h3>
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Olympic-size swimming pool
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Basketball courts
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Indoor track
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Racquetball courts
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Cardio equipment
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Free weights
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Group fitness studios
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-primary">•</span> Rock climbing wall
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Hours:</h3>
                    <p className="text-sm">Monday - Friday: 6:00 AM - 11:00 PM</p>
                    <p className="text-sm">Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/campus-life/recreation">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Health & Wellness Services</CardTitle>
                  <CardDescription>Comprehensive support for your well-being</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="hover-card">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Heart className="h-5 w-5 text-primary mr-2" /> Health Center
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm">
                        <p>
                          Medical services including primary care, immunizations, lab testing, and health education.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Users className="h-5 w-5 text-primary mr-2" /> Counseling Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm">
                        <p>Individual and group counseling, crisis intervention, and mental health workshops.</p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Activity className="h-5 w-5 text-primary mr-2" /> Wellness Programs
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm">
                        <p>Fitness classes, nutrition counseling, stress management, and wellness coaching.</p>
                      </CardContent>
                    </Card>
                    <Card className="hover-card">
                      <CardHeader className="p-4">
                        <CardTitle className="text-base flex items-center">
                          <Coffee className="h-5 w-5 text-primary mr-2" /> Mindfulness Center
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 text-sm">
                        <p>Meditation spaces, yoga classes, and mindfulness training to promote mental well-being.</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Programs & Initiatives:</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span> Peer Health Educators
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span> Mental Health Awareness Week
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span> Stress-Less Programming
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span> Sleep Well Initiative
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 text-primary">•</span> Healthy Relationships Workshops
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/campus-life/health-wellness">Health & Wellness Resources</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Events */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="section-title">Campus Events & Traditions</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Annual events and cherished traditions that bring our community together.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Welcome Week",
              date: "August 20-26, 2025",
              icon: <Users className="h-8 w-8 text-primary" />,
              description:
                "A week-long celebration welcoming new and returning students with activities, information sessions, and community-building events.",
            },
            {
              title: "Homecoming Weekend",
              date: "October 17-19, 2025",
              icon: <Home className="h-8 w-8 text-primary" />,
              description:
                "A weekend of school spirit featuring the homecoming football game, alumni events, a parade, and the annual homecoming dance.",
            },
            {
              title: "International Festival",
              date: "November 8, 2025",
              icon: <Globe className="h-8 w-8 text-primary" />,
              description:
                "A celebration of our global community with cultural performances, international cuisine, exhibitions, and educational workshops.",
            },
            {
              title: "Winter Gala",
              date: "December 5, 2025",
              icon: <Music className="h-8 w-8 text-primary" />,
              description:
                "A formal evening event featuring performances by student music and dance groups, followed by a reception.",
            },
            {
              title: "Spring Festival",
              date: "April 18, 2025",
              icon: <Paintbrush className="h-8 w-8 text-primary" />,
              description:
                "An outdoor festival celebrating spring with live music, art installations, food vendors, and recreational activities.",
            },
            {
              title: "Commencement",
              date: "May 15, 2025",
              icon: <GraduationCap className="h-8 w-8 text-primary" />,
              description:
                "The culmination of the academic year, celebrating our graduating students with a ceremony, speakers, and special events.",
            },
          ].map((event, index) => (
            <Card
              key={index}
              className="hover-card animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center">
                    <span className="bg-primary/10 p-2 rounded-full mr-3">{event.icon}</span>
                    {event.title}
                  </CardTitle>
                </div>
                <CardDescription className="flex items-center mt-2">
                  <Calendar className="h-4 w-4 mr-1" /> {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/events/${event.title.toLowerCase().replace(/\s+/g, "-")}`}>Event Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button className="animate-slide-up" style={{ animationDelay: "0.8s" }} asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </section>

      {/* Student Support CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Student Support Services</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            academiauniversity offers comprehensive support services to help you succeed academically, professionally,
            and personally throughout your educational journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.2s" }} asChild>
              <Link href="/resources/academic-support">Academic Support</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.3s" }} asChild>
              <Link href="/resources/career">Career Services</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.4s" }} asChild>
              <Link href="/resources/accessibility">Accessibility Services</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.5s" }} asChild>
              <Link href="/resources/financial-aid">Financial Aid Office</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

