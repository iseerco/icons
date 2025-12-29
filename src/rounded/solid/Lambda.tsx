import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Lambda = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,22h-1.028c-1.143,0-2.171-.636-2.683-1.658L10.5,2.764c-.854-1.705-2.566-2.764-4.472-2.764h-1.028c-.553,0-1,.447-1,1s.447,1,1,1h1.028c1.143,0,2.171.636,2.683,1.658l1.574,3.148L2.112,22.539c-.254.49-.063,1.094.427,1.349.147.076.305.112.46.112.361,0,.71-.196.889-.539l7.503-14.443,6.109,12.219c.854,1.705,2.566,2.764,4.472,2.764h1.028c.553,0,1-.447,1-1s-.447-1-1-1Z"/>
</svg>

);
