import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BookCircleArrowRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm2.687,6.744l-2.687,2.688v-2.431h-3v-2h3v-2.454l2.687,2.687c.417.417.417,1.093,0,1.51Zm-18.687-.744c-.738-.001-1.451.271-2,.765V3C0,1.343,1.343,0,3,0h1v18h-2Zm8,0h-4V0h12c1.105,0,2,.895,2,2v8.252c-.639-.165-1.309-.252-2-.252-4.418,0-8,3.582-8,8Zm2.709,6H2c-1.105,0-2-.895-2-2s.895-2,2-2h8.252c.405,1.573,1.276,2.958,2.457,4Z"/></svg>

);
