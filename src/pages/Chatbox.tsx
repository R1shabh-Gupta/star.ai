import { StarsCanvas } from '@/components/canvas';
import ChatbotSection from '@/section/ChatbotSection';

const Chatbox = () => {
  return (
    <>
      <div className="relative z-0">
        <ChatbotSection />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Chatbox;
