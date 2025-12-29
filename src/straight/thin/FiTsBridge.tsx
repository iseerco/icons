import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBridge = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,0V12.09l.364,.103c2.141,.607,3.636,2.583,3.636,4.807v7h3v-7c0-2.757,2.243-5,5-5s5,2.243,5,5v7h3v-7c0-2.224,1.495-4.2,3.636-4.807l.364-.103V0H0ZM23,4h-3V1h3v3Zm-18,0V1h4v3H5ZM10,1h4v3h-4V1Zm5,0h4v3h-4V1ZM4,1v3H1V1h3Zm15,16v6h-1v-6c0-3.309-2.691-6-6-6s-6,2.691-6,6v6h-1v-6c0-2.541-1.627-4.813-4-5.653V5H23v6.347c-2.373,.84-4,3.112-4,5.653Z"/>
</svg>

);
