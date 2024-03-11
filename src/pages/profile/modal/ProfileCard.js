import React, { useEffect } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import "./ProfileCard.css";
import Icon1 from "../../../images/4022487.jpg"
import Icon2 from "../../../images/5052521.png"
import Icon3 from "../../../images/adaptive.png"
import Icon4 from "../../../images/metric_analytics_SEO_content1.jpg"
import Icon5 from "../../../images/newsvg2.png"
import Icon6 from "../../../images/svg2.png"


  const cardData = [{id:1, question:"What are your professional interests?", sentense:"Increase your chances to be found by an employer thanks to your professional interests.", icon:Icon1},
{id:2, question:"Short profile- Something is missing?", sentense:"Add your title, name and place of residence. This will be prefilled in your next applicaton", icon:Icon2},
{id:3, question:"What's your level of education?", sentense:"Add your education and you will see automatically if a job matches this criteria.", icon:Icon3},
{id:4, question:"Do you want to be found?", sentense:"Make your profile visible to be found by employers. Also possible anonymously!", icon:Icon4},
{id:5, question:"Your top 3 professional skills missing!", sentense:"Complete your 3 top skills and increase the chance of being contacted by employers.", icon:Icon5},
{id:6, question:"What's your highest position?", sentense:"Add your highest position and you'll see automatically if a job matches this criteria.", icon:Icon6}];

  function ProfileCard({ data }) {
    const calculateCompletionPercentage = () => {
      let completionCount = 0;
      if (Object.keys(data.personalDetails).length > 0) completionCount++;
      if (data.aboutUs) completionCount++;
      if (data.education.length > 0) completionCount++;
      if (data.experience.length > 0) completionCount++;
      if (data.skills.length > 0) completionCount++;

      //we have to divide cardData.length for 5 position  
      return (completionCount / 5) * 100;
    };

    const completionPercentage = calculateCompletionPercentage();
    const strokeDashoffset = 100 - completionPercentage;

    const swap = (card) => {
      if (!card) return;
  
      card.style.animation = "swap 700ms forwards";
  
      setTimeout(() => {
        card.style.animation = "";
        card.parentElement.prepend(card); // Prepend to the parent element, which is the stack
      }, 200);
    };
  
    useEffect(() => {
      const stack = document.querySelector(".stack");
      const cards = [...stack.children].reverse();
  
      cards.forEach((card) => stack.append(card));
    }, []);
  

    return (
      <div className="profile-card flex justify-evenly items-start md:items-center w-full h-[400px] md:h-[250px] border p-0 md:p-4 py-10 bg-blue-600 rounded-3xl shadow-lg mb-6 flex-col md:flex-row ">
        <div className='w-full h-28 md:w-1/4 ml-2 md:ml-10 mt-0 md:-mt-10 '>
          <div className=" float-left md:float-right flex flex-row md:flex-col items-center mr-8  ">
            <div className='relative h-20 md:h-28 w-20 md:w-28'>
            <svg className="h-20 md:h-full w-20 md:w-full" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-400" strokeWidth="2"></circle>
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white" strokeWidth="2" strokeDasharray="100" strokeDashoffset={strokeDashoffset} style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}></circle>
            </svg>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="text-center text-lg md:text-2xl font-bold text-white">{completionPercentage.toFixed(0)}%</span>
            </div>
            </div>
            <div className='w-full'>
            <p className='mt-2 text-sm   text-white text-center '>Oh, your profile needs your attention!</p>
            </div>
          </div>
        </div>
        <div className="mx-8 h-28 mt-28 w-3/4 md:w-full">
          {completionPercentage === 100 ? (
            <div className="bg-white h-[150px] w-[250px] md:w-[500px] shadow-xl text-blue-500 flex justify-center items-center text-2xl" >
              All sections are completed!
            </div>
          ) : (
              <div className="stack relative ">
              {cardData.length > 0 && cardData.map((data, index) => (
                <div key={index} className="card w-full md:w-[500px] ">
                  <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:m-2 md:p-2'>
                      <img src={data.icon} alt='icon' className='w-24 md:w-64 h-20 md:h-32 '/>
                    </div>
                    <div className='p-2'>
                      <h2 className='text-sm md:text-lg font-semibold text-blue-600 mb-2'>{data.question}</h2>
                      <p className='text-sm md:text-lg text-slate-800'>{data.sentense}</p>
                    </div>
                      
        
                  </div>
                  <IoCloseOutline 
                    className="text-blue-800 text-2xl cursor-pointer absolute right-3 top-2" 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent event bubbling up to the stack
                      swap(e.currentTarget.closest('.card'));
                    }}
                  />
                </div>
              ))}
            </div>
            )
                  }
        </div>
      </div>
    );
  }

  export default ProfileCard;
