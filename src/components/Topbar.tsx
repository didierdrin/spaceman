// Topbar component
import { ShoppingCart, Search } from 'lucide-react';

const TopBar = () => (
    <header className="fixed top-0 w-full h-16 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Spaceman</h1>
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search beats..."
              className="w-full pl-10 pr-4 py-2 border rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sign in</button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sign up</button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
            Start Selling
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );


  export default TopBar; 