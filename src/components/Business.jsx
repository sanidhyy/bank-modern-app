import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

// Feature Card
const FeatureCard = ({ icon, title, content, index }) => (
     <section id="product" className={layout.sectionReverse}>
    {/* Left Side */}
    <div className={layout.sectionImgReverse}>
      {/* Background Image */}
      <img
        src={bill}
        alt="Billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    {/* Icon */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>

    {/* Info */}
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

// Business
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      {/* Section Info */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        {/* Get Started */}
        <Button styles="mt-10" />
      </div>

      {/* Features */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
