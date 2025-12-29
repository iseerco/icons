import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsShovelSnow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.872,7.128l2.121-2.121L18.993.007l-2.121,2.121,1.439,1.439-5.704,5.704-1.582-1.582c-1.398-1.399-3.676-1.399-5.074,0L-.012,13.651l10.36,10.36,5.962-5.963c1.399-1.399,1.399-3.675,0-5.074l-1.582-1.582,5.704-5.704,1.439,1.439Zm-7.683,8.8l-3.841,3.841-1.998-1.998,2.633-2.633-2.121-2.121-2.633,2.633-1.998-1.998,3.841-3.841c.229-.229.603-.229.832,0l5.285,5.285c.229.229.229.603,0,.832Z"/>
</svg>

);
