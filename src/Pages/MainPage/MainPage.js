import "./MainPage.css";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import Counter from "../../Components/Counter/Counter";
import { StateProvider } from "../../Context";

export function MainPage() {
  return (
    <StateProvider>
      <Header />
      <Counter />
      MainPage
      <Footer />
    </StateProvider>
  );
}
