import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, GraduationCap, Library, BookOpenCheck, Building, ScatterChart, Users } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Students in library"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Academic Programs</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Discover our diverse range of undergraduate and graduate programs designed to prepare you for success.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="section-title">Academic Excellence</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              At Angels school, we offer a comprehensive range of academic programs designed to challenge and
              inspire students. Our curriculum combines theoretical knowledge with practical skills, preparing graduates
              who are ready to make meaningful contributions in their fields.
            </p>
            <p className="mb-4 text-muted-foreground">
              With small class sizes, dedicated faculty, and innovative teaching methods, we provide a personalized
              educational experience that fosters critical thinking, creativity, and academic achievement.
            </p>
            <p className="mb-6 text-muted-foreground">
              Whether you're pursuing an undergraduate degree, graduate studies, or a professional certificate, Academia
              University provides the resources and support you need to achieve your academic and career goals.
            </p>
          </div>
          <div
            className="relative rounded-lg overflow-hidden h-[400px] animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/banner1.jpg?height=400&width=600"
              fill
              alt="Students in classroom"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="section-title">Our Programs</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore the wide range of academic programs available at Angels school.
            </p>
          </div>

          <Tabs defaultValue="undergraduate" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="graduate">Graduate</TabsTrigger>
              <TabsTrigger value="certificate">Certificate</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <BookOpenCheck />,
                    title: "Arts & Humanities",
                    programs: ["English", "History", "Philosophy", "Modern Languages"],
                  },
                  {
                    icon: <ScatterChart />,
                    title: "Science & Mathematics",
                    programs: ["Biology", "Chemistry", "Physics", "Mathematics"],
                  },
                  {
                    icon: <Building />,
                    title: "Business",
                    programs: ["Accounting", "Finance", "Marketing", "Management"],
                  },
                  {
                    icon: <Users />,
                    title: "Social Sciences",
                    programs: ["Psychology", "Sociology", "Political Science", "Economics"],
                  },
                  {
                    icon: <GraduationCap />,
                    title: "Education",
                    programs: ["Elementary Education", "Secondary Education", "Special Education"],
                  },
                  {
                    icon: <Library />,
                    title: "Engineering",
                    programs: ["Civil Engineering", "Computer Engineering", "Electrical Engineering"],
                  },
                ].map((category, index) => (
                  <Card
                    key={index}
                    className="hover-card animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="text-primary">{category.icon}</div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {category.programs.map((program, i) => (
                          <li key={i}>{program}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/academics/undergraduate#${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="graduate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <BookOpenCheck />,
                    title: "Master of Arts",
                    programs: ["English", "History", "Communication Studies"],
                  },
                  {
                    icon: <ScatterChart />,
                    title: "Master of Science",
                    programs: ["Data Science", "Computer Science", "Environmental Science"],
                  },
                  { icon: <Building />, title: "Business", programs: ["MBA", "Finance", "Marketing Analytics"] },
                  {
                    icon: <Users />,
                    title: "Social Sciences",
                    programs: ["Psychology", "Public Administration", "Social Work"],
                  },
                  {
                    icon: <GraduationCap />,
                    title: "Education",
                    programs: ["Educational Leadership", "Curriculum & Instruction"],
                  },
                  {
                    icon: <Library />,
                    title: "Ph.D. Programs",
                    programs: ["Computer Science", "Economics", "Psychology", "Engineering"],
                  },
                ].map((category, index) => (
                  <Card
                    key={index}
                    className="hover-card animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="text-primary">{category.icon}</div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {category.programs.map((program, i) => (
                          <li key={i}>{program}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/academics/graduate#${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="certificate" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <BookOpenCheck />,
                    title: "Business Certificates",
                    programs: ["Project Management", "Digital Marketing", "Data Analytics"],
                  },
                  {
                    icon: <ScatterChart />,
                    title: "Technology Certificates",
                    programs: ["Web Development", "Cybersecurity", "Cloud Computing"],
                  },
                  {
                    icon: <Building />,
                    title: "Healthcare Certificates",
                    programs: ["Healthcare Management", "Medical Coding", "Health Informatics"],
                  },
                  {
                    icon: <Users />,
                    title: "Education Certificates",
                    programs: ["TESOL", "Special Education", "Instructional Design"],
                  },
                ].map((category, index) => (
                  <Card
                    key={index}
                    className="hover-card animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="text-primary">{category.icon}</div>
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {category.programs.map((program, i) => (
                          <li key={i}>{program}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/academics/certificate#${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Details
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

      {/* Departments Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Building className="h-6 w-6 text-primary" />
            <h2 className="section-title">Academic Departments</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our academic departments are the foundation of the university's educational mission.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "School of Arts & Humanities",
            "School of Business",
            "School of Education",
            "School of Engineering",
            "School of Health Sciences",
            "School of Natural Sciences",
            "School of Social Sciences",
            "School of Computer & Information Sciences",
            "School of Law",
          ].map((department, index) => (
            <Card
              key={index}
              className="hover-card animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle>{department}</CardTitle>
                <CardDescription>
                  Department Chair: Dr.{" "}
                  {
                    [
                      "Sarah Johnson",
                      "Michael Chen",
                      "Robert Williams",
                      "Elena Garcia",
                      "David Wilson",
                      "Lisa Anderson",
                      "James Thompson",
                      "Maria Rodriguez",
                      "Thomas Clark",
                    ][index]
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {
                    [
                      "Exploring human culture through literature, languages, history, and philosophy.",
                      "Developing future business leaders with a foundation in management, finance, and entrepreneurship.",
                      "Preparing the next generation of educators with innovative teaching methodologies.",
                      "Creating solutions through technology, design, and practical application of scientific principles.",
                      "Advancing healthcare through research and professional training programs.",
                      "Discovering the underlying principles of our natural world through scientific inquiry.",
                      "Understanding human behavior and societal structures through research and analysis.",
                      "Pushing the boundaries of technology and information systems in the digital age.",
                      "Advocating for justice and preparing students for legal practice and research.",
                    ][index]
                  }
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link
                    href={`/academics/departments/${department.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  >
                    Department Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="section-title">Academic Calendar</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">Key dates and deadlines for the academic year.</p>
          </div>

          <Tabs defaultValue="fall" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="fall">Fall</TabsTrigger>
              <TabsTrigger value="spring">Spring</TabsTrigger>
              <TabsTrigger value="summer">Summer</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            </TabsList>
            <TabsContent value="fall" className="mt-6">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Fall Semester 2025</CardTitle>
                  <CardDescription>August - December</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">New Student Orientation</span>
                      <span className="text-muted-foreground">August 20-24</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Classes Begin</span>
                      <span className="text-muted-foreground">August 26</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Last Day to Add/Drop</span>
                      <span className="text-muted-foreground">September 2</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Fall Break</span>
                      <span className="text-muted-foreground">October 14-18</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Last Day to Withdraw</span>
                      <span className="text-muted-foreground">November 8</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Thanksgiving Break</span>
                      <span className="text-muted-foreground">November 27-29</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Final Exams</span>
                      <span className="text-muted-foreground">December 9-13</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span className="font-medium">Semester Ends</span>
                      <span className="text-muted-foreground">December 13</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="spring" className="mt-6">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Spring Semester 2026</CardTitle>
                  <CardDescription>January - May</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">New Student Orientation</span>
                      <span className="text-muted-foreground">January 8-10</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Classes Begin</span>
                      <span className="text-muted-foreground">January 13</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Last Day to Add/Drop</span>
                      <span className="text-muted-foreground">January 20</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Spring Break</span>
                      <span className="text-muted-foreground">March 9-13</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Last Day to Withdraw</span>
                      <span className="text-muted-foreground">April 3</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Final Exams</span>
                      <span className="text-muted-foreground">May 4-8</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Semester Ends</span>
                      <span className="text-muted-foreground">May 8</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span className="font-medium">Commencement</span>
                      <span className="text-muted-foreground">May 15</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="summer" className="mt-6">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Summer Session 2026</CardTitle>
                  <CardDescription>May - August</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Session A Begins</span>
                      <span className="text-muted-foreground">May 25</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Session A Ends</span>
                      <span className="text-muted-foreground">June 26</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Session B Begins</span>
                      <span className="text-muted-foreground">July 6</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span className="font-medium">Session B Ends</span>
                      <span className="text-muted-foreground">August 7</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-6">
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Upcoming Academic Events</CardTitle>
                  <CardDescription>Important dates to remember</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Academic Advising Week</span>
                      <span className="text-muted-foreground">April 5-9, 2025</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Registration for Fall 2025</span>
                      <span className="text-muted-foreground">April 12-23, 2025</span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span className="font-medium">Undergraduate Research Symposium</span>
                      <span className="text-muted-foreground">April 28, 2025</span>
                    </li>
                    <li className="flex justify-between pb-2">
                      <span className="font-medium">Honors Convocation</span>
                      <span className="text-muted-foreground">May 5, 2025</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <Button variant="outline" className="animate-slide-up" asChild>
              <Link href="/academics/calendar">Download Complete Academic Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Academic Resources</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Angels school provides a wealth of resources to support your academic journey, from tutoring services
            to research opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.2s" }} asChild>
              <Link href="/resources/library">Library Resources</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.3s" }} asChild>
              <Link href="/resources/tutoring">Tutoring Center</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.4s" }} asChild>
              <Link href="/resources/research">Research Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

