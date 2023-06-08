import { useEffect, useState } from "react";
import Title from "../UI/Title";
import axios from "axios";

function Footer() {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);


  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3  ">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2 ">Location</span>
              </a>
              <a href={`tel:${footer?.phoneNumber}`}>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">
                  Call +90{footer?.phoneNumber}
                </span>
              </a>
              <a href={`mailto:${footer?.email}`}>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">{footer?.desc}
            </p>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">{footer?.openingHours?.day}</span>
              </div>
              <div>
                <span className="inline-block ml-2">am {footer?.openingHours?.hour} pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
}

export default Footer;