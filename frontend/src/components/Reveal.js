import React from "react";
import { useReveal } from "../hooks/useReveal";

// Simple scroll reveal wrapper
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
