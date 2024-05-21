import QuesAnsSection from '@/components/QuesAnsSection';
import { StarsCanvas } from '@/components/canvas';
// import ChatbotSection from '@/section/ChatbotSection';

const Chatbox = () => {
  return (
    <>
      <div className="relative z-0 h-[calc(100vh-54px)] flex items-center justify-center">
        {/* <ChatbotSection /> */}
        <QuesAnsSection />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Chatbox;
//
