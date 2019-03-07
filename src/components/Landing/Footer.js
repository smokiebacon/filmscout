import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-primary text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Film Scouter
      </footer>
  )
}
