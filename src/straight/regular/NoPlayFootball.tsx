import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NoPlayFootball = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10 5.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm-2.5 9.489c-.835 0-1.511.677-1.511 1.511s.677 1.511 1.511 1.511 1.511-.677 1.511-1.511-.677-1.511-1.511-1.511zm16.5-2.989c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12 12 5.383 12 12zm-12-10c-2.398 0-4.6.85-6.324 2.262l4.056 4.056.453-.317h7.815v2h-3.882l1.5 3h3.382v2h-2.586l3.324 3.324c1.412-1.725 2.262-3.927 2.262-6.324 0-5.514-4.486-10-10-10zm0 20c2.398 0 4.6-.85 6.324-2.262l-14.062-14.062c-1.412 1.725-2.262 3.927-2.262 6.324 0 5.514 4.486 10 10 10zm-4.21-9.968-1.433-1.433-1.43 1.082 1.146 1.639 1.717-1.287zm2.21 2.21v4.757h2v-2.757z"/></svg>
);
