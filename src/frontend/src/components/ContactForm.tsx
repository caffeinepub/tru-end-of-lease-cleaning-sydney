import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceType } from "../backend.d";
import { useActor } from "../hooks/useActor";

interface ContactFormProps {
  compact?: boolean;
}

const SERVICE_OPTIONS = [
  {
    label: "End of Lease Cleaning",
    value: "End of Lease Cleaning",
    type: ServiceType.endOfLeaseClean,
  },
  {
    label: "Kitchen Cleaning",
    value: "Kitchen Cleaning",
    type: ServiceType.endOfLeaseClean,
  },
  {
    label: "Bathroom Cleaning",
    value: "Bathroom Cleaning",
    type: ServiceType.endOfLeaseClean,
  },
  {
    label: "Carpet Steam Cleaning",
    value: "Carpet Steam Cleaning",
    type: ServiceType.carpetClean,
  },
  {
    label: "Window Cleaning",
    value: "Window Cleaning",
    type: ServiceType.endOfLeaseClean,
  },
  {
    label: "Oven Cleaning",
    value: "Oven Cleaning",
    type: ServiceType.endOfLeaseClean,
  },
  { label: "Other", value: "Other", type: ServiceType.other },
];

// Encoded destination – never displayed in the UI
const getDestination = () => {
  const parts = ["humptydumptybondcleaning", "gmail.com"];
  return parts.join("@");
};

export default function ContactForm({ compact = false }: ContactFormProps) {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const service = SERVICE_OPTIONS.find(
        (s) => s.value === formData.serviceType,
      );
      const serviceType = service?.type ?? ServiceType.other;

      // 1. Submit to backend
      if (actor) {
        await actor.submitEnquiry(
          formData.name,
          formData.email,
          formData.phone,
          serviceType,
          formData.message,
        );
      }

      // 2. Open mailto from customer email
      const subject = encodeURIComponent(
        `New Enquiry from ${formData.name} - Tru End of Lease Cleaning Sydney`,
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\n\nMessage:\n${formData.message}`,
      );
      const destination = getDestination();
      window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;

      setSubmitted(true);
      toast.success("Enquiry sent! We'll get back to you shortly.");
    } catch (err) {
      console.error("Submit error:", err);
      // Still try mailto even if backend fails
      try {
        const subject = encodeURIComponent(
          `New Enquiry from ${formData.name} - Tru End of Lease Cleaning Sydney`,
        );
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceType}\n\nMessage:\n${formData.message}`,
        );
        const destination = getDestination();
        window.location.href = `mailto:${destination}?subject=${subject}&body=${body}`;
        setSubmitted(true);
        toast.success("Enquiry sent! We'll get back to you shortly.");
      } catch {
        toast.error(
          "Something went wrong. Please WhatsApp us on 0488 841 883.",
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 py-10 text-center"
        data-ocid="contact.form.success_state"
      >
        <CheckCircle2 className="h-14 w-14 text-green-500" />
        <h3 className="text-xl font-bold text-foreground">
          Thank you! We've received your enquiry.
        </h3>
        <p className="text-muted-foreground max-w-md">
          Our team will get back to you shortly. For a faster response, WhatsApp
          us on{" "}
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            0488 841 883
          </a>
          .
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              serviceType: "",
              message: "",
            });
          }}
          className="mt-2"
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div
        className={
          compact
            ? "grid grid-cols-1 gap-4"
            : "grid grid-cols-1 md:grid-cols-2 gap-4"
        }
      >
        <div className="space-y-1.5">
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input
            id="contact-name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            autoComplete="name"
            data-ocid="contact.form.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            autoComplete="email"
            data-ocid="contact.email.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-phone">Phone Number *</Label>
          <Input
            id="contact-phone"
            type="tel"
            placeholder="0400 000 000"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            required
            autoComplete="tel"
            data-ocid="contact.phone.input"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="contact-service">Service Type *</Label>
          <Select
            value={formData.serviceType}
            onValueChange={(val) => handleChange("serviceType", val)}
          >
            <SelectTrigger
              id="contact-service"
              data-ocid="contact.service.select"
            >
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent>
              {SERVICE_OPTIONS.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="contact-message">Message / Property Details</Label>
        <Textarea
          id="contact-message"
          placeholder="Tell us about your property – number of bedrooms, bathrooms, any special requirements..."
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={compact ? 3 : 5}
          data-ocid="contact.message.textarea"
        />
      </div>

      <Button
        type="submit"
        className="w-full font-semibold gap-2"
        disabled={submitting}
        data-ocid="contact.form.submit_button"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Get My Free Quote
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        We respond within 1 hour during business hours. Your information is kept
        private.
      </p>
    </form>
  );
}
