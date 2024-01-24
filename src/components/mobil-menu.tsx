import { useState, useEffect } from 'react'
import useOutsideClick from '@hooks/use-outside-click'
import useMediaQuery from '@hooks/use-media-query'
import MenuOpenIcon from '@components/ui/menu-open-icon'
import MenuCloseIcon from '@components/ui/menu-close-icon'

type MobileMenuProps = {
  links: string[]
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [open, setOpen] = useState(false)
  const mediaQuery = useMediaQuery()
  const isSmallScreen = mediaQuery.width <= 768

  const clickOutsideRef = useOutsideClick(() => {
    setOpen(false)
    document.body.classList.remove('overflow-hidden')
  })

  const handleMenuOpen = () => {
    if (open) {
      setOpen(false)
      document.body.classList.remove('overflow-hidden')
      return
    }
    setOpen(true)
    document.body.classList.add('overflow-hidden')
  }

  useEffect(() => {
    if (!isSmallScreen) {
      setOpen(false)
      document.body.classList.remove('overflow-hidden')
    }
  }, [isSmallScreen])

  return (
    <>
      {isSmallScreen && (
        <>
          <button className="z-50" onClick={handleMenuOpen} type="button">
            {open ? <MenuCloseIcon /> : <MenuOpenIcon />}
          </button>
          {open && (
            <>
              <nav
                className="fixed right-0 top-0 z-40 h-full w-64 bg-white pl-6 pt-[9rem]"
                ref={clickOutsideRef}
              >
                <ul className="grid gap-y-6">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        className="text-lg text-secondary transition-colors hover:text-primary"
                        href="/"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="fixed left-0 top-0 h-full w-full bg-slate-950 opacity-50 "></div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default MobileMenu
