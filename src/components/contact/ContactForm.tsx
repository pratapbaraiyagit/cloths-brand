"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitInquiry } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" className="w-full text-lg" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitInquiry, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors.message) {
      if (Object.keys(state.errors).length === 0) {
        toast({
          title: "Success!",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input id="fullName" name="fullName" placeholder="Jane Doe" />
        {state.errors?.fullName && <p className="text-sm text-destructive">{state.errors.fullName}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="jane.doe@example.com" />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="reason">Reason for Contact</Label>
        <Select name="reason" defaultValue="order">
          <SelectTrigger id="reason">
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="order">Order Inquiry</SelectItem>
            <SelectItem value="custom">Custom Design</SelectItem>
            <SelectItem value="feedback">Feedback</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message here..." rows={6} />
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message}</p>}
      </div>
      <SubmitButton />
       {state.message && Object.keys(state.errors).length > 0 && <p className="text-sm text-destructive text-center">{state.message}</p>}
    </form>
  );
}
