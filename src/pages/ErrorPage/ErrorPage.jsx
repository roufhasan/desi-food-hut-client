import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErroPage.css";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">
                  <span className="sr-only">Error</span> {status || 404}
                </h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2 text-5xl">Look like you're lost</h3>

                <p className="text-2xl">{error?.message}</p>

                <Link to="/" className="link_404 text-2xl">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
