
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Package2 } from "lucide-react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing! We'll notify you when we launch.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-secondary border-none"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-coliteek-red hover:bg-coliteek-red/90"
        >
          {isSubmitting ? (
            "Submitting..."
          ) : (
            <>
              <Package2 className="mr-2 h-4 w-4" />
              Notify Me
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
