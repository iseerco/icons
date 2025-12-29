import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDropDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,16.5H3v-1h9v1Zm0,3.5v-1H3v1h9Zm0-8H3v1h9v-1Zm12-3h-9v15H0V2.5C0,1.121,1.122,0,2.5,0h19c1.378,0,2.5,1.121,2.5,2.5v6.5Zm-10,0H1v14h13v-14Zm9-6.5c0-.827-.673-1.5-1.5-1.5H2.5c-.827,0-1.5.673-1.5,1.5v5.5h22V2.5Zm-11.221.5h9.352l-3.624,3.565c-.291.289-.671.435-1.052.435s-.762-.146-1.052-.436l-3.624-3.564Zm6.909,1h-4.467l1.885,1.854c.194.193.504.194.694.003l.003-.003,1.885-1.854Z"/>
</svg>

);
