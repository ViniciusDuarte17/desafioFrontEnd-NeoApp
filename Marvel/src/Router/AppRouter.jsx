import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Home } from "../Page/Home";
import { ComicsDetail } from "../Page/ComicsDetail";
import { Cart } from "../Page/Cart";
import { PageNotFound } from "../Page/PageNotFound";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <TransitionGroup component={null}>
          <CSSTransition
            timeout={600}
            classNames="page"
            key={location.pathname}
          >
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/detalhes/:id" index element={<ComicsDetail />} />
              <Route path="/carrinho" index element={<Cart />} />
              <Route path="*" index element={<PageNotFound />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </>
  );
};
