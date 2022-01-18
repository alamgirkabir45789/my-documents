/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "reactstrap";
import profileImage from "../../../assets/images/AlamgirSmallSizePP.jpg";
import "../../../css/About.css";
const About = () => {
  return (
    <Card className="m-3 p-2 mb-5">
      {/* container start */}
      <div className="container">
        {/* header start */}
        <header>
          <img className="profile-image" src={profileImage} alt />
          <div className="header-bio">
            <h1>Alamgir Kabir</h1>
            <h3>Web Developer</h3>
          </div>
          <div className="header-contact">
            <p>
              <a href="mailto:alamgirkabir45789@gmail.com">
                Email: alamgirkabir45789@gmail.com
              </a>
            </p>
            <p>
              <a href="#">Website: Alamgir's Documentary</a>
            </p>
            <p>
              <a href="tel:+881745425498">Phone: +881745425498</a>
            </p>
          </div>
        </header>
        {/* header end */}
        {/* div clear */}
        <div className="clear-div" />
        <hr />
        {/* main start */}
        <main>
          {/* personal section start */}
          <section id="personal-section">
            <div className="content">
              <div className="left-div">
                <h3>Personal Information</h3>
              </div>
              <div className="right-div">
                <div className="grid-div">
                  <div>
                    <p>
                      <span>Father's Name:</span>Late Sakender Ali
                    </p>

                    <p>
                      <span>PresentAddress:</span>Al-Falah housing sociery,2 No
                      Gate,Chittagong
                    </p>

                    <p>
                      <span>Gender:</span>Male
                    </p>

                    <p>
                      <span>Nationality: </span>Bangladeshi
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>Mother's Name:</span>Late Nurjahan
                    </p>

                    <p>
                      <span>Permanent Address:</span>Village &
                      Post:Jhikra,P.S:Bagmara.District:Rajshahi
                    </p>

                    <p>
                      <span>Blood Group: </span> O(+)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* personal section end */}
          {/* div clear */}
          <div className="clear-div" />
          <hr className="common-hr" />
          {/* work experience section start */}
          <section id="work-section">
            <div className="content">
              <div className="left-div">
                <h3>Work Experience</h3>
              </div>
              <div className="right-div">
                <h3>Jr. Software Developer</h3>
                <h5>June 2021-January 2022</h5>
              </div>
            </div>
          </section>
          {/* work experience section end */}
          {/* div clear */}
          <div className="clear-div" />
          <hr className="common-hr" />
          {/* key skills section start */}
          <section id="skill-section">
            <div className="content">
              <div className="left-div">
                <h3>Key Skill</h3>
              </div>
              <div className="right-div">
                <div className="flex-div">
                  <div>
                    <p>Html</p>
                    <p>CSS3</p>
                    <p>Bootstrap</p>
                    <p>Javascript</p>
                  </div>
                  <div>
                    <p>ReactJS</p>
                    <p>Angular</p>
                    <p>AngularJS</p>
                    <p>NodeJS</p>
                  </div>
                  <div>
                    <p>ASP.NET</p>
                    <p>ASP.NET CORE</p>
                    <p>ASP.NET WEB API</p>
                    <p>ASP.NET MVC</p>
                  </div>
                  <div>
                    <p>XML</p>
                    <p>UML</p>
                    <p>MSSQL</p>
                    <p>C#</p>
                  </div>
                </div>
                {/* <h3>Web </h3>
                <h5>June 2021-January 2022</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  eligendi, pariatur alias optio ex doloremque totam libero
                  minus repudiandae. Perspiciatis reprehenderit saepe ipsam quo
                  magni hic recusandae maxime harum soluta!
                </p> */}
              </div>
            </div>
          </section>
          {/* key skills section end */}
          {/* div clear */}
          <div className="clear-div" />
          <hr className="common-hr" />
          {/* education section start */}
          <section id="education-section">
            <div className="content">
              <div className="left-div">
                <h3>Education</h3>
              </div>
              <div className="right-div">
                <div className="edu-div-left">
                  <h4> Enterprise System Analysis & Design (C#.NET)</h4>
                  <h6>IsDB-BISEW IT Scholarship Programme</h6>
                </div>
                <div className="edu-div-right">
                  <h4> KAMIL (Tafsir)</h4>
                  <h5>Islamic University</h5>
                  <p>
                    <strong className="mr-5">GPA 3.90</strong>
                    <span> 2012-2013</span>
                  </p>
                  <p></p>

                  {/* <span>
                    <strong>Round-44 </strong>
                    <span> Sept-2019 to March-2021</span>
                  </span> */}
                </div>
              </div>
            </div>
          </section>
          {/* education section end */}
          {/* div clear */}
          <div className="clear-div" />
          <hr className="common-hr" />
          {/* awards section start */}

          {/* <section id="awards-section">
            <div className="content">
              <div className="left-div">
                <h3>Honors and Awards</h3>
              </div>
              <div className="right-div">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita nobis sed adipisci quibusdam maiores, suscipit quam
                  quis eligendi porro ratione, reprehenderit veritatis iure
                  similique illo cumque optio quod incidunt beatae.
                </p>
              </div>
            </div>
          </section> */}

          {/* reference section end */}
          {/* div clear */}

          {/* <div className="clear-div" />
          <hr className="common-hr" /> */}

          {/* reference section start */}
          <section id="reference-section">
            <div className="content">
              <div className="left-div">
                <h3>Reference</h3>
              </div>
              <div className="right-div">
                <div className="edu-div-left">
                  <h4> Syed Zahidul Hassan</h4>
                  <h5>
                    Consultant (IDB-BISEW IT Scholarship Project) Show & Tell
                    Consulting Ltd.
                  </h5>
                  <p>Phone: +88 01535-110014</p>{" "}
                  <p>Email: zahid@showtellconsulting.com </p>
                </div>
                <div className="edu-div-right">
                  <h4>Md Mayeen Uddin</h4>
                  <h5>Training Manager</h5>
                  <p>New Vision Information Technology</p>{" "}
                  <p>Phone: +88 01914-894657</p>
                  <p>Email: mayeen@nvit.com.bd</p>
                </div>
              </div>
            </div>
          </section>
          {/* reference section end */}
          {/* div clear */}

          {/* 
          <div className="clear-div" />
          <hr className="common-hr" /> */}
        </main>
        {/* main end */}
        {/* footer start */}

        {/* 
        <footer className="footer-container">
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Website</a>
          <p>Copyright © Alamgir Kabir 2022</p>
        </footer> */}

        {/* footer end */}
      </div>
      {/* container end */}
    </Card>
  );
};

export default About;
