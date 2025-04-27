import React, { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Info, Grid2x2 } from "lucide-react";
export const BuiltDifferentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  return;
};