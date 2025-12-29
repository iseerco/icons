import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Entrance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.365 15.415-3.173 3.259-1.434-1.396 2.218-2.278h-6.976v-2h6.964l-2.205-2.278 1.434-1.396 3.183 3.269c.368.368.576.87.576 1.405s-.208 1.037-.586 1.415zm14.635-11.214v19.799h-16v-4.316l2-2.055v4.371h2v-18h-1c-.552 0-1 .449-1 1v5.371l-2-2.054v-3.316c0-1.654 1.346-3 3-3h1.19c.18-.507.48-.968.908-1.319.699-.573 1.608-.8 2.491-.623l6 1.2c1.396.279 2.411 1.516 2.411 2.941zm-6 7.799c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></svg>
);
