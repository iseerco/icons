import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTr1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13.5,24c-.276,0-.5-.224-.5-.5V1.502c0-.31-.236-.432-.309-.462-.073-.031-.327-.112-.545,.108L6.893,7.812c-.171,.217-.484,.254-.702,.083-.217-.171-.254-.485-.083-.702L11.4,.485C11.876,.004,12.503-.12,13.074,.116c.571,.237,.926,.768,.926,1.386V23.5c0,.276-.224,.5-.5,.5Z"/></svg>

);
