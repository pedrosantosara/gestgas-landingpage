"use client"

import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function SupportFloat() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5599999999999"
  const whatsappText = "Olá! Gostaria de falar com o suporte do GestGAS."
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("keyup", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keyup", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [open])

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      <Button
        aria-label="Abrir suporte (WhatsApp)"
        className="rounded-full w-14 h-14 p-0 bg-green-500 text-white shadow-lg hover:scale-105 transition-transform ring-2 ring-green-500/30 hover:bg-green-600"
        onClick={() => setOpen((v) => !v)}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {open && (
        <div
          ref={panelRef}
          className="absolute bottom-20 right-0 w-72 rounded-xl border border-border bg-card shadow-xl p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="font-semibold">Precisa de ajuda?</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Abra um chamado e nossa equipe entrará em contato.
          </p>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-green-500 text-white hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" /> Abrir conversa no WhatsApp
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Resposta rápida em horário comercial.
          </p>
        </div>
      )}
    </div>
  )
}