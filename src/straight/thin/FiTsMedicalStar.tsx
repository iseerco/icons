import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMedicalStar = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12.917,12l9.536,5.84-.521.854-9.473-5.801v11.107h-1v-11.107L1.986,18.693l-.521-.854,9.536-5.84L1.465,6.16l.521-.854,9.473,5.801V0h1v11.107l9.473-5.801.521.854-9.536,5.84Z"/></svg>

);
