import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTachometerFastest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.288,16.953l.424-.906-5.746-2.681c.022-.119,.034-.241,.034-.366,0-1.103-.897-2-2-2s-2,.897-2,2,.897,2,2,2c.62,0,1.175-.284,1.542-.728l5.746,2.681Zm-7.288-2.953c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm12-1c0,3.897-1.911,7.568-5.113,9.818l-.319,.225-2.713-2.347,.654-.756,2.117,1.831c2.746-2.078,4.374-5.328,4.374-8.771,0-6.065-4.935-11-11-11S1,6.935,1,13c0,3.443,1.628,6.693,4.374,8.771l2.117-1.831,.654,.756-2.713,2.347-.319-.225C1.911,20.568,0,16.897,0,13,0,6.383,5.383,1,12,1s12,5.383,12,12Z"/></svg>

);
