import { Routes, Route } from "react-router";
import HomePage from "@/pages/home";
import ExplorePage from "@/pages/explore";
import HirePage from "@/pages/hire";
import PricingPage from "@/pages/pricing";
import SigninPage from "@/pages/auth";
import SignupPage from "@/pages/auth/signup";
import Callback from "@/pages/auth/callback";
import ResetPasswordPage from "@/pages/auth/reset";
import AssistantPage from "@/pages/dashboard";
import Layout from "@/pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="hire" element={<HirePage />} />
        <Route path="pricing" element={<PricingPage />} />
        {/* <Route path="guest" element={<Guest />} />
        <Route path="post" element={<Post />} /> */}
        <Route path="auth">
          <Route index element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="callback" element={<Callback />} />
          {/* <Route path="callback" element={<AuthCallback />} />
        <Route path="signout" element={<Signout />} /> */}
        </Route>
        <Route path="dashboard">
          <Route index element={<AssistantPage />} />
          {/* <Route path="signup" element={<SignupPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} /> */}
          {/* <Route path="callback" element={<AuthCallback />} />
        <Route path="signout" element={<Signout />} /> */}
        </Route>
      </Route>

      {/* <Route path="user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="callback" element={<AuthCallback />} />
        <Route path="signout" element={<Signout />} />
      </Route> */}
    </Routes>
  );
}

export default Router;
