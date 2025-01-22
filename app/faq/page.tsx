import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is ClinSearch?</AccordionTrigger>
            <AccordionContent>
              ClinSearch is a powerful search tool designed to help researchers, healthcare professionals, and patients
              find and analyze clinical trials from around the world. It provides an easy-to-use interface for searching
              through thousands of clinical trials, offering advanced filtering options and real-time access to the
              latest medical research opportunities.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I search for clinical trials?</AccordionTrigger>
            <AccordionContent>
              You can search for clinical trials by entering a condition, disease, or intervention in the search bar on
              the homepage. You can also use the "Popular Conditions" section to quickly select common conditions. After
              searching, you can further refine your results using filters for study phase, participant sex, age group,
              study status, and study type.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where does the clinical trial data come from?</AccordionTrigger>
            <AccordionContent>
              ClinSearch retrieves data from ClinicalTrials.gov, a database of privately and publicly funded clinical
              studies conducted around the world. This ensures that the information provided is up-to-date and
              comprehensive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I participate in a clinical trial I find on ClinSearch?</AccordionTrigger>
            <AccordionContent>
              ClinSearch provides information about clinical trials, but participation eligibility and enrollment are
              determined by the individual study teams. If you find a trial you're interested in, you should contact the
              study team directly using the information provided in the trial details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is the information on ClinSearch regularly updated?</AccordionTrigger>
            <AccordionContent>
              Yes, ClinSearch retrieves information from ClinicalTrials.gov in real-time when you perform a search. This
              ensures that you always have access to the most current information available about clinical trials.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <Footer />
    </div>
  )
}

