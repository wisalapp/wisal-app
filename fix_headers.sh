#!/bin/bash

# Function to fix header in a file
fix_header() {
  local file=$1
  # Replace the nav section with the correct one including Contact
  sed -i '/<nav className="hidden md:flex items-center gap-8">/,/<\/nav>/{
    /<nav className="hidden md:flex items-center gap-8">/a\
            <a href="/" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Home</a>\
            <a href="/features" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Features</a>\
            <a href="/pricing" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Pricing</a>\
            <a href="/about" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">About</a>\
            <a href="/contact" className="text-sm text-gray-600 hover:text-[#0A3A5C] transition">Contact</a>
    /<a href="\/\(.*\)" className="text-sm.*<\/a>/d
  }' "$file"
}

# This approach is complex, let me use a different method
