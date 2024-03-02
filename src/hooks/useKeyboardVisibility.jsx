import { useEffect, useState } from 'react';

function useKeyboardVisibility() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const handleKeyboardShow = (e) => {
      const height = e.detail.keyboardHeight || 300; // Default height in case the keyboard height is not provided
      setKeyboardHeight(height);
      setIsKeyboardVisible(true);
    };

    const handleKeyboardHide = () => {
      setKeyboardHeight(0);
      setIsKeyboardVisible(false);
    };

    window.addEventListener('keyboardDidShow', handleKeyboardShow);
    window.addEventListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      window.removeEventListener('keyboardDidShow', handleKeyboardShow);
      window.removeEventListener('keyboardDidHide', handleKeyboardHide);
    };
  }, []);

  return { keyboardHeight, isKeyboardVisible };
}

export default useKeyboardVisibility;
