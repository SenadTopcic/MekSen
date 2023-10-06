
import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuizBody from "../../components/QuizBody";

const QuizPage = () => {
  
  return (
    <>
      <section >
        <div className="headerPart">
          <Header />
        </div>
        <div className="bodyPart">
          <QuizBody />
        </div>
        <div className="footerPart">
         <Footer />
        </div>
      </section>
    </>
  )
};

export default QuizPage;


