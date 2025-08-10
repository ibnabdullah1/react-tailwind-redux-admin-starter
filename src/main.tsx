import "@fortawesome/fontawesome-free/css/all.min.css";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { store } from "./redux/features/store";
import router from "./routes/routes";

const config = {
  token: {
    colorPrimary: "#ff4778",
    colorLink: "#ff4778",
    colorPrimaryBg: "#ff477830",
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={config}>
      <HelmetProvider>
        <Provider store={store}>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <RouterProvider router={router} />
        </Provider>
      </HelmetProvider>
    </ConfigProvider>
  </React.StrictMode>
);
