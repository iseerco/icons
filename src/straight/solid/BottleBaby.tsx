import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BottleBaby = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,6v1H7v-1c0-1.103,.897-2,2-2h1.266c-.168-.869-.266-1.638-.266-2,0-1.105,.895-2,2-2s2,.895,2,2c0,.362-.097,1.131-.266,2h1.266c1.103,0,2,.897,2,2Zm.887,3.44l-.385-.44H6.498l-.385,.44c-.667,.762-1.184,1.63-1.542,2.56h3.429v2h-3.925c-.044,.352-.075,.706-.075,1.063v.937h4v2H4v2h4v2H4v2H20V15.063c0-2.069-.75-4.066-2.113-5.623Z"/>
</svg>

);
