import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Need to hire a developer? <br className='sm:block hidden' />
        Send me an email!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;