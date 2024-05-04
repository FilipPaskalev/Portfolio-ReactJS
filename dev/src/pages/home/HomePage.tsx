import "./home-page.scss";
import Navigation from "../../components/navigation/Navigation";

const HomePage = () => {
  const navMessage: string[] = [
    "Hi, there and Welcome",
    "This is my portfolio page!",
  ];
  return (
    <>
      <Navigation message={navMessage} />
      <p>Home page</p>
      <p>
        Ullamco consequat quis tempor exercitation labore est sit ullamco
        voluptate occaecat. Sint eu fugiat voluptate sunt do laborum mollit
        reprehenderit. Veniam in proident consequat laboris consectetur commodo.
      </p>
    </>
  );
};

export default HomePage;
