import React from "react";

export default function Ex7() {
  const buttonTypes = ["success", "warning", "danger", "primary"];

  const getButtonClass = (type: any) => {
    return [styles.button, styles[type]].join(" ");
  };

  return (
    <div>
      {buttonTypes.map((type) => (
        <button key={type} className={getButtonClass(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}
