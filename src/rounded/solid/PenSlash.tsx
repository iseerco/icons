import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.707,22.293c.391.391.391,1.023,0,1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l9.145,9.145,3.749-3.749,3.71,3.71-3.749,3.749,9.145,9.145Zm-.475-17.815c1.024-1.024,1.024-2.685,0-3.71-1.024-1.024-2.685-1.024-3.71,0l-3.507,3.507,3.71,3.71,3.507-3.507ZM1.172,19.119c-.75.75-1.172,1.768-1.172,2.828v2.053h2.053c1.061,0,2.078-.421,2.828-1.172l6.844-6.844-3.71-3.71-6.844,6.844Z"/>
</svg>

);
