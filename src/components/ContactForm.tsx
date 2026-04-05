import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const ContactForm = ({ 
    title = "Send Us a Message", 
    subtitle = "Fill in your details and we'll get back to you within 24 hours",
    programName = "General Enquiry",
    className
}: { 
    title?: string, 
    subtitle?: string,
    programName?: string,
    className?: string
}) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init("S6UibsgFuWSmK343S");
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Phone validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(form.phone)) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }

        setIsSubmitting(true);

        // Append program name to the end of the message instead of the beginning
        const finalMessage = `${form.message}\n\n[Enquiry for: ${programName}]`;

        const templateParams = {
            name: form.name,
            phone: form.phone,
            email: form.email,
            message: finalMessage,
            program_name: programName,
        };

        emailjs
            .send(
                "service_3wddawj",
                "template_wvh7vxw",
                templateParams
            )
            .then((result) => {
                console.log("Email successfully sent!", result.status, result.text);
                toast.success("Enquiry sent successfully!");
                setSubmitted(true);
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                toast.error(`Failed to send email: ${error.text || "Unknown error"}`);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className={`bg-card border border-border rounded-xl p-6 md:p-8 ${className}`}>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            {subtitle && (
                <p className="text-muted-foreground text-sm mb-6">
                    {subtitle}
                </p>
            )}

            {submitted ? (
                <div className="text-center py-12">
                    <h4 className="text-lg font-bold mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground text-sm">
                        We'll get back to you soon. Thank you!
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium mb-1.5 block">
                            Your Name *
                        </label>
                        <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1.5 block">
                            Phone Number *
                        </label>
                        <input
                            required
                            type="tel"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            value={form.phone}
                            onChange={(e) => {
                                const val = e.target.value.replace(/[^0-9]/g, "");
                                if (val.length <= 10) {
                                    setForm({ ...form, phone: val });
                                }
                            }}
                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1.5 block">
                            Email
                        </label>
                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium mb-1.5 block">
                            Message *
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                            className="w-full bg-background border border-border rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
