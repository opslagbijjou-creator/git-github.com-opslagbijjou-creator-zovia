import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import OverOnsPage from "./pages/OverOnsPage";
import WerkgebiedPage from "./pages/WerkgebiedPage";
import WerkenBijOnsPage from "./pages/WerkenBijOnsPage";
import WerkwijzePage from "./pages/WerkwijzePage";
import ZorgaanbodPage from "./pages/ZorgaanbodPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
        <Route path="/zorgaanbod" element={<ZorgaanbodPage />} />
        <Route path="/werkwijze" element={<WerkwijzePage />} />
        <Route path="/werkgebied" element={<WerkgebiedPage />} />
        <Route path="/werken-bij-ons" element={<WerkenBijOnsPage />} />
        <Route path="/contact-zorg-aanvragen" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
