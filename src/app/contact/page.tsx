import { ContactForm } from "@/components/contact/ContactForm";
import { VectorBlobs } from "@/components/shared/VectorBlobs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-[calc(100vh-160px)] py-12 md:py-20 overflow-hidden">
      <VectorBlobs />
      <div className="container mx-auto px-4 md:px-6">
         <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We'd love to hear from you. Whether you have a question, feedback, or a custom request, our team is ready to help.
            </p>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
                <Card className="bg-card/80 backdrop-blur-sm p-4 md:p-8 shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl">Send us a Message</CardTitle>
                        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-2 space-y-8">
                <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-muted-foreground">contact@lunefemme.com</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p className="text-muted-foreground">+1 (234) 567-890</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                        <h3 className="font-semibold text-lg">Our Atelier</h3>
                        <p className="text-muted-foreground">123 Elegance Avenue, Paris, France</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
