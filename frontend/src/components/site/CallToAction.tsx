import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="call-to-action">
      <h2 className="call-to-action-title">
        How You Can Help
      </h2>

      <div className="cta-buttons">
        <button className="cta-button">
          Learn About Wildlife
        </button>

        <button className="cta-button">
          Volunteer With Us
        </button>

        <button className="cta-button">
          Follow Our Updates →
        </button>
      </div>
    </section>
  );
}