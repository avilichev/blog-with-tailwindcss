import React from 'react';
import clsx from 'clsx';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(function Layout(
  { className, ...other },
  ref,
) {
  return (
    <div
      className={clsx('flex', 'flex-col', 'min-h-screen', className)}
      {...other}
      ref={ref}
    />
  );
});

const Header = React.forwardRef<HTMLDivElement, LayoutProps>(function Header(
  { className, ...other },
  ref,
) {
  return (
    <div
      className={clsx(
        'flex-grow-0',
        'flex-shrink-0',
        'h-16',
        'shadow-md',
        className,
      )}
      {...other}
      ref={ref}
    />
  );
});

const Content = React.forwardRef<HTMLDivElement, LayoutProps>(function Content(
  { className, ...other },
  ref,
) {
  return (
    <div
      className={clsx('flex-grow', 'flex-shrink-0', className)}
      {...other}
      ref={ref}
    />
  );
});

const Footer = React.forwardRef<HTMLDivElement, LayoutProps>(function Footer(
  { className, ...other },
  ref,
) {
  return (
    <div
      className={clsx('flex-grow-0', 'flex-shrink-0', className)}
      {...other}
      ref={ref}
    />
  );
});

type LayoutType = typeof Layout & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
};

(Layout as LayoutType).Header = Header;
(Layout as LayoutType).Content = Content;
(Layout as LayoutType).Footer = Footer;

export default Layout as LayoutType;
