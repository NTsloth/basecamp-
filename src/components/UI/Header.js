import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header = ({ categories }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 1200) {
      setVisibleCategories([]);
    } else if (windowWidth < 768) {
      setVisibleCategories(categories.slice(0, 1));
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      setVisibleCategories(categories.slice(0, 2));
    } else if (windowWidth >= 1024 && windowWidth < 1400) {
      setVisibleCategories(categories.slice(0, 3));
    } else {
      setVisibleCategories(categories.slice(0, 4));
    }
  }, [categories, windowWidth]);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div
      className={`flex items-center text-white ${styles.header}`}
      style={{ background: "#FFF" }}
    >
      <div className="flex items-center space-x-4">
        <svg
          style={{ marginRight: "32px", zIndex: "99" }}
          width="165"
          height="40"
          viewBox="0 0 165 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1719_258)">
            <path
              d="M40.3041 13.3926H46.0691C49.2625 13.3926 50.9205 14.702 50.9205 17.1606V17.2831C50.966 18.0036 50.7514 18.7165 50.3158 19.2921C49.8801 19.8678 49.2524 20.268 48.5466 20.42C49.3918 20.4944 50.1735 20.8991 50.722 21.5464C51.2705 22.1937 51.5415 23.0312 51.4763 23.8771V23.9619C51.4763 26.6466 49.7147 28.0596 46.3329 28.0596H40.3041V13.3926ZM45.5322 19.412C47.1336 19.412 47.7648 18.8374 47.7648 17.528V17.4432C47.7648 16.2186 47.0677 15.6628 45.5134 15.6628H43.5446V19.4309L45.5322 19.412ZM45.8148 25.7517C47.4539 25.7517 48.1981 25.0075 48.1981 23.6793V23.5945C48.1981 22.238 47.4539 21.5504 45.6547 21.5504H43.5446V25.7611L45.8148 25.7517Z"
              fill="#1D2D35"
            />
            <path
              d="M52.343 25.0735C52.343 22.5678 54.6321 21.6258 57.9197 21.6258H59.1255V21.2019C59.1255 19.9301 58.7393 19.2331 57.3828 19.2331C57.1632 19.207 56.9406 19.2261 56.7287 19.2893C56.5168 19.3525 56.3201 19.4584 56.1507 19.6005C55.9812 19.7426 55.8427 19.9178 55.7435 20.1155C55.6444 20.3131 55.5867 20.5289 55.5741 20.7497H52.7481C52.9365 18.2063 54.943 17.0759 57.5712 17.0759C60.1994 17.0759 62.0551 18.1403 62.0551 21.0511V28.0408H59.1632V26.7503C58.8002 27.2616 58.3109 27.6702 57.743 27.936C57.175 28.2018 56.5478 28.3158 55.9227 28.2669C53.9821 28.2669 52.343 27.3249 52.343 25.0735ZM59.1255 24.2916V23.3496H57.9762C56.2524 23.3496 55.2538 23.7264 55.2538 24.8663C55.2538 25.6481 55.7249 26.1662 56.8082 26.1662C58.1175 26.2039 59.1255 25.4786 59.1255 24.2916Z"
              fill="#1D2D35"
            />
            <path
              d="M63.3078 24.6779H66.0773C66.1998 25.6199 66.6708 26.2039 67.9613 26.2039C69.1106 26.2039 69.6475 25.7706 69.6475 25.0264C69.6475 24.2822 69.007 23.9808 67.4715 23.7641C64.6455 23.3308 63.5151 22.5112 63.5151 20.42C63.5151 18.3287 65.5686 17.0759 67.7541 17.0759C70.1374 17.0759 71.9177 17.9425 72.1815 20.4011H69.4591C69.299 19.5157 68.7997 19.1106 67.7823 19.1106C66.765 19.1106 66.2657 19.5628 66.2657 20.2127C66.2657 20.8627 66.7744 21.1548 68.3287 21.3808C71.0134 21.7671 72.4924 22.4453 72.4924 24.7438C72.4924 27.0423 70.8156 28.2669 67.9802 28.2669C65.1447 28.2669 63.4114 26.9952 63.3078 24.6779Z"
              fill="#1D2D35"
            />
            <path
              d="M73.2554 22.8127V22.6525C73.2197 21.9163 73.3373 21.1807 73.6007 20.4924C73.8641 19.804 74.2677 19.1779 74.7857 18.6536C75.3038 18.1293 75.9251 17.7184 76.6103 17.4468C77.2955 17.1752 78.0296 17.0489 78.7662 17.0758C81.5357 17.0758 83.9943 18.6961 83.9943 22.5301V23.3496H76.2981C76.3735 25.13 77.3437 26.1756 78.9546 26.1756C80.3299 26.1756 81.0081 25.5822 81.1965 24.6778H84.0226C83.674 26.9952 81.8277 28.2857 78.898 28.2857C75.6104 28.2669 73.2554 26.2416 73.2554 22.8127ZM81.1023 21.5221C81.0081 19.9019 80.1792 19.1671 78.7662 19.1671C78.13 19.1641 77.5175 19.4078 77.0573 19.8469C76.597 20.2861 76.3249 20.8865 76.2981 21.5221H81.1023Z"
              fill="#1D2D35"
            />
            <path
              d="M84.7762 22.8126V22.6524C84.7403 21.9146 84.8584 21.1774 85.1229 20.4877C85.3875 19.798 85.7927 19.1709 86.3128 18.6463C86.833 18.1218 87.4566 17.7113 88.144 17.4409C88.8315 17.1705 89.5676 17.0461 90.3058 17.0758C92.7926 17.0758 95.0817 18.1591 95.3549 21.2394H92.5289C92.5101 20.975 92.4383 20.7171 92.3179 20.481C92.1975 20.2448 92.0308 20.0353 91.8279 19.8649C91.6249 19.6944 91.3897 19.5665 91.1363 19.4887C90.8829 19.4108 90.6165 19.3848 90.3529 19.4119C88.8174 19.4119 87.7906 20.5612 87.7906 22.6148V22.7749C87.7906 24.9321 88.7326 26.0342 90.4188 26.0342C90.7057 26.0507 90.993 26.01 91.264 25.9144C91.535 25.8188 91.7842 25.6702 91.9973 25.4773C92.2103 25.2845 92.3828 25.0512 92.5048 24.791C92.6268 24.5308 92.6958 24.2489 92.7079 23.9618H95.3926C95.2324 26.5052 93.3861 28.2668 90.2681 28.2668C87.15 28.2668 84.7762 26.3168 84.7762 22.8126Z"
              fill="#1D2D35"
            />
            <path
              d="M96.0804 25.0735C96.0804 22.5677 98.3695 21.6257 101.648 21.6257H102.863V21.2018C102.863 19.9301 102.467 19.233 101.12 19.233C100.899 19.2042 100.675 19.2212 100.46 19.2832C100.246 19.3451 100.047 19.4505 99.8757 19.5928C99.7041 19.7352 99.5638 19.9114 99.4635 20.1104C99.3632 20.3095 99.305 20.5271 99.2926 20.7497H96.4666C96.655 18.2062 98.6615 17.0758 101.28 17.0758C103.899 17.0758 105.774 18.1403 105.774 21.0511V28.0408H102.882V26.7502C102.519 27.2616 102.029 27.6702 101.461 27.936C100.894 28.2018 100.266 28.3158 99.6412 28.2669C97.7572 28.2669 96.0804 27.3249 96.0804 25.0735ZM102.863 24.2916V23.3496H101.732C100.009 23.3496 99.0006 23.7264 99.0006 24.8662C99.0006 25.6481 99.481 26.1662 100.564 26.1662C101.893 26.2039 102.901 25.4785 102.901 24.2916H102.863Z"
              fill="#1D2D35"
            />
            <path
              d="M107.865 17.283H110.832V18.9221C111.156 18.3398 111.632 17.8566 112.209 17.5247C112.787 17.1927 113.444 17.0245 114.11 17.0381C114.746 16.9873 115.381 17.1432 115.921 17.4827C116.461 17.8222 116.876 18.3271 117.106 18.9221C117.501 18.3312 118.039 17.8491 118.669 17.5199C119.3 17.1908 120.003 17.0251 120.714 17.0381C122.701 17.0381 124.237 18.291 124.237 21.1358V28.0031H121.288V21.5032C121.288 20.1279 120.676 19.5156 119.602 19.5156C119.316 19.5032 119.031 19.5525 118.767 19.6603C118.502 19.7681 118.263 19.9317 118.067 20.1401C117.872 20.3484 117.723 20.5966 117.632 20.8676C117.541 21.1386 117.509 21.4261 117.539 21.7105V28.0407H114.581V21.5032C114.581 20.1279 113.95 19.5156 112.904 19.5156C112.618 19.5018 112.332 19.5501 112.066 19.6572C111.8 19.7644 111.56 19.9278 111.363 20.1363C111.166 20.3449 111.017 20.5935 110.925 20.8652C110.834 21.1369 110.802 21.4253 110.832 21.7105V28.0407H107.865V17.283Z"
              fill="#1D2D35"
            />
            <path
              d="M126.272 17.283H129.248V18.9692C129.603 18.3795 130.104 17.8916 130.704 17.5532C131.303 17.2148 131.98 17.0373 132.668 17.0381C135.296 17.0381 137.378 18.9881 137.378 22.53V22.6996C137.378 26.2415 135.371 28.2292 132.668 28.2292C131.98 28.2574 131.298 28.0967 130.695 27.7646C130.092 27.4324 129.592 26.9415 129.248 26.3451V31.6957H126.272V17.283ZM134.326 22.5583C134.326 20.3822 133.261 19.3178 131.764 19.3178C130.266 19.3178 129.145 20.4011 129.145 22.5583V22.7184C129.145 24.8662 130.172 25.9118 131.792 25.9118C133.412 25.9118 134.326 24.8191 134.326 22.7561V22.5583Z"
              fill="#1D2D35"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.2801 8.27279C9.92121 8.27279 5.56197 15.3529 3.12123 22.273C2.82618 23.1095 1.90886 23.5485 1.07233 23.2534C0.474007 23.0424 0.0790706 22.513 0.0106243 21.9226C-0.0166257 21.6875 0.00787313 21.4427 0.0918888 21.2045C2.56842 14.183 7.62924 5.06055 18.2801 5.06055C23.8472 5.06055 27.832 8.74358 30.4092 13.1683C32.9931 17.6046 34.3707 23.0978 34.6812 27.533C34.7035 27.8518 34.6302 28.17 34.4707 28.4469C32.9782 31.0377 30.4952 32.726 27.6649 33.7601C24.8416 34.7917 21.5711 35.2131 18.293 35.2142C15.5078 35.2576 12.746 34.7002 10.1956 33.5799C7.64117 32.4578 5.35912 30.7974 3.5054 28.7123C3.11105 28.2687 2.99348 27.6438 3.19966 27.0872L3.20087 27.0839L3.20318 27.0778L3.21103 27.0568L3.23947 26.9818C3.26399 26.9176 3.29953 26.8256 3.34533 26.7097C3.43687 26.478 3.56972 26.15 3.73769 25.7575C4.07216 24.9759 4.55267 23.9225 5.12988 22.859C5.6995 21.8095 6.39995 20.6812 7.18764 19.7922C7.90573 18.9818 9.02189 17.9946 10.4505 17.9849L10.4614 17.9848C11.4709 17.9848 12.3002 18.4471 12.8971 18.8914C13.4988 19.3393 14.0452 19.9085 14.483 20.3719C14.5333 20.425 14.5821 20.4768 14.6296 20.5272C15.0374 20.9595 15.3493 21.2902 15.6456 21.5378C15.6789 21.5657 15.7094 21.5902 15.7374 21.6118C15.8337 21.5134 15.9487 21.3843 16.081 21.2202C16.5518 20.6366 17.0805 19.8146 17.5922 18.9345C18.0971 18.066 18.5567 17.1911 18.8917 16.5293C19.0587 16.1996 19.1934 15.9253 19.2859 15.7346C19.3321 15.6392 19.3677 15.5649 19.3915 15.5151L19.418 15.4592L19.4243 15.4458L19.4256 15.443C19.8022 14.6399 20.7586 14.2937 21.5617 14.6701C22.3649 15.0466 22.7108 16.0029 22.3343 16.8061L22.3308 16.8135L22.3225 16.8312L22.2916 16.8963C22.2649 16.9524 22.226 17.0335 22.1763 17.136C22.077 17.3408 21.934 17.6318 21.7576 17.9803C21.4059 18.675 20.9158 19.6088 20.3692 20.549C19.8294 21.4775 19.2047 22.4641 18.5813 23.237C18.2721 23.6203 17.9216 24.0037 17.5426 24.3051C17.2076 24.5716 16.6166 24.9651 15.8591 24.9651C14.8574 24.9651 14.0682 24.4058 13.5858 24.0027C13.1311 23.6228 12.677 23.1399 12.2954 22.7343C12.2451 22.6808 12.196 22.6286 12.1483 22.5781C11.696 22.0995 11.3263 21.7267 10.9789 21.4681C10.6745 21.2414 10.519 21.2042 10.4744 21.1982C10.4744 21.1982 10.4712 21.1994 10.4684 21.2004C10.4193 21.2177 10.1242 21.3217 9.59183 21.9226C9.03982 22.5455 8.47504 23.4296 7.95311 24.3913C7.43877 25.3389 7.00141 26.2956 6.6909 27.0212C6.65088 27.1147 6.61309 27.2041 6.57763 27.2889C7.99118 28.6974 9.65537 29.8341 11.4875 30.6389C13.6186 31.575 15.9266 32.04 18.2539 32.0021L18.2801 32.0019C21.3184 32.0019 24.1944 31.6082 26.5625 30.743C28.7412 29.947 30.4031 28.7868 31.4362 27.2467C31.0861 23.2996 29.8289 18.5544 27.6334 14.785C25.3357 10.84 22.2178 8.27279 18.2801 8.27279ZM15.4733 21.84C15.4733 21.84 15.4803 21.8347 15.4938 21.8278C15.48 21.8372 15.4733 21.84 15.4733 21.84Z"
              fill="#1D2D35"
            />
          </g>
          <rect x="162.5" y="4" width="2" height="32" rx="1" fill="#F0F4F5" />
          <defs>
            <clipPath id="clip0_1719_258">
              <rect width="137.5" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {windowWidth >= 1200 && (
        <div className="flex items-center space-x-8">
          {visibleCategories.map((category, index) => (
            <a
              key={category}
              href="#"
              className="hover:text-gray-800"
              style={{ color: "#657178" }}
            >
              {category}
            </a>
          ))}
          {categories.length > 3 && (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{ color: "#657178" }}
                className="hover:text-gray-300 flex align-center justify-center "
              >
                სხვა
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5303 8.96967C16.8232 9.26256 16.8232 9.73744 16.5303 10.0303L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L7.46967 10.0303C7.17678 9.73744 7.17678 9.26256 7.46967 8.96967C7.76256 8.67678 8.23744 8.67678 8.53033 8.96967L12 12.4393L15.4697 8.96967C15.7626 8.67678 16.2374 8.67678 16.5303 8.96967Z"
                    fill="#657178"
                  />
                </svg>
              </button>
              {isDropdownVisible && (
                <div className="absolute bg-white w-80 shadow-lg rounded mt-2">
                  {categories
                    .slice(visibleCategories.length)
                    .map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        {category}
                      </a>
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div
        className={`flex items-center space-x-4 ${styles.searchcontent}`}
        style={{ marginLeft: "auto", marginRight: "0px" }}
      >
        <svg
          style={{
            width: "32px",
            height: "32px",
            padding: "8.5px",
            borderRadius: "50%",
            background: "#F5F8FF",
          }}
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8926 0.5H4.35734C2.23037 0.5 0.5 2.23037 0.5 4.35734V10.8928C0.5 13.0196 2.23037 14.75 4.35734 14.75H10.8928C13.0196 14.75 14.75 13.0196 14.75 10.8928V4.35734C14.75 2.23037 13.0196 0.5 10.8926 0.5V0.5ZM7.625 11.5214C5.47649 11.5214 3.72862 9.7735 3.72862 7.625C3.72862 5.47649 5.47649 3.72862 7.625 3.72862C9.7735 3.72862 11.5214 5.47649 11.5214 7.625C11.5214 9.7735 9.7735 11.5214 7.625 11.5214ZM11.6145 4.64751C10.9796 4.64751 10.4632 4.1311 10.4632 3.49618C10.4632 2.86126 10.9796 2.34474 11.6145 2.34474C12.2495 2.34474 12.766 2.86126 12.766 3.49618C12.766 4.1311 12.2495 4.64751 11.6145 4.64751Z"
            fill="black"
          />
          <path
            d="M7.62497 5.03418C6.1964 5.03418 5.03406 6.19643 5.03406 7.62509C5.03406 9.05365 6.1964 10.216 7.62497 10.216C9.05362 10.216 10.2159 9.05365 10.2159 7.62509C10.2159 6.19643 9.05362 5.03418 7.62497 5.03418Z"
            fill="black"
          />
          <path
            d="M11.6145 3.18018C11.4404 3.18018 11.2986 3.32195 11.2986 3.49611C11.2986 3.67028 11.4404 3.81205 11.6145 3.81205C11.7888 3.81205 11.9306 3.67039 11.9306 3.49611C11.9306 3.32184 11.7888 3.18018 11.6145 3.18018Z"
            fill="black"
          />
        </svg>

        <svg
          style={{
            width: "32px",
            height: "32px",
            padding: "8.5px",
            borderRadius: "50%",
            background: "#F5F8FF",
          }}
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.69874 0.00332907L5.77991 0C3.62416 0 2.23102 1.54552 2.23102 3.93762V5.75313H0.301719C0.135004 5.75313 0 5.89927 0 6.07954V8.71001C0 8.89028 0.135158 9.03626 0.301719 9.03626H2.23102V15.6738C2.23102 15.854 2.36603 16 2.53274 16H4.69828C4.865 16 5 15.8539 5 15.6738V9.03626H7.60746C7.77417 9.03626 7.90918 8.89028 7.90918 8.71001L7.9101 6.07954C7.9101 5.99299 7.87824 5.91009 7.82174 5.84884C7.76525 5.78758 7.68828 5.75313 7.60823 5.75313H5V4.2141C5 3.47438 5.51467 3.09886 6.40582 3.09886L7.69844 3.09836C7.865 3.09836 8 2.95222 8 2.77211V0.329578C8 0.149642 7.86515 0.00366197 7.69874 0.00332907Z"
            fill="black"
          />
        </svg>

        <div className="relative">
          <input
            type="text"
            placeholder="ძიება"
            className={`focus:outline-none ${styles.search}`}
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.3851 15.4458C11.7348 17.5685 7.85538 17.4014 5.3986 14.9446C2.76256 12.3086 2.76256 8.0347 5.3986 5.39866C8.03464 2.76262 12.3085 2.76262 14.9445 5.39866C17.4013 7.85544 17.5684 11.7349 15.4457 14.3851L20.6014 19.5408C20.8943 19.8337 20.8943 20.3085 20.6014 20.6014C20.3085 20.8943 19.8336 20.8943 19.5407 20.6014L14.3851 15.4458ZM6.45926 13.8839C4.40901 11.8337 4.40901 8.50957 6.45926 6.45932C8.50951 4.40907 11.8336 4.40907 13.8839 6.45932C15.9326 8.50807 15.9341 11.8288 13.8884 13.8794C13.8869 13.8809 13.8854 13.8824 13.8839 13.8839C13.8824 13.8854 13.8809 13.8869 13.8794 13.8884C11.8288 15.9342 8.50801 15.9327 6.45926 13.8839Z"
              fill="#1D2D35"
            />
          </svg>
        </div>
      </div>
      <div className={styles.burgermenu}>
        <button onClick={toggleBurgerMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
              fill="#1D2D35"
            />
          </svg>
        </button>
        {isBurgerMenuOpen && (
          <div
            className={`fixed  left-0 w-screen h-screen bg-white z-50 flex flex-col  ${styles.toggleBurgerMenu}`}
            onClick={toggleBurgerMenu}
          >
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="text-gray-800 hover:bg-gray-200 py-2"
              >
                {category}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;