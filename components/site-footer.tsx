import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  Our History
                </Link>
              </li>
              <li>
                <Link href="/about/mission" className="text-muted-foreground hover:text-primary">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-muted-foreground hover:text-primary">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about/accreditation" className="text-muted-foreground hover:text-primary">
                  Accreditation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Academics</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/undergraduate" className="text-muted-foreground hover:text-primary">
                  Undergraduate Programs
                </Link>
              </li>
              <li>
                <Link href="/academics/graduate" className="text-muted-foreground hover:text-primary">
                  Graduate Programs
                </Link>
              </li>
              <li>
                <Link href="/academics/departments" className="text-muted-foreground hover:text-primary">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="text-muted-foreground hover:text-primary">
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Student Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/library" className="text-muted-foreground hover:text-primary">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/resources/career" className="text-muted-foreground hover:text-primary">
                  Career Services
                </Link>
              </li>
              <li>
                <Link href="/resources/health" className="text-muted-foreground hover:text-primary">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="/resources/housing" className="text-muted-foreground hover:text-primary">
                  Housing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <address className="not-italic text-muted-foreground mb-4">
              123 Education Avenue
              <br />
              Academic City, AC 12345
              <br />
              Phone: (123) 456-7890
              <br />
              Email: info@academiauniversity.edu
            </address>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} academiauniversity. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

