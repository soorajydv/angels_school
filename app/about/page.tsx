import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, History, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/images/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Campus panorama"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">About academiauniversity</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Discover our rich history, mission, values, and the people who make our institution exceptional.
          </p>
        </div>
      </div>

      {/* Our History Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 mb-4">
              <History className="h-6 w-6 text-primary" />
              <h2 className="section-title">Our History</h2>
            </div>
            <p className="mb-4 text-muted-foreground">
              Founded in 1985, academiauniversity began as a small college with just three departments and 200
              students. Our founders envisioned an institution that would provide accessible, quality education to all
              students, regardless of background.
            </p>
            <p className="mb-4 text-muted-foreground">
              Over the decades, we've grown into a comprehensive university with multiple campuses, offering a wide
              range of undergraduate and graduate programs across numerous disciplines. Through economic changes and
              educational reforms, we've remained committed to our founding principles.
            </p>
            <p className="mb-4 text-muted-foreground">
              Today, academiauniversity stands as a beacon of educational excellence, with over 15,000 students from 50
              countries, a distinguished faculty, and state-of-the-art facilities that support our academic mission.
            </p>
          </div>
          <div
            className="relative rounded-lg overflow-hidden h-[400px] animate-slide-in-right"
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/banner1.jpg?height=400&width=600"
              fill
              alt="Historical campus building"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="section-title">Mission & Vision</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Guiding principles that shape our institution and its future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  academiauniversity is dedicated to educational excellence, innovative research, and community
                  engagement. We strive to create a supportive and inclusive learning environment where students develop
                  the knowledge, skills, and values needed to excel in their professions and contribute meaningfully to
                  society.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be a leading institution recognized globally for academic excellence, cutting-edge research, and
                  graduates who are prepared to address the complex challenges of our world with knowledge, integrity,
                  and compassion.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Striving for the highest standards in teaching, research, and all our endeavors.</p>
              </CardContent>
            </Card>

            <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Diversity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Embracing and celebrating differences in perspectives, experiences, and backgrounds.</p>
              </CardContent>
            </Card>

            <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle>Integrity</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>Upholding ethical principles and fostering a culture of honesty and accountability.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="section-title">Our Leadership</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Meet the dedicated individuals who guide our institution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Card
              key={index}
              className="hover-card animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 relative w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-primary/20">
                  <Image
                    src={`/images/banner1.jpg?height=128&width=128&text=Leadership+${index}`}
                    width={128}
                    height={128}
                    alt={`Leadership member ${index}`}
                    className="rounded-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-xl font-semibold mb-1">
                  Dr.{" "}
                  {
                    [
                      "Jane Smith",
                      "Michael Johnson",
                      "Sarah Williams",
                      "Robert Chen",
                      "Elena Rodriguez",
                      "David Wilson",
                    ][index - 1]
                  }
                </h3>
                <p className="text-center text-primary font-medium mb-3">
                  {
                    [
                      "President",
                      "Provost",
                      "Dean of Students",
                      "Chief Financial Officer",
                      "Dean of Admissions",
                      "Director of Research",
                    ][index - 1]
                  }
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Ph.D. in{" "}
                  {
                    [
                      "Educational Leadership",
                      "Economics",
                      "Psychology",
                      "Business Administration",
                      "Higher Education",
                      "Computer Science",
                    ][index - 1]
                  }{" "}
                  with over {15 + index} years of experience in higher education.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="section-title">Accreditation</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our commitment to maintaining the highest standards of educational quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <p className="mb-4">
                academiauniversity is proud to be accredited by the Higher Education Accreditation Commission (HEAC), a
                recognition of our commitment to academic excellence and continuous improvement.
              </p>
              <p className="mb-4">
                Additionally, our individual programs have received specialized accreditations from relevant
                professional organizations, ensuring that our curriculum meets industry standards and prepares students
                for successful careers.
              </p>
              <p className="mb-6">
                We regularly undergo rigorous evaluation processes to maintain our accreditation status and to identify
                opportunities for enhancement across all aspects of our institution.
              </p>
              <div className="flex flex-wrap gap-4">
                <Image
                  src="/images/banner1.jpg?height=80&width=200&text=HEAC"
                  width={200}
                  height={80}
                  alt="HEAC Accreditation"
                  className="object-contain border rounded-md p-2 bg-white"
                />
                <Image
                  src="/images/banner1.jpg?height=80&width=200&text=ABET"
                  width={200}
                  height={80}
                  alt="ABET Accreditation"
                  className="object-contain border rounded-md p-2 bg-white"
                />
                <Image
                  src="/images/banner1.jpg?height=80&width=200&text=AACSB"
                  width={200}
                  height={80}
                  alt="AACSB Accreditation"
                  className="object-contain border rounded-md p-2 bg-white"
                />
              </div>
            </div>

            <Tabs
              defaultValue="undergraduate"
              className="w-full animate-slide-in-right"
              style={{ animationDelay: "0.3s" }}
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="graduate">Graduate</TabsTrigger>
              </TabsList>
              <TabsContent value="undergraduate" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Undergraduate Program Accreditations</CardTitle>
                    <CardDescription>Specific accreditations for our bachelor degree programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>Engineering: Accreditation Board for Engineering and Technology (ABET)</li>
                      <li>Business: Association to Advance Collegiate Schools of Business (AACSB)</li>
                      <li>Education: Council for the Accreditation of Educator Preparation (CAEP)</li>
                      <li>Nursing: Commission on Collegiate Nursing Education (CCNE)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="graduate" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Graduate Program Accreditations</CardTitle>
                    <CardDescription>Specific accreditations for our advanced degree programs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5">
                      <li>MBA: Association to Advance Collegiate Schools of Business (AACSB)</li>
                      <li>Psychology: American Psychological Association (APA)</li>
                      <li>Law: American Bar Association (ABA)</li>
                      <li>Medicine: Liaison Committee on Medical Education (LCME)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Experience Our Campus</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            The best way to understand what makes academiauniversity special is to visit our beautiful campus. Schedule
            a tour today to see our facilities, meet faculty, and experience student life firsthand.
          </p>
          <Button size="lg" variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.2s" }} asChild>
            <Link href="/campus-tour">Schedule a Campus Tour</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

