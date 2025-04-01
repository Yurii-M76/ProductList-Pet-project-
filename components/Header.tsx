import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="siteName">
        SiteName
      </Link>
    </header>
  );
};

export default Header;
