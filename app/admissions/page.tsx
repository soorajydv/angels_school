import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  HelpCircle,
  Home,
  MapPin,
  PenTool,
  Users,
} from "lucide-react"

export default function AdmissionsPage() {
  return (
    <div className="flex min-h-screen flex-col animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <Image
          src="/images/banner1.jpg?height=500&width=1600"
          width={1600}
          height={500}
          alt="Students walking on campus"
          className="w-full h-[500px] object-cover absolute top-0 left-0"
        />
        <div className="page-header-content">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Join Our Community</h1>
          <p className="text-xl opacity-90 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Begin your journey at Angels School and transform your future.
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button size="lg" asChild>
              <Link href="#apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="/campus-tour">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-primary" />
            <h2 className="section-title">Why Choose Angels School</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Discover what sets us apart and why our university is the right choice for your education.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <GraduationCap className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Academic Excellence</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Our rigorous academic programs are taught by distinguished faculty who are leaders in their fields. With
                a student-to-faculty ratio of 15:1, you'll receive personalized attention and mentorship.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Users className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Diverse Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Join a vibrant community of students from 50+ countries and all walks of life. Our inclusive environment
                celebrates diversity and prepares students for success in a global society.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Home className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Modern Facilities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Study in state-of-the-art classrooms, labs, and libraries. Our recently renovated campus features the
                latest technology, comfortable housing options, and recreational facilities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <BookOpen className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Experiential Learning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Gain hands-on experience through internships, research opportunities, service learning, and study abroad
                programs that complement your classroom education.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <MapPin className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Prime Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Our campus is located in the heart of Academic City, providing easy access to cultural attractions,
                industry partners, internship opportunities, and recreational activities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <CardHeader className="flex flex-row items-center space-x-4">
              <DollarSign className="h-10 w-10 text-primary" />
              <div>
                <CardTitle>Financial Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                We're committed to making education accessible through a variety of scholarships, grants, and financial
                aid packages. Over 70% of our students receive some form of financial assistance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Admission Process */}
      <section id="apply" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="section-title">Admission Process</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Follow these steps to become part of our academic community.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="undergraduate" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="undergraduate">Undergraduate</TabsTrigger>
                <TabsTrigger value="graduate">Graduate</TabsTrigger>
                <TabsTrigger value="international">International</TabsTrigger>
              </TabsList>
              <TabsContent value="undergraduate" className="mt-6">
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Complete Online Application",
                      icon: <PenTool className="h-8 w-8 text-primary" />,
                      content:
                        "Fill out the online application form with your personal information, academic history, and extracurricular activities.",
                    },
                    {
                      step: 2,
                      title: "Submit Required Documents",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      content:
                        "Send your official high school transcripts, SAT/ACT scores, letters of recommendation, and personal statement.",
                    },
                    {
                      step: 3,
                      title: "Application Review",
                      icon: <CheckCircle className="h-8 w-8 text-primary" />,
                      content:
                        "Our admissions committee will review your complete application holistically, considering academic achievement, personal qualities, and potential contributions to our community.",
                    },
                    {
                      step: 4,
                      title: "Decision Notification",
                      icon: <Clock className="h-8 w-8 text-primary" />,
                      content:
                        "You'll receive an admission decision via email and mail. Early decision applicants will be notified by December 15, and regular decision by April 1.",
                    },
                  ].map((step, index) => (
                    <Card key={index} className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">{step.icon}</div>
                        <div>
                          <CardTitle className="flex items-center">
                            <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm mr-3">
                              {step.step}
                            </span>
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{step.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                    Start Undergraduate Application
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="graduate" className="mt-6">
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Complete Online Application",
                      icon: <PenTool className="h-8 w-8 text-primary" />,
                      content: "Fill out the online application form specific to your desired graduate program.",
                    },
                    {
                      step: 2,
                      title: "Submit Required Documents",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      content:
                        "Submit your bachelor's degree transcripts, GRE/GMAT scores (if required), letters of recommendation, statement of purpose, and CV/resume.",
                    },
                    {
                      step: 3,
                      title: "Department Review",
                      icon: <CheckCircle className="h-8 w-8 text-primary" />,
                      content:
                        "Your application will be reviewed by faculty in your program of interest, who will assess your academic background, research interests, and potential for success.",
                    },
                    {
                      step: 4,
                      title: "Interview (if required)",
                      icon: <Users className="h-8 w-8 text-primary" />,
                      content:
                        "Some programs require an interview as part of the admissions process. You'll be notified if this applies to your program.",
                    },
                    {
                      step: 5,
                      title: "Decision Notification",
                      icon: <Clock className="h-8 w-8 text-primary" />,
                      content:
                        "Admission decisions are typically made within 4-6 weeks after the application deadline.",
                    },
                  ].map((step, index) => (
                    <Card key={index} className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">{step.icon}</div>
                        <div>
                          <CardTitle className="flex items-center">
                            <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm mr-3">
                              {step.step}
                            </span>
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{step.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
                    Start Graduate Application
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="international" className="mt-6">
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Complete Online Application",
                      icon: <PenTool className="h-8 w-8 text-primary" />,
                      content:
                        "Fill out the online application form appropriate for your level of study (undergraduate or graduate).",
                    },
                    {
                      step: 2,
                      title: "Submit Required Documents",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      content:
                        "Submit academic records, standardized test scores (SAT/ACT or GRE/GMAT), English proficiency test scores (TOEFL/IELTS), letters of recommendation, and personal statement.",
                    },
                    {
                      step: 3,
                      title: "Financial Documentation",
                      icon: <DollarSign className="h-8 w-8 text-primary" />,
                      content:
                        "Provide financial statements showing sufficient funds to cover tuition and living expenses for the first year of study.",
                    },
                    {
                      step: 4,
                      title: "Application Review",
                      icon: <CheckCircle className="h-8 w-8 text-primary" />,
                      content:
                        "Our international admissions team will evaluate your application, considering academic achievements, test scores, and other factors.",
                    },
                    {
                      step: 5,
                      title: "I-20 Issuance",
                      icon: <FileText className="h-8 w-8 text-primary" />,
                      content: "If admitted, we'll issue an I-20 form needed to apply for your F-1 student visa.",
                    },
                    {
                      step: 6,
                      title: "Visa Application",
                      icon: <MapPin className="h-8 w-8 text-primary" />,
                      content: "Apply for an F-1 student visa at the U.S. embassy or consulate in your country.",
                    },
                  ].map((step, index) => (
                    <Card key={index} className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">{step.icon}</div>
                        <div>
                          <CardTitle className="flex items-center">
                            <span className="bg-primary text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center text-sm mr-3">
                              {step.step}
                            </span>
                            {step.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p>{step.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.8s" }}>
                    Start International Application
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center gap-2 justify-center mb-4">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="section-title">Application Deadlines</h2>
          </div>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Mark these important dates on your calendar to ensure your application is considered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Undergraduate Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Early Decision</span>
                  <span className="text-muted-foreground">November 1</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Early Action</span>
                  <span className="text-muted-foreground">November 15</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Regular Decision</span>
                  <span className="text-muted-foreground">January 15</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Transfer Students</span>
                  <span className="text-muted-foreground">March 1 (Fall) / October 1 (Spring)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle>Graduate Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Fall Semester</span>
                  <span className="text-muted-foreground">January 15</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Spring Semester</span>
                  <span className="text-muted-foreground">September 15</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Summer Session</span>
                  <span className="text-muted-foreground">March 1</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Doctorate Programs</span>
                  <span className="text-muted-foreground">December 1</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-card animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle>International Student Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Fall Semester</span>
                  <span className="text-muted-foreground">December 1</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">Spring Semester</span>
                  <span className="text-muted-foreground">August 1</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span className="font-medium">English Proficiency Tests</span>
                  <span className="text-muted-foreground">Same as application deadline</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span className="font-medium">Financial Documentation</span>
                  <span className="text-muted-foreground">Within 2 weeks after acceptance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tuition and Financial Aid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="flex items-center gap-2 justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
              <h2 className="section-title">Tuition & Financial Aid</h2>
            </div>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We're committed to making education affordable and accessible through various financial aid options.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6">2025-2026 Tuition Rates</h3>
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Undergraduate (Per Year)</span>
                      <span className="font-bold">$38,500</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Graduate (Per Year)</span>
                      <span className="font-bold">$42,000</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">MBA Program</span>
                      <span className="font-bold">$48,000</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Housing & Meals (Per Year)</span>
                      <span className="font-bold">$14,000</span>
                    </div>
                    <div className="flex justify-between p-4">
                      <span className="font-medium">Books & Supplies (Estimated)</span>
                      <span className="font-bold">$1,200</span>
                    </div>
                    <div className="flex justify-between p-4 bg-primary/5">
                      <span className="font-semibold">International Student Fee</span>
                      <span className="font-bold">$2,500</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-primary/10 text-sm">
                  <p>Note: Tuition and fees are subject to change. The Board of Trustees reviews rates annually.</p>
                </CardFooter>
              </Card>
            </div>

            <div className="animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6">Financial Aid Options</h3>
              <div className="space-y-6">
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Merit Scholarships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Awarded based on academic achievement, leadership, and special talents. Awards range from $5,000
                      to full tuition.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Need-Based Grants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Available to students who demonstrate financial need. Complete the FAFSA to be considered.</p>
                  </CardContent>
                </Card>
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Student Loans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Federal and private loan options to help finance your education. Our financial aid counselors can
                      help you understand your options.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>Work-Study Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      On-campus employment opportunities that allow you to earn money while gaining valuable work
                      experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="animate-slide-up" style={{ animationDelay: "0.5s" }} asChild>
              <Link href="/admissions/financial-aid">Financial Aid Calculator</Link>
            </Button>
          </div>
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
            Find answers to common questions about applying to Angels School.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {[
            {
              q: "What is the average GPA for admitted students?",
              a: "The middle 50% of admitted students have GPAs between 3.5 and 3.9 on a 4.0 scale. However, we evaluate applications holistically, considering factors beyond GPA.",
            },
            {
              q: "Are standardized tests required?",
              a: "For undergraduate admission, we have a test-optional policy. You may choose whether to submit SAT or ACT scores. For graduate programs, requirements vary by department.",
            },
            {
              q: "Can I apply for spring admission?",
              a: "Yes, we accept applications for spring admission for most programs. Check the specific deadlines on our website.",
            },
            {
              q: "How many letters of recommendation are required?",
              a: "For undergraduate applicants, we require two letters of recommendation, preferably from teachers who know you well. Graduate applicants typically need three letters.",
            },
            {
              q: "Is an interview required?",
              a: "Interviews are optional for undergraduate applicants but recommended. Some graduate programs require interviews as part of the application process.",
            },
            {
              q: "Can international students apply for financial aid?",
              a: "Yes, international students are eligible for merit-based scholarships. However, need-based financial aid is limited for international students.",
            },
            {
              q: "What is the acceptance rate?",
              a: "Our overall acceptance rate is approximately 22%, though this varies by program and application round.",
            },
            {
              q: "How do I check my application status?",
              a: "You can track your application status through our online portal using the credentials provided after submitting your application.",
            },
          ].map((faq, index) => (
            <Card
              key={index}
              className="hover-card animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-up">Still Have Questions?</h2>
          <p className="mx-auto max-w-2xl mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Our admissions counselors are here to help you navigate the application process and answer any questions you
            may have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.2s" }} asChild>
              <Link href="/contact">Contact Admissions</Link>
            </Button>
            <Button variant="secondary" className="animate-slide-up" style={{ animationDelay: "0.3s" }} asChild>
              <Link href="/admissions/virtual-counselor">Live Chat with a Counselor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

