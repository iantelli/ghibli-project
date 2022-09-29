import HeadComponent from "./HeadComponent";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <HeadComponent />
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
