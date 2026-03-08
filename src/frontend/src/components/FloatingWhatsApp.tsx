import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/61488841883"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-ocid="floating.whatsapp.button"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-hero transition-transform hover:scale-110 active:scale-95 animate-pulse-soft"
      style={{ backgroundColor: "#25D366" }}
    >
      <SiWhatsapp className="h-7 w-7 text-white" />
    </a>
  );
}
