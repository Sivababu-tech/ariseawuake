import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import { ReactNode } from "react";

interface EnquiryPopupProps {
  children: ReactNode;
  programName?: string;
}

const EnquiryPopup = ({ children, programName }: EnquiryPopupProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 border-none bg-transparent shadow-none">
        <DialogHeader className="sr-only">
            <DialogTitle>Enquire Now</DialogTitle>
        </DialogHeader>
        <ContactForm 
          title="Enquire Now" 
          subtitle="Interested in this programme? Send us a message and we'll help you get started." 
          programName={programName}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EnquiryPopup;
