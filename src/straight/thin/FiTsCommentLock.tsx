import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentLock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 2.5v19.85c.019.888-.766 1.666-1.649 1.648-.319 0-.637-.093-.913-.276l-4.614-3.722h-16.824v-5.762c.307.206.644.367 1 .487v4.274h16.177l4.853 3.917c.166.107.413.12.628.004.214-.114.342-.328.342-.571v-19.849c0-.827-.673-1.5-1.5-1.5h-11.93c-.161-.356-.361-.691-.595-1h12.526c1.378 0 2.5 1.121 2.5 2.5zm-24 8v-6.5h2v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h2v6.5c0 1.379-1.122 2.5-2.5 2.5h-5c-1.378 0-2.5-1.121-2.5-2.5zm3-6.5h4v-1c0-1.103-.897-2-2-2s-2 .897-2 2zm-2 6.5c0 .827.673 1.5 1.5 1.5h5c.827 0 1.5-.673 1.5-1.5v-5.5h-8zm4-1c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"/></svg>
);
