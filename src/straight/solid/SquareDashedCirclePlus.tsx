import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareDashedCirclePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,5H0V3C0,1.346,1.346,0,3,0h2V2H3c-.552,0-1,.449-1,1v2Zm0,2H0v6H2V7Zm3,11H2v-3H0v5H5v-2ZM20,3c0-1.654-1.346-3-3-3h-2V2h2c.552,0,1,.449,1,1v2h2V3ZM13,0H7V2h6V0Zm11,18c0,3.314-2.686,6-6,6s-6-2.686-6-6,2.686-6,6-6,6,2.686,6,6Zm-2-1h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2Zm-12,1h-3v2h3.262c-.165-.64-.262-1.308-.262-2ZM20,7h-2v3c.692,0,1.36,.097,2,.262v-3.262Z"/>
</svg>

);
