import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Building,
  Calendar,
  Clock,
  MessageSquare,
  Phone,
  User,
  Mail,
  HelpCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/images/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Campus buildings"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We're here to answer your questions and help you connect with the right people.
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <h2 className="section-title">Get in Touch</h2>
            </div>
            <p className="mb-6 text-muted-foreground">
              Have a question or need more information? Fill out the form below, and a member of our team will get back
              to you as soon as possible.
            </p>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="first-name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="last-name"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-type" className="text-sm font-medium">
                  Inquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="inquiry-type"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="admission">Admission Information</option>
                  <option value="program">Academic Program</option>
                  <option value="financial">Financial Aid</option>
                  <option value="campus">Campus Visit</option>
                  <option value="housing">Housing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  placeholder="Please provide details about your inquiry..."
                  required
                ></textarea>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" /> Main Campus Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="not-italic">
                  <p>Angels school</p>
                  <p>123 Education Avenue</p>
                  <p>Academic City, AC 12345</p>
                  <p>United States</p>
                </address>
                <div className="mt-4 aspect-video relative rounded-md overflow-hidden border">
                  <Image
                    src="/images/banner1.jpg?height=300&width=500&text=Campus+Map"
                    fill
                    alt="Campus map"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/visit/campus-map">View Interactive Map</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" /> Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">General Inquiries</h3>
                  <p className="flex items-center text-sm mb-1">
                    <Phone className="h-4 w-4 mr-2" /> (123) 456-7890
                  </p>
                  <p className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2" /> info@Angels school.edu
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Admissions Office</h3>
                  <p className="flex items-center text-sm mb-1">
                    <Phone className="h-4 w-4 mr-2" /> (123) 456-7891
                  </p>
                  <p className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2" /> admissions@Angels school.edu
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Financial Aid</h3>
                  <p className="flex items-center text-sm mb-1">
                    <Phone className="h-4 w-4 mr-2" /> (123) 456-7892
                  </p>
                  <p className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2" /> finaid@Angels school.edu
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Office Hours</h3>
                  <p className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2" /> Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 text-primary mr-2" /> Connect with Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/admissions/schedule-visit">
                    <Calendar className="h-4 w-4 mr-2" /> Schedule a Campus Visit
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/chat">
                    <MessageSquare className="h-4 w-4 mr-2" /> Live Chat with an Advisor
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/contact/virtual-tour">
                    <Building className="h-4 w-4 mr-2" /> Take a Virtual Tour
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/news/newsletter">
                    <Mail className="h-4 w-4 mr-2" /> Subscribe to Newsletter
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Department Directory */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Building className="h-6 w-6 text-primary" />
              <h2 className="section-title">Department Directory</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find contact information for specific departments and offices.
            </p>
          </div>

          <Tabs defaultValue="academic" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic">Academic Departments</TabsTrigger>
              <TabsTrigger value="administrative">Administrative Offices</TabsTrigger>
              <TabsTrigger value="student">Student Services</TabsTrigger>
            </TabsList>

            <TabsContent value="academic" className="mt-6 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "School of Arts & Humanities",
                    phone: "(123) 456-7901",
                    email: "arts@Angels school.edu",
                  },
                  {
                    name: "School of Business",
                    phone: "(123) 456-7902",
                    email: "business@Angels school.edu",
                  },
                  {
                    name: "School of Education",
                    phone: "(123) 456-7903",
                    email: "education@Angels school.edu",
                  },
                  {
                    name: "School of Engineering",
                    phone: "(123) 456-7904",
                    email: "engineering@Angels school.edu",
                  },
                  {
                    name: "School of Health Sciences",
                    phone: "(123) 456-7905",
                    email: "health@Angels school.edu",
                  },
                  {
                    name: "School of Natural Sciences",
                    phone: "(123) 456-7906",
                    email: "science@Angels school.edu",
                  },
                ].map((dept, index) => (
                  <Card key={index} className="hover-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2" /> {dept.phone}
                      </p>
                      <p className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2" /> {dept.email}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link
                          href={`/departments/${dept.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                        >
                          Department Website
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="administrative" className="mt-6 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "Office of the President",
                    phone: "(123) 456-7920",
                    email: "president@Angels school.edu",
                  },
                  {
                    name: "Human Resources",
                    phone: "(123) 456-7921",
                    email: "hr@Angels school.edu",
                  },
                  {
                    name: "Finance Office",
                    phone: "(123) 456-7922",
                    email: "finance@Angels school.edu",
                  },
                  {
                    name: "Information Technology",
                    phone: "(123) 456-7923",
                    email: "it@Angels school.edu",
                  },
                  {
                    name: "Marketing & Communications",
                    phone: "(123) 456-7924",
                    email: "marketing@Angels school.edu",
                  },
                  {
                    name: "Facilities Management",
                    phone: "(123) 456-7925",
                    email: "facilities@Angels school.edu",
                  },
                ].map((dept, index) => (
                  <Card key={index} className="hover-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2" /> {dept.phone}
                      </p>
                      <p className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2" /> {dept.email}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/admin/${dept.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}>
                          Office Website
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="student" className="mt-6 animate-fade-in">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "Admissions Office",
                    phone: "(123) 456-7930",
                    email: "admissions@Angels school.edu",
                  },
                  {
                    name: "Financial Aid",
                    phone: "(123) 456-7931",
                    email: "finaid@Angels school.edu",
                  },
                  {
                    name: "Registrar's Office",
                    phone: "(123) 456-7932",
                    email: "registrar@Angels school.edu",
                  },
                  {
                    name: "Career Services",
                    phone: "(123) 456-7933",
                    email: "careers@Angels school.edu",
                  },
                  {
                    name: "Counseling Center",
                    phone: "(123) 456-7934",
                    email: "counseling@Angels school.edu",
                  },
                  {
                    name: "Student Housing",
                    phone: "(123) 456-7935",
                    email: "housing@Angels school.edu",
                  },
                ].map((dept, index) => (
                  <Card key={index} className="hover-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2" /> {dept.phone}
                      </p>
                      <p className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2" /> {dept.email}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/student-services/${dept.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          Service Website
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Find answers to common questions about contacting and visiting our university.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {[
            {
              q: "What's the best way to schedule a campus tour?",
              a: "You can schedule a campus tour online through our Visit page, by calling the Admissions Office at (123) 456-7891, or by emailing admissions@Angels school.edu.",
            },
            {
              q: "How do I find a specific faculty member's contact information?",
              a: "Faculty contact information can be found on the respective department websites. You can also search for faculty members using the directory search tool on our website.",
            },
            {
              q: "Is there parking available for visitors?",
              a: "Yes, visitor parking is available in designated lots across campus. Visitors can obtain a day pass from the campus security office or at the information kiosk at the main entrance.",
            },
            {
              q: "How do I contact the IT help desk for technical issues?",
              a: "The IT help desk can be reached at (123) 456-7923 or by emailing helpdesk@Angels school.edu. They are available Monday through Friday from 8:00 AM to 8:00 PM.",
            },
            {
              q: "Where should I direct media inquiries?",
              a: "Media inquiries should be directed to the Office of Marketing & Communications at (123) 456-7924 or media@Angels school.edu.",
            },
          ].map((faq, index) => (
            <Card key={index} className="hover-card">
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button variant="outline" asChild>
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Follow Us</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Connect with Angels school on social media to stay updated on news, events, and campus life.
          </p>
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-300">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-300">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-300">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-300">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-300">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

