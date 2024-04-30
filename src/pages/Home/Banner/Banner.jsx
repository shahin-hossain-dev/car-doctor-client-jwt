import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  const bannerBody = (
    <>
      <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151500] space-y-5 flex-col justify-center ps-12 md:ps-24 h-full text-white flex gap-5 left-0 top-0">
        <h1 className="text-5xl font-bold">
          Affordable <br />
          Price For <br /> Car Servicing
        </h1>
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="btn btn-warning me-5">Discover More</button>
          <button className="btn btn-outline text-white">Latest Project</button>
        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full h-[600px] rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item  relative w-full">
        <img src={img6} className="w-full object-cover object-top" />
        {bannerBody}
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
