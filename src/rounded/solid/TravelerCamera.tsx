import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TravelerCamera = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 23c0 .553-.447 1-1 1h-6c1.104 0 1.999-.895 1.999-2v-2.002c0-1.104-.896-1.999-2-1.999l-.168-.337c-.203-.407-.619-.663-1.073-.663h-1.517c-.455 0-.87.257-1.073.663l-.168.337c-1.104 0-1.999.895-1.999 1.999v2.002c0 1.104.894 2 1.999 2h-6c-.553 0-1-.447-1-1 0-4.963 4.037-9 9-9s9 4.037 9 9zm-7.5-2c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-8.5-16h14c.553 0 1-.447 1-1s-.447-1-1-1h-1.472c-.456-1.767-2.042-3-3.871-3h-3.314c-1.828 0-3.414 1.233-3.871 3h-1.472c-.553 0-1 .447-1 1s.447 1 1 1zm1.09 2c.478 2.833 2.942 5 5.91 5s5.431-2.167 5.91-5z"/></svg>
);
