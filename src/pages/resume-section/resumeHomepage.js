import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./resumeHomepage.css"
import FeatureCard from './resume-dashboard/feature-card'
import GalleryCard3 from './resume-dashboard/gallery-card3'
import Question from './resume-dashboard/question'
import Design1 from '../../assets/svgs/design-1.jpg'
import Svg1 from "../../assets/svgs/newsvg2.png"
import Svg2 from "../../assets/svgs/adaptive.png"
import Section from '../../assets/svgs/dashboard.jpg'
import Section2 from '../../assets/svgs/section2.jpg'


const ResumeHomePage = () => {
  const navigate= useNavigate()

  async function handleCreateResume()
  {
    try
    {
      const userId = localStorage.getItem("jwtToken");
        if(userId!==null)
        {
          navigate('/choosetemplates')
        }
        else
        {
          navigate('/login')
        }
    }
    catch(err)
    {

    }
  }


  return (
    <div>
    <div className="home-container">

      
      <div className="home-hero">
        <div className="home-hero1 text-slate-900">
          <div className="home-container01 ">
            <h1 className="home-hero-heading heading1">
              Create an Impressive Resume
            </h1>
            <span className="home-hero-sub-heading">
              Stand out from the crowd with a professionally designed resume
            </span>
            <div className="home-btn-group">
              <button className="home-hero-button1 button" onClick={handleCreateResume}>Get Started</button>
              <button className="home-hero-button2 button text-slate-900 hover:border-slate-900">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container02">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Why Choose Our Resume Services?
            </h2>
            <span className="home-details-sub-heading">
              Our team of experts will help you create a resume that highlights
              your skills and experiences, increasing your chances of getting
              hired. With our professional templates and personalized guidance,
              you can make a lasting impression on employers.
            </span>
          </div>
          <div className='relative '>
          <img
            alt="image"
            src={Design1}
            className="home-details-image ml-10"
          />
          <img
            alt="image"
            src={Svg1}
            className="w-64 h-64 object-cover absolute -left-10 -bottom-14"
          />
          
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
        <div className='relative'>
              <img
                alt="image"
                src={Section2}
                className="home-details-image mr-10"
              />
              <img
                alt="image"
                src={Svg2}
                className="w-52 md:w-64 h-52 md:h-64 object-cover absolute -right-6 -bottom-16"
              />
          </div>
          <div className="home-container02 ml-14 mt-20 md:mt-0" >
            <span className="home-text sectionTitle">
              <span>Preparation</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Interview Preparation Assitance
            </h2>
            <span className="home-details-sub-heading">
              Our expert team provides comprehensive interview preparation assitance,
              equipping you with the skills and confidence to excel in any job interview. we
              offer mock interviews, personalized feedback, and tips on how to showcasee your
              strengths and answer challenging questions effectively. With our assitance, you can 
              feel prepared and ready to impress potential employers
            </span>
          <button className="home-hero-button3 button">View resoures</button>
          </div>
          
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container03">
              <span className="home-text03 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Impressive Features for Your Resume
              </h2>
              <span className="home-features-sub-heading">
                Stand out from the crowd with these powerful features that will
                help you create a compelling resume.
              </span>
            </div>
            <div className="home-container04">
              <FeatureCard
                Heading="Professional Templates"
                SubHeading="Choose from a variety of professionally designed resume templates to create a polished and professional resume."
              ></FeatureCard>
              <FeatureCard
                Heading="Customizable Sections"
                SubHeading="Easily customize and rearrange sections such as education, work experience, skills, and more to highlight your unique qualifications."
              ></FeatureCard>
              <FeatureCard
                Heading="Keyword Optimization"
                SubHeading="Optimize your resume with relevant keywords to increase your chances of getting noticed by employers and applicant tracking systems."
              ></FeatureCard>
              <FeatureCard
                Heading="Real-Time Editing"
                SubHeading="Make changes to your resume in real-time and see the updates instantly, ensuring your resume is always up-to-date."
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1">
          <div className="home-container05">
            <span className="home-text06 sectionTitle">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="home-pricing-heading heading2">
              Choose the Perfect Plan for You
            </h2>
            <span className="home-pricing-sub-heading">
              Unlock the full potential of your resume with our flexible pricing
              options
            </span>
          </div>
          <div className="home-container06">
            <div className="home-pricing-card">
              <div className="home-container07">
                <span className="home-text09 heading3">Free</span>
                <span className="home-free-plan-description">
                  Create a basic resume for free
                </span>
              </div>
              <div className="home-container08">
                <span className="home-text10">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container09">
                <div className="home-container10">
                  <span className="home-text13">✔</span>
                  <span className="home-free-plan-features">
                    Access to basic resume templates
                  </span>
                </div>
                <div className="home-container11">
                  <span className="home-text14">✔</span>
                  <span className="home-free-plan-features1">
                    Download and print your resume
                  </span>
                </div>
                <div className="home-container12">
                  <span className="home-text15">✔</span>
                  <span className="home-free-plan-features2">
                    Limited customization options
                  </span>
                </div>
                <div className="home-container13">
                  <span className="home-text16">✔</span>
                  <span className="home-free-plan-features3">
                    No customer support
                  </span>
                </div>
              </div>
              <button className="home-button button">Continue with Free</button>
            </div>
            <div className="home-pricing-card1">
              <div className="home-container14">
                <span className="home-text17 heading3">BASIC</span>
                <span className="home-basic-plan-description">
                  Upgrade to the Basic plan for additional features
                </span>
              </div>
              <div className="home-container15">
                <span className="home-text18">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">7</span>
                <span className="home-text21">/ month</span>
              </div>
              <div className="home-container16">
                <div className="home-container17">
                  <span className="home-text22">✔</span>
                  <span className="home-text23">All features of FREE plan</span>
                </div>
                <div className="home-container18">
                  <span className="home-text24">✔</span>
                  <span className="home-basic-plan-features">
                    Access to premium resume templates
                  </span>
                </div>
                <div className="home-container19">
                  <span className="home-text25">✔</span>
                  <span className="home-basic-plan-features1">
                    Unlimited customization options
                  </span>
                </div>
                <div className="home-container20">
                  <span className="home-text26">✔</span>
                  <span className="home-basic-plan-features2">
                    Priority customer support
                  </span>
                </div>
                <div className="home-container21">
                  <span className="home-text27">✔</span>
                  <span className="home-basic-plan-features3">
                    Download and print multiple resume versions
                  </span>
                </div>
              </div>
              <button className="home-button1 button">
                Try the Basic plan
              </button>
            </div>
            <div className="home-pricing-card2">
              <div className="home-container22">
                <span className="home-text28 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="home-pro-plan-description">
                  Get the Pro plan for the ultimate resume experience
                </span>
              </div>
              <div className="home-container23">
                <span className="home-text31">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">20</span>
                <span className="home-text34">/ month</span>
              </div>
              <div className="home-container24">
                <div className="home-container25">
                  <span className="home-text35">✔</span>
                  <span className="home-text36">
                     All features of BASIC plan
                  </span>
                </div>
                <div className="home-container26">
                  <span className="home-text37">✔</span>
                  <span className="home-pro-plan-features">
                    Access to all premium resume templates
                  </span>
                </div>
                <div className="home-container27">
                  <span className="home-text38">✔</span>
                  <span className="home-pro-plan-features1">
                    Advanced customization options
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text39">✔</span>
                  <span className="home-pro-plan-features2">
                    Expert review and feedback on your resume
                  </span>
                </div>
              </div>
              <button className="home-button2 button">Try the PRO plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">Resume Examples</h1>
          <span className="home-gallery-sub-heading">
            Browse through our collection of professionally designed resume
            examples
          </span>
          <div className="home-container29">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1517817748493-49ec54a32465?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1453946610176-6be21147c400?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1610926950541-fb98c47896d4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1488998427799-e3362cec87c3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1610926950565-29e4728c070b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1488998527040-85054a85150e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1616740793717-0aca29b92221?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1517971071642-34a2d3ecc9cd?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1550327149-f5aef60d38f9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1520569495996-b5e1219cb625?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1508780709619-79562169bc64?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMjgwODExNXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Unlock Your Potential
          </h1>
          <span className="home-banner-sub-heading">
            Discover the power of a well-crafted resume and land your dream job.
          </span>
          <button className="home-banner-button button">Learn More</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-faq-container">
          <div className="home-faq1">
            <div className="home-container30">
              <span className="home-text40 sectionTitle">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text43 heading2">Common questions</h2>
              <span className="home-text44">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container31">
              <Question
                Answer="Your resume should include your contact information, a summary or objective statement, your work experience, education, skills, and any relevant certifications or achievements."
                Question="What should I include in my resume?"
              ></Question>
              <Question
                Answer="Ideally, your resume should be one page long. However, if you have extensive work experience or relevant information to include, it can be two pages."
                Question="How long should my resume be?"
              ></Question>
              <Question
                Answer="In most cases, it is not necessary to include a photo on your resume unless you are applying for a job in which appearance is a crucial factor."
                Question="Should I include a photo on my resume?"
              ></Question>
              <Question
                Answer="Use a clean and professional format with clear headings and bullet points. Use a consistent font and font size throughout the document."
                Question="How should I format my resume?"
              ></Question>
              <Question
                Answer="Yes, it is recommended to customize your resume for each job application by highlighting relevant skills and experiences that match the job requirements."
                Question="Should I tailor my resume for each job application?"
              ></Question>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default ResumeHomePage;