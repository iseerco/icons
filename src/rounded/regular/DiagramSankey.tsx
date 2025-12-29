import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DiagramSankey = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,6c0-.55,.45-1,1-1h7.34c.8,0,1.56-.31,2.12-.88l2.66-2.66c.94-.94,2.2-1.46,3.54-1.46h6.34c.55,0,1,.45,1,1s-.45,1-1,1h-6.34c-.8,0-1.56,.31-2.12,.88l-2.66,2.66c-.94,.94-2.2,1.46-3.54,1.46H1c-.55,0-1-.45-1-1ZM23,22H13.66c-.8,0-1.56-.31-2.12-.88l-4.66-4.66c-.94-.94-2.2-1.46-3.54-1.46H1c-.55,0-1,.45-1,1s.45,1,1,1H3.34c.8,0,1.56,.31,2.12,.88l4.66,4.66c.94,.94,2.2,1.46,3.54,1.46h9.34c.55,0,1-.45,1-1s-.45-1-1-1Zm1-11c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1H9.59l4.54,4.54c.94,.94,2.2,1.46,3.54,1.46h5.34c.55,0,1-.45,1-1s-.45-1-1-1h-5.34c-.8,0-1.56-.31-2.12-.88l-3.12-3.12h10.59c.55,0,1-.45,1-1Z"/></svg>

);
