import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MemberSearch = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M9,12c-3.309,0-6-2.691-6-6S5.691,0,9,0s6,2.691,6,6-2.691,6-6,6Zm14.959,10.545l-2.792-2.792c.524-.791,.833-1.736,.833-2.753,0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5c1.017,0,1.962-.309,2.753-.833l2.792,2.792,1.414-1.414Zm-13.959-5.545c0-1.075,.25-2.09,.683-3H5c-2.761,0-5,2.239-5,5v5H16.846v-.008c-3.794-.083-6.846-3.178-6.846-6.992Z"/>
</svg>

);
