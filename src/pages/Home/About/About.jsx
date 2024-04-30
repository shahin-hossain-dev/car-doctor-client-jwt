import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  flex-col md:flex-row">
        <div className="relative lg:w-1/2">
          <img src={person} className=" w-5/6 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2  absolute -bottom-10 right-10 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="font-bold text-2xl mb-6 text-orange-500">About Us</p>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
