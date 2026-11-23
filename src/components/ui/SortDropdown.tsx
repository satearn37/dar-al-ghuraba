"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface SortDropdownProps {
  options: string[];
  defaultValue?: string;
}

export function SortDropdown({ options, defaultValue }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 group focus-visible:outline-none"
      >
        <span className="text-xs uppercase tracking-widest text-muted">Sort by</span>
        <span className="font-serif text-ink text-base border-b border-ink/20 group-hover:border-ink pb-0.5 transition-colors">
          {selected}
        </span>
        <ChevronDown
          size={14}
          className={clsx(
            "text-ink/50 group-hover:text-ink transition-all duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Custom dropdown panel */}
      <div
        className={clsx(
          "absolute right-0 top-full mt-3 min-w-[200px] bg-surface border border-ink/10 z-40 overflow-hidden transition-all duration-300 origin-top",
          isOpen
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        {options.map((option) => (
          <button
            key={option}
            onClick={() => {
              setSelected(option);
              setIsOpen(false);
            }}
            className={clsx(
              "w-full text-left px-5 py-3 font-sans text-sm transition-colors duration-200",
              option === selected
                ? "text-ink bg-background font-medium"
                : "text-muted hover:text-ink hover:bg-background/50"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
