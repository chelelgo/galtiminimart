import { useState } from "react";
import { MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const areas = ["Elgonview", "Pioneer", "West Indies", "Kapsoya", "Annex", "Eldoret CBD"];
export const DeliveryAreaDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [custom, setCustom] = useState("");
  const save = (area: string) => {
    localStorage.setItem("galti-location", area);
    window.dispatchEvent(new Event("galti-location-changed"));
    onOpenChange(false);
  };
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-w-md rounded-sm"><DialogHeader><DialogTitle className="text-2xl uppercase">Where to?</DialogTitle><DialogDescription>Choose your delivery area around Eldoret.</DialogDescription></DialogHeader><div className="grid grid-cols-2 gap-2">{areas.map((area) => <Button key={area} variant="outline" className="h-11 justify-start rounded-sm" onClick={() => save(`${area}, Eldoret`)}><MapPin className="h-4 w-4" />{area}</Button>)}</div><div className="flex gap-2"><Input className="h-11 rounded-sm" value={custom} onChange={(event) => setCustom(event.target.value)} placeholder="Other neighbourhood" /><Button className="h-11 rounded-sm" disabled={!custom.trim()} onClick={() => save(custom.trim())}>Save</Button></div></DialogContent></Dialog>;
};