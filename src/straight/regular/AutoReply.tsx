import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AutoReply = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M17,10c-3.86,0-7,3.14-7,7s3.14,7,7,7,7-3.14,7-7-3.14-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm0-6h3v2h-3v2.454l-2.687-2.687c-.417-.417-.417-1.093,0-1.51l2.687-2.688v2.431Zm-9,1c0,.688,.084,1.356,.231,2h-.455l-4.479,2.669c-1.339,.935-3.356-.179-3.296-1.814V3C0,1.346,1.346,0,3,0H19c1.654,0,3,1.346,3,3v6.518c-.616-.412-1.289-.743-2-.995V3c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1V19.855c-.039,.085,.18,.203,.229,.123l4.995-2.978h.775Z"/>
</svg>

);
