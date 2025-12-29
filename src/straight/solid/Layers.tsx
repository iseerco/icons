import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Layers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_22_layers" data-name="22 layers"><path d="M23.944,7.662,12,.5.056,7.662,12,14.828Z"/><polygon points="24 13.965 12 21.165 0 13.965 0 16.298 12 23.497 24 16.298 24 13.965"/><polygon points="24 9.634 21.485 11.143 21.485 11.143 12 16.834 2.515 11.143 2.515 11.143 0 9.634 0 11.966 12 19.166 24 11.966 24 9.634"/></g></svg>

);
