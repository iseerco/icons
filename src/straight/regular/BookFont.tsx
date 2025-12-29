import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookFont = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,0H5C3.35,0,2,1.35,2,3V21c0,1.65,1.35,3,3,3H22V2c0-1.1-.9-2-2-2Zm0,18H8V2h12V18ZM5,2h1V18h-1c-.35,0-.69,.06-1,.17V3c0-.55,.45-1,1-1Zm0,20c-.55,0-1-.45-1-1s.45-1,1-1h15v2H5Zm6.49-6.98l.71-2h3.59l.71,2h2.12l-3.22-9.02c-.22-.6-.77-.99-1.41-.99s-1.19,.39-1.41,1l-3.22,9.02h2.12Zm2.51-7.03l1.08,3.03h-2.16l1.08-3.03Z"/></svg>

);
