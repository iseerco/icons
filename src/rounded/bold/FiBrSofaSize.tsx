import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSofaSize = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,13.051v-.551c0-3.033-2.467-5.5-5.5-5.5H7.5c-3.033,0-5.5,2.467-5.5,5.5v.551c-1.14.232-2,1.242-2,2.449v2c0,1.557.795,2.93,2,3.738v1.262c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-.5h14v.5c0,.829.671,1.5,1.5,1.5s1.5-.671,1.5-1.5v-1.262c1.205-.808,2-2.182,2-3.738v-2c0-1.207-.86-2.217-2-2.449Zm-17-.551c0-1.378,1.122-2.5,2.5-2.5h9c1.378,0,2.5,1.122,2.5,2.5v4.5H5v-4.5ZM.227,4.048c-.302-.303-.302-.793,0-1.096L2.678.502c.488-.488,1.322-.142,1.322.548v.951h16v-.951c0-.69.834-1.036,1.322-.548l2.451,2.451c.302.302.302.793,0,1.096l-2.451,2.451c-.488.488-1.322.142-1.322-.548v-.951H4v.951c0,.69-.834,1.036-1.322.548L.227,4.048Z"/>
</svg>

);
