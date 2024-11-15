import FramerMotion from 'components/animations/FramerMotion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileWrapper = ({ children, ...props }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (window.history.length > 2) {
      // Check for at least two entries (SPA + initial visit)
      navigate(-1);
    } else {
      navigate('/');
    }
    return;
  };
  return (
    <FramerMotion key={props.key}  >
      <div className='mobile-wrapper' {...props}>
        <div className='mobile-container'>
          <div className='mobile-header'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='close-icon'
              onClick={handleClose}
            >
              <g clip-path='url(#clip0_15650_77792)'>
                <path
                  d='M16.4697 -1.53033C16.7626 -1.82322 17.2374 -1.82322 17.5303 -1.53033C17.8232 -1.23744 17.8232 -0.762563 17.5303 -0.46967L9.06066 8L17.5303 16.4697C17.8232 16.7626 17.8232 17.2374 17.5303 17.5303C17.2374 17.8232 16.7626 17.8232 16.4697 17.5303L8 9.06066L-0.469669 17.5303C-0.762564 17.8232 -1.23744 17.8232 -1.53033 17.5303C-1.82322 17.2374 -1.82322 16.7626 -1.53033 16.4697L6.93934 8L-1.53033 -0.46967C-1.82322 -0.762563 -1.82322 -1.23744 -1.53033 -1.53033C-1.23744 -1.82322 -0.762563 -1.82322 -0.46967 -1.53033L8 6.93934L16.4697 -1.53033Z'
                  fill='white'
                />
              </g>
              <defs>
                <clipPath id='clip0_15650_77792'>
                  <rect width='16' height='16' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          {children}
        </div>
      </div>
    </FramerMotion>
  );
};

export default MobileWrapper;
