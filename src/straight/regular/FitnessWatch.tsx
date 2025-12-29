import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FitnessWatch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,3.184V0h-2V3H7.99L7.961-.01,5.961,.01l.031,3.177c-1.157,.416-1.992,1.514-1.992,2.813v12c0,1.302,.839,2.402,2,2.816v3.184h2v-3h8v3h2v-3.184c1.161-.414,2-1.514,2-2.816V6c0-1.302-.839-2.402-2-2.816Zm0,14.816c0,.552-.448,1-1,1H7c-.552,0-1-.448-1-1V6c0-.551,.448-1,1-1h10c.552,0,1,.449,1,1v12Zm-2-6.8c0,2.304-4,5-4,5,0,0-4-2.696-4-5,0-1.215,.895-2.2,2-2.2s2,.985,2,2.2c0-1.215,.895-2.2,2-2.2s2,.985,2,2.2Z"/>
</svg>

);
