import "./MainPage.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Counter from "../../Components/Counter/Counter";
import { Banner } from "../../Components/Banner/Banner";
import { StateProvider } from "../../Context";

export function MainPage() {
  return (
    <StateProvider>
      <Header />
      <Banner />
      <Counter />
      MainPage
      <Footer />
    </StateProvider>
  );
}
