import React from "react";

const BottomBar = ()=>{
    return <footer className="bg-gray-100 text-gray-600 py-6 shadow mt-auto">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h5 className="text-lg font-bold mb-2">About us</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-800">Job Portals</a></li>
            <li><a href="#" className="hover:text-gray-800">About MiraiTech</a></li>
            <li><a href="#" className="hover:text-gray-800">Team</a></li>
            <li><a href="#" className="hover:text-gray-800">Career</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-lg font-bold mb-2">Info</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-800">New Jobs</a></li>
            <li><a href="#" className="hover:text-gray-800">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-800">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-800">Cookie settings</a></li>
            <li><a href="#" className="hover:text-gray-800">Technical information</a></li>
          </ul>
        </div>
  
        <div>
          <h5 className="text-lg font-bold mb-2">Cooperation</h5>
          <ul>
            <li><a href="#" className="hover:text-gray-800">International</a></li>
          </ul>
        </div>
  
        <div>
          <div className="flex space-x-2">
            <a href="#" className="hover:text-gray-800">App Store</a>
            <a href="#" className="hover:text-gray-800">Google Play</a>
          </div>
        </div>
      </div>
  
      <div className="text-center mt-8 md:mt-12">
        <p className="text-sm">© 2024 MiraiTech</p>
        <div className="mt-2">
          <a href="#" className="hover:text-gray-800 px-1">Deutsch</a>
          <a href="#" className="hover:text-gray-800 px-1">Français</a>
          <a href="#" className="hover:text-gray-800 px-1">English</a>
        </div>
      </div>
    </div>
  </footer>
  
}

export default BottomBar