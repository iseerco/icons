import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHockeyPuck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.989,8.341c-.121-4.613-5.448-8.341-11.989-8.341S.133,3.728,.011,8.341h-.011v7.318c0,4.599,5.383,8.341,12,8.341s12-3.742,12-8.341v-7.318h-.011ZM12,1c6.065,0,11,3.364,11,7.5s-4.935,7.5-11,7.5S1,12.636,1,8.5,5.935,1,12,1Zm11,14.659c0,4.048-4.935,7.341-11,7.341S1,19.707,1,15.659v-3.772c1.852,3.005,6.083,5.113,11,5.113s9.148-2.108,11-5.113v3.772Z"/></svg>

);
