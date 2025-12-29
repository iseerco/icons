import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,23h24v1H0v-1ZM24,7.546v1.454h-3v10h2v1H1v-1h2v-10H0v-1.454c0-1.145.636-2.173,1.659-2.684L10.775.308c.762-.415,1.687-.416,2.465.008l9.101,4.545c1.023.511,1.659,1.54,1.659,2.684ZM4,19h4v-10h-4v10Zm11-10h-6v10h6v-10Zm5,0h-4v10h4v-10Zm3-1.454c0-.763-.424-1.449-1.106-1.79L12.777,1.203c-.492-.269-1.063-.269-1.539-.008L2.106,5.756c-.683.341-1.106,1.026-1.106,1.79v.454h22v-.454Z"/>
</svg>

);
