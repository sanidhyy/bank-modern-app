import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
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

    {/* Right Side */}
    <div className={layout.sectionInfo}>
      {/* Info */}
      <h2 className={styles.heading2}>
        Easily control your
        <br className="sm:block hidden" /> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      {/* Download */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="App Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="Google Play Store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
