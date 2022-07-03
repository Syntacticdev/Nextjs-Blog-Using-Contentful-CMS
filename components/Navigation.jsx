import React, { useState } from "react";

const Navigation = () => {
  const counts = [];
  const genbtn = () => {
    for (let i = 1; i <= 10; i++) {
      counts.push(i);
      counts.map((count) => <button>{count}</button>);
    }
  };
  return (
    <div>
      <div>{genbtn()}</div>
    </div>
  );
};

export default Navigation;
