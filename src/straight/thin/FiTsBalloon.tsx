import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBalloon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,9.282C22,4.164,17.514,0,12,0S2,4.164,2,9.282c0,5.523,3.62,11.649,8.657,12.593-.404.455-.657,1.07-.657,1.625v.5h4v-.5c0-.555-.253-1.17-.657-1.625,5.036-.944,8.657-7.07,8.657-12.593Zm-10.883,13.718c.18-.415.54-.8.883-.8s.703.385.883.8h-1.766Zm.883-2c-5.068,0-9-6.299-9-11.718C3,4.716,7.037,1,12,1s9,3.716,9,8.282c0,5.419-3.932,11.718-9,11.718Zm5-10.981h1c0,2.117-.916,4.353-2.392,5.834l-.709-.705c1.276-1.281,2.101-3.295,2.101-5.129Z"/>
</svg>

);
