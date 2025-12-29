import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBrakeWarning = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M1,12c0,2.801,1.142,5.435,3.214,7.417l-.691,.723C1.251,17.967,0,15.076,0,12S1.251,6.033,3.522,3.86l.691,.723c-2.072,1.982-3.214,4.616-3.214,7.417ZM20.478,3.86l-.691,.723c2.072,1.982,3.214,4.616,3.214,7.417s-1.142,5.435-3.214,7.417l.691,.723c2.271-2.173,3.522-5.063,3.522-8.14s-1.251-5.967-3.522-8.14Zm-8.478,12.14c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm9-4c0,4.963-4.038,9-9,9S3,16.963,3,12,7.038,3,12,3s9,4.037,9,9Zm-1,0c0-4.411-3.589-8-8-8S4,7.589,4,12s3.589,8,8,8,8-3.589,8-8Zm-7.5-6h-1V14h1V6Z"/>
</svg>

);
