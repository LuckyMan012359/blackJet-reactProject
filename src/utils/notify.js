import toast from 'react-hot-toast';

const getFontSizeClass = (size) => {
  switch (size) {
    case '1rem':
      return 'text-base';
    case '1.5rem':
      return 'text-lg';
    case '2rem':
      return 'text-xl';
    default:
      return 'text-base'; // Default font size
  }
};

export const showMessage = (message, size = '1rem', duration = 5000) => {
  toast.dismiss();
  toast.success(
    <div
      // style={{ fontSize: size }}
      className={getFontSizeClass(size)}
    >
      {message}
    </div>,
    {
      duration: duration,
      icon: (
        <div
          className={`showMessageIcon ${getFontSizeClass(size)}`}
          // style={{ fontSize: size }}
        >
          i
        </div>
      ),
    },
  );
};

export const showError = (message, size = '1rem', duration = 5000) => {
  toast.dismiss();
  toast.error(
    <div
      // style={{ fontSize: size }}
      className={getFontSizeClass(size)}
    >
      {message}
    </div>,
    {
      duration: duration,
      icon: (
        <div
          className={`showMessageIcon ${getFontSizeClass(size)}`}
          // style={{ fontSize: size }}
        >
          !
        </div>
      ),
    },
  );
};
