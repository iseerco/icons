import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsGraduationCap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.999,8L14.24,1.663c-1.361-.879-3.118-.879-4.481,0L-.006,8l4.006,2.599v9.965c.094.094,2.499,2.436,8,2.436s7.906-2.342,8-2.436v-9.968l3-1.948v11.351h1v-12h0Zm-4.999,12.13c-.548.438-2.667,1.87-7,1.87-4.301,0-6.447-1.437-7-1.872v-8.88l4.76,3.089c.681.439,1.46.658,2.24.658s1.56-.22,2.241-.659l4.759-3.09v8.884Zm-5.303-6.633c-1.047.676-2.349.675-3.394,0L1.832,8,10.303,2.503c1.047-.676,2.349-.675,3.394,0l8.467,5.498-8.466,5.497Z"/>
</svg>

);
