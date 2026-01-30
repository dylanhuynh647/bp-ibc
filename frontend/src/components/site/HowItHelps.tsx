import './HowItHelps.css';
import HelpCard from "./HelpCard";

import leafIcon from "../../assets/leaf.svg";
import pawIcon from "../../assets/paw.svg";
import leftHand from "../../assets/heart_hand_left.svg";
import rightHand from "../../assets/heart_hand_right.svg";

export default function HowItHelps() {
  return (
    <section className="how-it-helps">
      <h2 className="how-it-helps-title">
        How Itty Bitty Critters Helps
      </h2>

      <div className="help-cards-grid">
        <HelpCard
          icon={leafIcon}
          title="Wildlife Education"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu"
        />

        <HelpCard
          icon={pawIcon}
          title="Guidance & Support"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu"
        />

        <HelpCard
          icon={
            <div className="hand-icon">
              <img src={leftHand} alt="" />
              <img src={rightHand} alt="" />
            </div>}
          title="Community Awareness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh eu"
        />
      </div>
    </section>
  );
}