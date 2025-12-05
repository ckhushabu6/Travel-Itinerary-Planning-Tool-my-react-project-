import React from "react";
import { Button } from "../ui/button";
import Hero from "./Hero";

function Header() {
  return (
    <div>
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backdropFilter: "blur(12px)",
        background: "rgba(255, 255, 255, 0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <img
        src="/logo.svg"
        alt="Ai travel planner"
        style={{ height: "50px", width: "auto" }}
      />

      <Button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
      >
        Sign In
      </Button>
    </header>
    
    </div>
   
  );
}

export default Header;
