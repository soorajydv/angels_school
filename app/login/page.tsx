import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { HelpCircle, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 animate-fade-in">
      <div className="container sm:mx-auto flex flex-col items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your academiauniversity account</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>
            <TabsContent value="student" className="mt-4 animate-fade-in">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl">Student Login</CardTitle>
                  <CardDescription>Access your student portal, courses, and academic resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">
                      <Mail className="h-4 w-4 inline-block mr-2" /> Email
                    </Label>
                    <Input
                      id="student-email"
                      placeholder="student@academiauniversity.edu"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="student-password">
                        <Lock className="h-4 w-4 inline-block mr-2" /> Password
                      </Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="student-password"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="student-remember" />
                    <label
                      htmlFor="student-remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full mb-4">Sign In</Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/admissions" className="text-primary hover:underline">
                      Apply Now
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="faculty" className="mt-4 animate-fade-in">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl">Faculty Login</CardTitle>
                  <CardDescription>Access faculty resources, course management, and research tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="faculty-email">
                      <Mail className="h-4 w-4 inline-block mr-2" /> Email
                    </Label>
                    <Input
                      id="faculty-email"
                      placeholder="faculty@academiauniversity.edu"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="faculty-password">
                        <Lock className="h-4 w-4 inline-block mr-2" /> Password
                      </Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="faculty-password"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="faculty-remember" />
                    <label
                      htmlFor="faculty-remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full mb-4">Sign In</Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact IT Support
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="staff" className="mt-4 animate-fade-in">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-xl">Staff Login</CardTitle>
                  <CardDescription>Access administrative systems and staff resources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="staff-email">
                      <Mail className="h-4 w-4 inline-block mr-2" /> Email
                    </Label>
                    <Input
                      id="staff-email"
                      placeholder="staff@academiauniversity.edu"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="staff-password">
                        <Lock className="h-4 w-4 inline-block mr-2" /> Password
                      </Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="staff-password"
                      placeholder="••••••••"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="staff-remember" />
                    <label
                      htmlFor="staff-remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col">
                  <Button className="w-full mb-4">Sign In</Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Need help?{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact IT Support
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-4 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Microsoft
              </Button>
            </div>
          </div>

          <div
            className="mt-4 px-8 text-center text-sm text-muted-foreground animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="h-4 w-4" />
              <span>Need Help?</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="/help/account-access" className="underline underline-offset-4 hover:text-primary">
                Account Access
              </Link>
              <Link href="/help/password-reset" className="underline underline-offset-4 hover:text-primary">
                Password Reset
              </Link>
              <Link href="/contact" className="underline underline-offset-4 hover:text-primary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

