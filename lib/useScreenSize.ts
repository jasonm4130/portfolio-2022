import { useMediaQuery } from 'react-responsive';

/**
 * This hook returns the current screen size breakpoint
 * It uses the react-responsive library to determine the current screen size
 * @returns {string} - Returns the current screen size breakpoint as a string
 */
export default function useScreenSize() {
  const isDesktop = useMediaQuery({ query: '(min-width: 1200px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  if (isDesktop) {
    return 'desktop';
  }

  if (isTablet) {
    return 'tablet';
  }

  return 'mobile';
}
