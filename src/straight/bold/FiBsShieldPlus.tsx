import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShieldPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><polygon points="13.5 7.182 10.5 7.182 10.5 9.5 8.182 9.5 8.182 12.5 10.5 12.5 10.5 14.818 13.5 14.818 13.5 12.5 15.818 12.5 15.818 9.5 13.5 9.5 13.5 7.182"/><path d="M11.922,24l-.531-.237C11.007,23.589,2,19.5,2,12V5.525A3,3,0,0,1,4.052,2.679L12,.03l7.949,2.65A2.994,2.994,0,0,1,22,5.525V12c0,8.539-9.137,11.682-9.526,11.812ZM12,3.192,5,5.525V12c0,4.67,5.344,7.847,7.077,8.753C13.819,20.026,19,17.408,19,12V5.525Z"/></svg>

);
