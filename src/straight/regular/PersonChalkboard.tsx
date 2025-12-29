import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonChalkboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,3V15H10v-2h12V3c0-.552-.448-1-1-1H9.462c-.082-.733-.331-1.416-.722-2h12.26c1.654,0,3,1.346,3,3ZM6,15H2v-6c0-.552,.448-1,1-1H15v-2H3c-1.654,0-3,1.346-3,3v8H2v7h2v-7h2v7h2V10h-2v5Zm-1-10c1.381,0,2.5-1.119,2.5-2.5S6.381,0,5,0,2.5,1.119,2.5,2.5s1.119,2.5,2.5,2.5Z"/>
</svg>

);
