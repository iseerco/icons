import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrClawMarks = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.341,23.888C17.999,18.853,4.928,5.776.11.668-.213.325.252-.216.62.08c4.88,3.92,16.88,14.92,23.309,23.293.288.375-.244.839-.588.515Zm-.114-11.181c.299.258.73-.104.516-.435C21.56,8.894,16,3.5,11.519.054c-.312-.24-.682.22-.425.517,2.063,2.391,9.744,10.072,12.134,12.136ZM.493,9.009c-.32-.19-.657.227-.404.5,2.507,2.71,11.632,11.829,14.364,14.365.276.256.693-.093.497-.414C12.346,19.201,2.827,10.396.493,9.009Z"/></svg>

);
