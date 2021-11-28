import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

export default function BotonModoOscuro({ enabled, setEnabled }) {
  const [mounted, setMounted] = useState(false);
  //console.log("Modo oscuro activado? ", enabled);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center justify-center pr-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={enabled ? "h-5 w-5 hidden" : "h-5 w-5 flex"}
        viewBox="0 0 20 20"
        fill="#fff"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </svg>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-primario" : "bg-gray-400"
        } relative inline-flex items-center h-6 rounded-full w-11 m-1`}
      >
        <span className="sr-only">Alternar modos claro y oscuro</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full`}
        />
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={enabled ? "h-5 w-5 flex" : "h-5 w-5 hidden"}
        viewBox="0 0 20 20"
        fill="#fff"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </div>
  );
}
