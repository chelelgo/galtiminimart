import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Locate } from "lucide-react";

const KEY = "galti-location";

export const LocationModal = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (loc: string) => {
    localStorage.setItem(KEY, loc);
    window.dispatchEvent(new Event("galti-location-changed"));
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Where should we deliver your shopping?
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter Building, Street, or Area"
              className="pl-9 h-12 rounded-xl"
              onKeyDown={(e) => e.key === "Enter" && value && save(value)}
            />
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center"><span className="bg-card px-3 text-xs text-muted-foreground uppercase tracking-wide">or</span></div>
          </div>
          <Button
            onClick={() => save("Elgonview, Eldoret")}
            className="w-full h-12 rounded-full text-base font-semibold"
            size="lg"
          >
            <Locate className="w-5 h-5" />
            Detect My Current Location
          </Button>
          <p className="text-[11px] text-center text-muted-foreground">
            We currently deliver across Elgonview & nearby estates in Eldoret.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
