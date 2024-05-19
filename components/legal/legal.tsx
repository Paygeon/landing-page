"use client"
import React, { useState } from 'react';
import TermsContent from '../ui/terms-conditions';
import PrivacyPolicyContent from '../ui/privacy-policy';

interface MenuItem {
    title: string;
    content: JSX.Element; // Change content type to JSX.Element
  }
  
  const LegalPages: React.FC = () => {
    const initialMenuItems: MenuItem[] = [
      { title: 'Terms', content: <TermsContent /> },
      { title: 'Privacy Policy', content: <PrivacyPolicyContent /> }
      // Add more menu items as needed
    ];
  
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(initialMenuItems[0]);
  
    const handleMenuItemClick = (menuItem: MenuItem) => {
      setSelectedMenuItem(menuItem);
    };
  
    return (
      <div className="flex h-screen">
        <div className="bg-gray-200 w-1/5 overflow-y-auto">
          <h2 className="py-4 px-6 text-xl font-bold">.</h2>
          <ul>
            {initialMenuItems.map((menuItem, index) => (
              <li key={index} className="hover:bg-gray-300 transition duration-300 transform hover:translate-x-1">
                <button onClick={() => handleMenuItemClick(menuItem)} className="block py-2 px-6 focus:outline-none">
                  {menuItem.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-300 w-4/5 p-8 overflow-y-auto">
          {selectedMenuItem ? (
            <>
              <h2 className="text-xl font-bold">{selectedMenuItem.title}</h2>
              <div className="mt-4">{selectedMenuItem.content}</div>
            </>
          ) : (
            <p>Please select a menu item to view its content.</p>
          )}
        </div>
      </div>
    );
  };
  
export default LegalPages;
