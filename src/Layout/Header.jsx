import React, {useEffect, useState} from 'react';
import { Link } from 'react-scroll';
import { Navbar,NavBody,NavItems,MobileNav,NavbarLogo,MobileNavHeader,MobileNavToggle,MobileNavMenu, } from '../components/Navbar';
import { InteractiveHoverButton } from '../components/InteractiveHoverButton';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);    
    const navItems = [
        {
            name: "About Me",
            link: "about_me",
        },
        {
            name: "Skills",
            link: "skills",
        },
        {
            name: "Experience",
            link: "experience",
        },
    ];
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
  return (
    <>
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
                <Link to='contact' smooth={true}><InteractiveHoverButton>Contact Me</InteractiveHoverButton></Link>
            </div>
            </NavBody>
            
            {/* Mobile Navigation */}
            <MobileNav>
            <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
            </MobileNavHeader>
    
            <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            >
                {navItems.map((item, idx) => (
                <Link
                    key={`mobile-link-${idx}`}
                    to={item.link}
                    smooth={true}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative text-neutral-600 dark:text-neutral-300"
                >
                    <span className="block">{item.name}</span>
                </Link>
                ))}
                <Link to='contact' smooth={true}>Contact Me</Link>
            </MobileNavMenu>
            </MobileNav>
        </Navbar>
    </>
  )
}

export default Header