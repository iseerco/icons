import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Accordion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 21.414-1 1-1-1v-18.828l1-1 1 1zm13-18.414v18h-4.586l-1.414 1.414-1-1v-18.828l1-1 1.414 1.414zm-1 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm0-4.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-16-4.914-1-1-1.414 1.414h-4.586v4h2v2h-2v2h2v2h-2v2h2v2h-2v4h4.586l1.414 1.414 1-1zm8 0-1-1-1 1v18.828l1 1 1-1z"/></svg>
);
