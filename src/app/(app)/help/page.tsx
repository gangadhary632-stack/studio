import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Mail, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I start a quiz?',
    answer:
      'Navigate to the "Quizzes" section from the sidebar. From there, you can see a list of available quiz categories. Click the "Start Quiz" button on the category you want to try.',
  },
  {
    question: 'How does the puzzle generator work?',
    answer:
      'Go to the "Puzzles" page. You can select a difficulty level from 1 to 10. Click the "Generate Puzzle" button, and our AI will create a unique puzzle for you to solve.',
  },
  {
    question: 'How is my score calculated on the leaderboard?',
    answer:
      'Your score is an aggregation of your performance in both quizzes and puzzles. Solving puzzles and answering quiz questions correctly will increase your total score. The higher the difficulty, the more points you can earn.',
  },
  {
    question: 'How can I change my profile information?',
    answer:
      'You can view your profile information on the "Profile" page. Currently, profile details are automatically synced from your authentication provider (like Google). The ability to manually edit profile information will be added in a future update.',
  },
   {
    question: 'What are rewards and how do I earn them?',
    answer:
      'The rewards system is a feature that is coming soon! It will allow you to earn badges and other digital prizes for your achievements in quizzes and puzzles. Keep an eye out for updates.',
  },
];

export default function HelpPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground">
          Find answers to common questions and get in touch with us.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-6 w-6" />
                <CardTitle>Frequently Asked Questions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                     <div className="flex items-center gap-2">
                        <Mail className="h-6 w-6" />
                        <CardTitle>Contact Us</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Have a question that isn't answered here? Reach out to our support team.
                    </p>
                    <a 
                        href="mailto:support@eduquest.com" 
                        className="mt-4 inline-block font-semibold text-primary hover:underline"
                    >
                        support@eduquest.com
                    </a>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
