import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowFromBottom = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,23v1H5v-1h6.5V1.156c-.071.042-.146.076-.207.137l-4.95,4.95-.707-.707L10.586.586c.756-.756,2.072-.756,2.828,0l4.95,4.95-.707.707L12.707,1.293c-.061-.061-.136-.095-.207-.137v21.844h6.5Z"/>
</svg>

);
