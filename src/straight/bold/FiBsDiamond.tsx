import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDiamond = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.365 6.134-3.365-4.718a3.417 3.417 0 0 0 -2.779-1.428h-10.442a3.417 3.417 0 0 0 -2.774 1.428l-3.371 4.719a3.434 3.434 0 0 0 .109 4.105l11.257 13.87 11.271-13.888a3.427 3.427 0 0 0 .094-4.088zm-20.289 1.744 3.37-4.718a.412.412 0 0 1 .333-.172h2.921l-1.425 5.512h7.45l-1.425-5.512h2.923a.412.412 0 0 1 .333.172l3.369 4.717a.407.407 0 0 1 .005.473l-.122.15h-5.083l-3.725 10.848-3.725-10.848h-5.081l-.107-.132a.411.411 0 0 1 -.011-.49z"/></svg>
);
