import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, GraduationCap, Library, MapPin, Phone, Users } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg"
];

export default function Home() {
  console.log(images.length);
  
  return (
    <div className="flex min-h-screen flex-col">
    {/* Carousel Section */}
    <div className="relative w-full overflow-hidden h-[calc(100vh-2rem)]">
        <Carousel opts={{ loop: true }} className="relative w-full h-full">
          <CarouselPrevious />
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="relative w-full h-full">
              <Image src={src} alt={`Banner ${index + 1}`} width={1920} height={600} className="w-full h-[calc(100vh-2rem)] object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
  <div className="container relative z-20 mx-auto px-4 py-32 text-center md:py-48">
    <h1 className="mb-4 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
      Excellence in Education
    </h1>
    <p className="mx-auto mb-8 max-w-2xl text-lg text-black/90 md:text-xl">
      Empowering students to achieve academic excellence and personal growth in a supportive environment.
    </p>
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
      <Button size="lg" asChild>
        <Link href="/admissions">Apply Now</Link>
      </Button>
      <Button size="lg" variant="outline" className="bg-white/10 text-black hover:bg-white/20" asChild>
        <Link href="/campus-tour">Schedule a Visit</Link>
      </Button>
    </div>
  </div>


      {/* Quick Info Section */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Academic Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Offering a wide range of programs with experienced faculty and modern facilities.</p>
              </CardContent>
              <CardFooter>
                <Link href="/academics" className="text-sm text-primary hover:underline">
                  Explore Programs →
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Student Life</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Vibrant campus community with clubs, sports, and cultural activities for all interests.</p>
              </CardContent>
              <CardFooter>
                <Link href="/campus-life" className="text-sm text-primary hover:underline">
                  Discover Activities →
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Library className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Modern Facilities</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>State-of-the-art libraries, labs, and recreational spaces to enhance learning.</p>
              </CardContent>
              <CardFooter>
                <Link href="/facilities" className="text-sm text-primary hover:underline">
                  View Facilities →
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">About Our Institution</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 1985, our institution has been committed to providing quality education that prepares
                students for the challenges of tomorrow. With a focus on academic excellence, innovation, and character
                development, we strive to create a learning environment where every student can thrive.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our dedicated faculty, modern facilities, and comprehensive curriculum ensure that students receive a
                well-rounded education that equips them for success in their chosen fields.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/banner2.jpg?height=400&width=600" fill alt="Campus building" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Academic Programs</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our diverse range of programs designed to help you achieve your academic and career goals.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="certificate">Certificate</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Bachelor of Science</CardTitle>
                    <CardDescription>Computer Science, Biology, Mathematics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Four-year programs focusing on scientific principles and practical applications.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/undergraduate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Bachelor of Arts</CardTitle>
                    <CardDescription>English, History, Psychology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Four-year programs developing critical thinking and communication skills.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/undergraduate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="graduate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Master of Science</CardTitle>
                    <CardDescription>Data Science, Environmental Studies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Advanced programs preparing students for specialized careers or research.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/graduate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Master of Business Administration</CardTitle>
                    <CardDescription>Finance, Marketing, Management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive business education for aspiring leaders and entrepreneurs.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/graduate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="certificate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Certificates</CardTitle>
                    <CardDescription>Project Management, Digital Marketing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Short-term programs designed to build specific skills for career advancement.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/certificate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Certificates</CardTitle>
                    <CardDescription>Web Development, Cybersecurity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Focused technical training to prepare for in-demand technology careers.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      <Link href="/programs/certificate">View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Upcoming Events</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Stay connected with our community through various events and activities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Open House</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> April 15, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Explore our campus, meet faculty, and learn about our programs during this informative event.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" /> 10:00 AM - 2:00 PM
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Guest Lecture Series</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> May 5, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join us for an inspiring lecture by industry leaders on emerging trends in technology.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" /> 3:00 PM - 5:00 PM
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Alumni Networking Event</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> June 10, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Connect with alumni and build valuable professional relationships at this networking event.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" /> 6:00 PM - 8:00 PM
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Students Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from our students about their experiences at our institution.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Image
                    src="/images/banner2.jpg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="Student"
                    className="rounded-full mx-auto"
                  />
                </div>
                <p className="text-center italic mb-4">
                  "The supportive faculty and diverse learning opportunities have prepared me well for my career. I'm
                  grateful for the experiences I've had here."
                </p>
                <p className="text-center font-semibold">Sarah Johnson</p>
                <p className="text-center text-sm text-muted-foreground">Computer Science, Class of 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Image
                    src="/images/banner2.jpg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="Student"
                    className="rounded-full mx-auto"
                  />
                </div>
                <p className="text-center italic mb-4">
                  "The hands-on learning approach and research opportunities have been invaluable. I've grown both
                  academically and personally during my time here."
                </p>
                <p className="text-center font-semibold">Michael Chen</p>
                <p className="text-center text-sm text-muted-foreground">Biology, Class of 2023</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Image
                    src="/images/banner2.jpg?height=80&width=80"
                    width={80}
                    height={80}
                    alt="Student"
                    className="rounded-full mx-auto"
                  />
                </div>
                <p className="text-center italic mb-4">
                  "The vibrant campus community and extracurricular activities have made my college experience
                  unforgettable. I've made lifelong friends and connections."
                </p>
                <p className="text-center font-semibold">Emily Rodriguez</p>
                <p className="text-center text-sm text-muted-foreground">Business Administration, Class of 2025</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
              <p className="mb-8 text-muted-foreground">
                Have questions or need more information? We're here to help. Reach out to us using the contact form or
                the information below.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Education Avenue, Academic City, AC 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Office Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
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
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Admission Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

