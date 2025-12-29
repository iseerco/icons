import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAgeRestrictionSeven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.037-9-9S7.038,3,12,3s9,4.037,9,9-4.038,9-9,9Zm7-9c0,.553-.448,1-1,1h-1v1c0,.553-.448,1-1,1s-1-.447-1-1v-1h-1c-.552,0-1-.447-1-1s.448-1,1-1h1v-1c0-.553.448-1,1-1s1,.447,1,1v1h1c.552,0,1,.447,1,1Zm-6.273-4.137c.334.541.364,1.203.08,1.771l-3.939,6.863c-.185.322-.521.502-.868.502-.169,0-.34-.043-.497-.133-.479-.275-.644-.887-.369-1.365l3.734-6.502h-3.367c-.552,0-1-.447-1-1s.448-1,1-1h3.678c.636,0,1.214.323,1.549.863Z"/>
</svg>

);
