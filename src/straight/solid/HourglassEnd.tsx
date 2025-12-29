import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HourglassEnd = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15.624 19h-7.241a10.223 10.223 0 0 1 3.632-4.274 10.058 10.058 0 0 1 3.609 4.274zm5.376 2v3h-18v-3a12.2 12.2 0 0 1 4.442-9 12.2 12.2 0 0 1 -4.442-9 3 3 0 0 1 3-3h12a3 3 0 0 1 3 3 12.221 12.221 0 0 1 -4.425 9 12.221 12.221 0 0 1 4.425 9zm-3.09-1.155c-.561-3.566-3.593-6.023-5.349-7.169l-.549-.359-.547.36c-1.765 1.156-4.806 3.623-5.373 7.165l-.185 1.158h12.185z"/></svg>
);
