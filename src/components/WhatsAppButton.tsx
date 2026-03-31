import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "9876543210"; // 👉 your number
  const message = "Hello, I want more information";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
        <FaWhatsapp size={26} />
      </div>
    </a>
  );
};

export default WhatsAppButton;