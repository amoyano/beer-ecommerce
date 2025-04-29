import MenuIcon from "./icons/MenuIcon";

function Header({ user }) {
  return (
    <header className="p-4 flex justify-between items-center">
      <button className="p-2 bg-white rounded-md shadow-sm" onClick={() => window.alert('Menu')}>
        <MenuIcon className="h-6 w-6 text-gray-800" />
      </button>
      <button className="w-12 h-12 rounded-full overflow-hidden" onClick={() => window.alert('Profile')}>
        <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover" />
      </button>
    </header>
  )
}

export default Header
