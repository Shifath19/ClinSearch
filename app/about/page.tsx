import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">About ClinSearch</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-center mb-8">
            ClinSearch is a cutting-edge platform designed to revolutionize the way researchers, healthcare
            professionals, and patients discover and analyze clinical trials worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2" /> Powerful Search
                </CardTitle>
              </CardHeader>
              <CardContent>
                Our advanced search algorithm allows users to quickly find relevant clinical trials based on conditions,
                interventions, and keywords.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="mr-2" /> Advanced Filtering
                </CardTitle>
              </CardHeader>
              <CardContent>
                Refine your search results with our comprehensive set of filters, including study phase, participant
                criteria, and study status.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="mr-2" /> Global Coverage
                </CardTitle>
              </CardHeader>
              <CardContent>
                Access clinical trials from around the world, with data sourced from ClinicalTrials.gov, ensuring a wide
                range of research opportunities.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2" /> Real-time Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                Stay informed with the latest clinical trial information, updated in real-time to provide you with the
                most current research opportunities.
              </CardContent>
            </Card>
          </div>
          <p className="text-center mt-8">
            Our mission is to accelerate medical research by connecting the right people with the right clinical trials.
            Whether you're a researcher looking for study participants, a healthcare professional seeking treatment
            options for your patients, or an individual interested in participating in a trial, ClinSearch is here to
            help you navigate the complex world of clinical research.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

