import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrLessThanEqual = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,23.5c0,.276-.224.5-.5.5H3.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h17c.276,0,.5.224.5.5Zm-.299-5.458l-15.513-6.826c-.728-.296-1.205-.981-1.188-1.704.017-.692.483-1.325,1.204-1.619L20.704.956c.252-.112.365-.408.252-.66-.113-.251-.406-.368-.661-.252L4.812,6.974c-1.074.438-1.785,1.424-1.811,2.515-.027,1.136.701,2.202,1.798,2.648l15.5,6.821c.065.028.134.042.201.042.192,0,.376-.111.458-.299.111-.253-.003-.548-.256-.659Z"/>
</svg>

);
