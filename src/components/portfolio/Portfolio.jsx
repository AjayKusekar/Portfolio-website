import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Crypto App",
    img: "/crypto.png",
    desc: "Crypto Web is a web application developed with ReactJS that empowers users to explore the exciting world of cryptocurrencies..",

  },
  {
    id: 2,
    title: "Mi Store Clone",
    img: "/MIstore.png",
    desc: "MI Store Clone Web is a web application crafted with ReactJS and Bootstrap, offering users an immersive experience resembling the official MI (Xiaomi) online store. This project showcases the integration of modern frontend technologies to recreate the look and feel of the MI Store, providing users with a familiar and visually appealing shopping interface..",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    img: "/Airbnb.png",
    desc: "Welcome to the Full Stack Airbnb Clone built with Next.js 13! This comprehensive web application utilizes a stack of cutting-edge technologies, including React, Tailwind CSS for design and animations, Prisma for database management, MongoDB for data storage, and NextAuth for authentication. Dive into a seamless and visually stunning experience, reminiscent of the popular Airbnb platform..",
  },
  {
    id: 4,
    title: "TIC-TAC-TOE GAME",
    img: "/TICTACTOE.png",
    desc: "Welcome to the classic TIC-TAC-TOE game! This interactive and engaging web application is built using HTML for structure, CSS for styling, and JavaScript for the game logic. Enjoy the timeless fun of TIC-TAC-TOE with a clean and intuitive user interface.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://github.com/AjayKusekar" target="Window"><button>Gtihub Profile</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Some Projects By me</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
