import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GuideAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm1,2v2h-2v-2h2Zm0,8h-2v-5h2v5ZM2,18c-.738-.001-1.451.271-2,.765V3C0,1.343,1.343,0,3,0h1v18h-2Zm8,0h-4V0h12c1.105,0,2,.895,2,2v8.252c-.639-.165-1.309-.252-2-.252-4.418,0-8,3.582-8,8Zm2.709,6H2c-1.105,0-2-.895-2-2s.895-2,2-2h8.252c.405,1.573,1.276,2.958,2.457,4Z"/>
</svg>

);
