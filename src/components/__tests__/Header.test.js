import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId("logo");
  console.log(logo);
  expect(logo.src).toBe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24i4oXCkzDVcR9YLgx230GGWwxsm_SeWjwQ&usqp=CAU"
  );
  //check if logo is loaded
});
test("online status should be green on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlinestatus = header.getByTestId("online-status");

  expect(onlinestatus.innerHTML).toBe("🟢");
  //check if logo is loaded
});

test("cart should have 0 items on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("0");
  //check if logo is loaded
});
