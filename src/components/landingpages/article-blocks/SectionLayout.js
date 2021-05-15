import React from "react";

const SectionLayout = (props) => {
  return (
    <section className="pt-6 pt-md-8">
      <div className="container">
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-9 col-xl-8">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionLayout;