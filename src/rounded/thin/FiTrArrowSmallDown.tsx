import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m17.847,14.36l-4.086,3.923c-.479.473-1.132.713-1.761.717-.634,0-1.295-.264-1.77-.743l-4.037-3.942c-.197-.192-.201-.509-.008-.707.193-.195.509-.201.707-.008l4.043,3.948c.165.166.358.287.564.361V5.5c0-.276.224-.5.5-.5s.5.224.5.5v12.416c.205-.07.398-.187.562-.349l4.091-3.928c.2-.191.517-.185.707.014.191.199.186.517-.014.707Zm-5.847,4.64c-.009,0,.016.001,0,0h0Z"/>
</svg>

);
