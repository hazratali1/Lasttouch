import { LucideIcon } from "lucide-react";
import { AnimatedOnScroll } from "@/components/ui/AnimatedOnScroll";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <AnimatedOnScroll className="exp-box group box-3d text-center flex flex-col items-center justify-center" delay={delay}>
      <div className="mb-4 text-[#14e0ff] group-hover:scale-110 transition-transform duration-300">
        <Icon size={40} />
      </div>
      <h3 className="text-[18px] font-semibold text-white mb-2">{title}</h3>
      <p className="text-[#cce8f0] text-[14px] opacity-90 leading-relaxed">{description}</p>
    </AnimatedOnScroll>
  );
};

export default ServiceCard;
