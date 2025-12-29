import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPumpMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.738,3c.297,0,.585.087.832.252l2.502,1.668,1.664-2.496-2.503-1.669c-.742-.494-1.605-.755-2.495-.755h-6.238c-1.93,0-3.5,1.57-3.5,3.5v1.513c-3.555,1.258-6,4.685-6,8.487v10.5h18v-10.5c0-3.802-2.445-7.228-6-8.487v-2.013h3.738Zm-.738,10.5v7.5H6v-7.5c0-2.389,1.448-4.556,3.598-5.5h4.804c2.15.944,3.598,3.111,3.598,5.5Zm-4.5,0h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3v2.5Z"/></svg>

);
