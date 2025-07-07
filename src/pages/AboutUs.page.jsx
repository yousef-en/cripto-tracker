import React from "react";
import aboutImg from "../assets/image/about.png";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-primary rounded-3 p-3">
          <h3>About Us</h3>
        </div>
        <div className="row align-items-center">
          <div className="col-12 col-md-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              perferendis nemo cum assumenda. Quaerat accusamus provident
              pariatur laudantium possimus sapiente perferendis deserunt
              architecto dolorum et molestiae magnam tenetur ipsum ea nam,
              consectetur quo aliquam. Laborum odio, in, quo molestiae earum
              dolor maiores impedit veniam odit natus ea consequatur similique
              dignissimos sunt exercitationem vel repudiandae dolore enim,
              facere sint quae soluta! A veritatis neque porro provident, nam
              debitis quos animi mollitia corrupti, vel voluptate ex fugiat
              consequuntur velit veniam, culpa maxime est. Soluta eum tempore
              natus possimus excepturi quia ea, est quidem, unde facere enim
              saepe dolores alias modi eveniet. Molestiae?
         
          </div>
          <div className="col-12 col-md-5 text-center">
            <img
              src={aboutImg}
              alt="about us"
              className="about-img img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

// import React from "react";
// import aboutImg from "../assets/image/about.png";
// import { FaBitcoin, FaChartLine, FaShieldAlt, FaUsers, FaRocket, FaHeart } from 'react-icons/fa';

// const AboutUsPage = () => {
//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="container">
//           <div className="row align-items-center min-vh-75">
//             <div className="col-lg-6">
//               <div className="hero-content" data-aos="fade-right">
//                 <h1 className="hero-title">
//                   درباره <span className="text-gradient">Crypto Tracker</span>
//                 </h1>
//                 <p className="hero-description">
//                   پلتفرم پیشرفته ردیابی ارزهای دیجیتال که به شما امکان نظارت بر بازارهای کریپتو را با دقت و سرعت بالا می‌دهد.
//                 </p>
//                 <div className="hero-stats">
//                   <div className="stat-item">
//                     <FaBitcoin className="stat-icon" />
//                     <span className="stat-number">100+</span>
//                     <span className="stat-label">ارز دیجیتال</span>
//                   </div>
//                   <div className="stat-item">
//                     <FaUsers className="stat-icon" />
//                     <span className="stat-number">10K+</span>
//                     <span className="stat-label">کاربر فعال</span>
//                   </div>
//                   <div className="stat-item">
//                     <FaChartLine className="stat-icon" />
//                     <span className="stat-number">24/7</span>
//                     <span className="stat-label">نظارت مداوم</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="hero-image" data-aos="fade-left">
//                 <img
//                   src={aboutImg}
//                   alt="Crypto Tracker"
//                   className="img-fluid rounded-4 shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="features-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="section-title" data-aos="fade-up">
//                 چرا <span className="text-gradient">Crypto Tracker</span>؟
//               </h2>
//             </div>
//           </div>
//           <div className="row g-4">
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaBitcoin />
//                 </div>
//                 <h3>قیمت‌های لحظه‌ای</h3>
//                 <p>دسترسی به قیمت‌های به‌روز شده ارزهای دیجیتال از سراسر جهان</p>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaChartLine />
//                 </div>
//                 <h3>نمودارهای پیشرفته</h3>
//                 <p>نمودارهای تعاملی برای تحلیل روند قیمت‌ها و تصمیم‌گیری بهتر</p>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaShieldAlt />
//                 </div>
//                 <h3>امنیت بالا</h3>
//                 <p>اطلاعات شما با بالاترین استانداردهای امنیتی محافظت می‌شود</p>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaRocket />
//                 </div>
//                 <h3>سرعت بالا</h3>
//                 <p>عملکرد سریع و بهینه برای تجربه کاربری بی‌نظیر</p>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaUsers />
//                 </div>
//                 <h3>جامعه کاربری</h3>
//                 <p>انجمن فعال کاربران برای تبادل تجربیات و اطلاعات</p>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="600">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <FaHeart />
//                 </div>
//                 <h3>طراحی کاربرپسند</h3>
//                 <p>رابط کاربری زیبا و آسان برای استفاده در تمام دستگاه‌ها</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mission Section */}
//       <div className="mission-section">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-6" data-aos="fade-right">
//               <h2 className="section-title">ماموریت ما</h2>
//               <p className="mission-text">
//                 هدف ما ارائه ابزارهای قدرتمند و قابل اعتماد برای سرمایه‌گذاران ارزهای دیجیتال است. 
//                 ما معتقدیم که دسترسی به اطلاعات دقیق و به‌موقع حق هر سرمایه‌گذار است.
//               </p>
//               <div className="mission-points">
//                 <div className="mission-point">
//                   <div className="point-icon">✓</div>
//                   <span>دقت بالا در اطلاعات</span>
//                 </div>
//                 <div className="mission-point">
//                   <div className="point-icon">✓</div>
//                   <span>به‌روزرسانی مداوم</span>
//                 </div>
//                 <div className="mission-point">
//                   <div className="point-icon">✓</div>
//                   <span>پشتیبانی 24/7</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6" data-aos="fade-left">
//               <div className="mission-image">
//                 <div className="gradient-card">
//                   <h3>آینده ارزهای دیجیتال</h3>
//                   <p>ما در حال ساخت آینده‌ای بهتر برای تجارت ارزهای دیجیتال هستیم</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;