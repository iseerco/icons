import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MailboxEnvelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,16.244v7.756H0v-7.756l3.879,3.879c.585.585,1.353.877,2.121.877s1.536-.292,2.121-.877l3.879-3.879Zm-5.293,2.465l3.708-3.708H1.584l3.709,3.708c.378.377,1.036.377,1.414,0ZM24,6v12h-10v-5h-2V5c0-1.957-.807-3.729-2.106-5h8.106c3.309,0,6,2.691,6,6Zm-3,0h-6v2h4v2h2v-4Zm-11-1v8H0V5C0,2.243,2.243,0,5,0s5,2.243,5,5Zm-3,1H3v2h4v-2Z"/>
</svg>

);
