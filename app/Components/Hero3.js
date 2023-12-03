import React from 'react';

const Hero3 = ({ children }) => {
  return (
    <div className="bg-orange-700 min-h-[100vh] pt-[100px] flex flex-col justify-start items-center">
      <div className="w-full lg:w-4/5">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          {/* Left Section */}
          <div className="text-white p-8 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl space-x-5">
            <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-4">
              Key Highlights of Our Train the Trainer Course:
            </h2>
            <p className="text-gray-200 text-sm sm:text-md md:text-lg">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  Comprehensive Training Approach: Delve into the A-Z of effective training techniques, models, and strategies to ensure a true and lasting impact on your audience.
                </li>
                <li>
                  Adaptable to Your Needs: Whether you're spearheading induction training for your company or aiming to deliver engaging sessions to your team, our program is flexible and can be adapted to suit your specific requirements.
                </li>
                <li>
                  Skill Enhancement: Learn how to meticulously plan, expertly deliver, and thoughtfully evaluate your training sessions, ensuring a successful and enriching learning experience.
                </li>
                <li>
                  Audience Engagement Mastery: Acquire the skills to keep your audience engaged, motivated, and actively participating throughout your training sessions.
                </li>
                <li>
                  Optimal Learning Environment: Discover the secrets to creating a successful learning environment that fosters knowledge retention and application.
                </li>
                <li>
                  Evaluation Techniques: Uncover key evaluation training techniques to continuously improve and refine your training delivery.
                </li>
                <li>
                  Best Practice Framework: Depart with a clear best practice framework that serves as a guide for producing high-quality training sessions catering to diverse learning styles.
                </li>
              </ol>
              Empower your trainers or managers with the tools and insights they need to excel in delivering impactful training sessions. Elevate the training experience for your team, and watch as they develop the skills to excel in their roles.
              Invest in effective training – Invest in success!
            </p>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/3">
            <img
              src="/chonk_hero_image.jpg"  // Replace with the actual path to your image
              alt="Chonk Revolution"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
