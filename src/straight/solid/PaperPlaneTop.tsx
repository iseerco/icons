import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PaperPlaneTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4.173,13h19.829L4.201,23.676c-.438.211-.891.312-1.332.312-.696,0-1.362-.255-1.887-.734-.84-.77-1.115-1.905-.719-2.966l.056-.123,3.853-7.165Zm-.139-12.718C2.981-.22,1.748-.037.893.749.054,1.521-.22,2.657.18,3.717l3.979,7.283h19.841L4.11.322l-.076-.04Z"/></svg>

);
