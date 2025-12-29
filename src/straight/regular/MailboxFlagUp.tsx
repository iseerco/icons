import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MailboxFlagUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m4,9h4v2h-4v-2Zm15-4h2v-2h-4v7h2v-5Zm5,4v12H0v-12C0,5.691,2.691,3,6,3h9v2h-4.54c.954,1.063,1.54,2.462,1.54,4v10h10v-10c0-.732-.212-1.409-.556-2h2.206c.223.627.35,1.298.35,2ZM2,19h8v-10c0-2.206-1.794-4-4-4s-4,1.794-4,4v10Z"/>
</svg>

);
