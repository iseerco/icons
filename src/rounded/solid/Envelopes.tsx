import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Envelopes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18,23H5c-2.76,0-5-2.24-5-5V7c0-.55,.45-1,1-1s1,.45,1,1v11c0,1.65,1.35,3,3,3h13c.55,0,1,.45,1,1s-.45,1-1,1Zm-6.12-13.88c1.17,1.17,3.07,1.17,4.24,0l6.52-6.52c-.91-.98-2.2-1.6-3.64-1.6H9c-1.44,0-2.73,.62-3.64,1.6l6.52,6.52Zm5.66,1.41c-.97,.97-2.26,1.46-3.54,1.46s-2.56-.49-3.54-1.46L4.3,4.37c-.18,.51-.3,1.06-.3,1.63V14c0,2.76,2.24,5,5,5h10c2.76,0,5-2.24,5-5V6c0-.57-.12-1.12-.3-1.63l-6.17,6.17Z"/></svg>

);
